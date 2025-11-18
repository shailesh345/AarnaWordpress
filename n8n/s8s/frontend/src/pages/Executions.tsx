import { useState } from 'react'
import { 
  Pause, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Search,
  RefreshCw,
  Eye,
  X
} from 'lucide-react'
import { useExecutionUpdates } from '../hooks/useSocket'
import toast from 'react-hot-toast'

interface Execution {
  id: string
  workflowId: string
  workflowName: string
  status: 'running' | 'completed' | 'failed' | 'paused'
  startedAt: string
  finishedAt?: string
  duration?: number
  error?: string
}

const mockExecutions: Execution[] = [
  {
    id: '1',
    workflowId: 'wf-1',
    workflowName: 'Daily Report Generator',
    status: 'completed',
    startedAt: '2024-01-15T10:30:00Z',
    finishedAt: '2024-01-15T10:32:15Z',
    duration: 135,
  },
  {
    id: '2',
    workflowId: 'wf-2',
    workflowName: 'Email Notification System',
    status: 'running',
    startedAt: '2024-01-15T11:00:00Z',
  },
  {
    id: '3',
    workflowId: 'wf-3',
    workflowName: 'Data Sync Process',
    status: 'failed',
    startedAt: '2024-01-15T09:15:00Z',
    finishedAt: '2024-01-15T09:16:30Z',
    duration: 90,
    error: 'Connection timeout to external API',
  },
  {
    id: '4',
    workflowId: 'wf-1',
    workflowName: 'Daily Report Generator',
    status: 'completed',
    startedAt: '2024-01-14T10:30:00Z',
    finishedAt: '2024-01-14T10:31:45Z',
    duration: 105,
  },
]

export function Executions() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<'all' | 'running' | 'completed' | 'failed' | 'paused'>('all')
  const [executions, setExecutions] = useState<Execution[]>(mockExecutions)
  const [selectedExecution, setSelectedExecution] = useState<Execution | null>(null)

  // Real-time execution updates
  useExecutionUpdates((data) => {
    setExecutions(prev => 
      prev.map(exec => 
        exec.id === data.executionId 
          ? { 
              ...exec, 
              status: data.status.toLowerCase(),
              finishedAt: data.status === 'COMPLETED' || data.status === 'FAILED' ? new Date().toISOString() : exec.finishedAt,
              error: data.error || exec.error
            }
          : exec
      )
    )

    // Show toast notification
    if (data.status === 'COMPLETED') {
      toast.success('Workflow execution completed!')
    } else if (data.status === 'FAILED') {
      toast.error('Workflow execution failed!')
    }
  })

  const filteredExecutions = executions.filter(execution => {
    const matchesSearch = execution.workflowName.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || execution.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusIcon = (status: Execution['status']) => {
    switch (status) {
      case 'running':
        return <RefreshCw className="h-4 w-4 text-primary-600 animate-spin" />
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-success-600" />
      case 'failed':
        return <XCircle className="h-4 w-4 text-error-600" />
      case 'paused':
        return <Pause className="h-4 w-4 text-warning-600" />
      default:
        return <Clock className="h-4 w-4 text-secondary-600" />
    }
  }

  const getStatusColor = (status: Execution['status']) => {
    switch (status) {
      case 'running':
        return 'bg-primary-100 text-primary-700'
      case 'completed':
        return 'bg-success-100 text-success-700'
      case 'failed':
        return 'bg-error-100 text-error-700'
      case 'paused':
        return 'bg-warning-100 text-warning-700'
      default:
        return 'bg-secondary-100 text-secondary-700'
    }
  }

  const formatDuration = (seconds: number) => {
    if (seconds < 60) return `${seconds}s`
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}m ${remainingSeconds}s`
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString()
  }

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary-900">Executions</h1>
        <p className="mt-2 text-secondary-600">
          Monitor and manage workflow executions
        </p>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-secondary-400" />
          <input
            type="text"
            placeholder="Search executions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input pl-10"
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setStatusFilter('all')}
            className={`btn btn-sm ${statusFilter === 'all' ? 'btn-primary' : 'btn-outline'}`}
          >
            All
          </button>
          <button
            onClick={() => setStatusFilter('running')}
            className={`btn btn-sm ${statusFilter === 'running' ? 'btn-primary' : 'btn-outline'}`}
          >
            Running
          </button>
          <button
            onClick={() => setStatusFilter('completed')}
            className={`btn btn-sm ${statusFilter === 'completed' ? 'btn-primary' : 'btn-outline'}`}
          >
            Completed
          </button>
          <button
            onClick={() => setStatusFilter('failed')}
            className={`btn btn-sm ${statusFilter === 'failed' ? 'btn-primary' : 'btn-outline'}`}
          >
            Failed
          </button>
        </div>
      </div>

      {/* Executions Table */}
      <div className="card">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-secondary-200">
            <thead className="bg-secondary-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Workflow
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Started
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Duration
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-secondary-200">
              {filteredExecutions.map((execution) => (
                <tr key={execution.id} className="hover:bg-secondary-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-secondary-900">
                        {execution.workflowName}
                      </div>
                      <div className="text-sm text-secondary-500">
                        ID: {execution.id}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getStatusIcon(execution.status)}
                      <span className={`ml-2 px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(execution.status)}`}>
                        {execution.status}
                      </span>
                    </div>
                    {execution.error && (
                      <div className="mt-1 text-xs text-error-600">
                        {execution.error}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-900">
                    {formatDate(execution.startedAt)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-900">
                    {execution.duration ? formatDuration(execution.duration) : '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => setSelectedExecution(execution)}
                        className="text-primary-600 hover:text-primary-900 flex items-center"
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </button>
                      {execution.status === 'running' && (
                        <button className="text-warning-600 hover:text-warning-900">
                          Stop
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredExecutions.length === 0 && (
        <div className="text-center py-12">
          <Clock className="mx-auto h-12 w-12 text-secondary-400 mb-4" />
          <h3 className="text-lg font-medium text-secondary-900 mb-2">No executions found</h3>
          <p className="text-secondary-500">
            {searchTerm || statusFilter !== 'all' 
              ? 'Try adjusting your search or filter criteria.'
              : 'No workflow executions yet. Create and run a workflow to see executions here.'
            }
          </p>
        </div>
      )}

      {/* Execution Details Modal */}
      {selectedExecution && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
            <div className="p-6 border-b border-secondary-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-secondary-900">
                  Execution Details
                </h3>
                <button
                  onClick={() => setSelectedExecution(null)}
                  className="text-secondary-400 hover:text-secondary-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-sm font-medium text-secondary-700 mb-2">Workflow</h4>
                  <p className="text-sm text-secondary-900">{selectedExecution.workflowName}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-secondary-700 mb-2">Status</h4>
                  <div className="flex items-center">
                    {getStatusIcon(selectedExecution.status)}
                    <span className={`ml-2 px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(selectedExecution.status)}`}>
                      {selectedExecution.status}
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-secondary-700 mb-2">Started</h4>
                  <p className="text-sm text-secondary-900">{formatDate(selectedExecution.startedAt)}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-secondary-700 mb-2">Duration</h4>
                  <p className="text-sm text-secondary-900">
                    {selectedExecution.duration ? formatDuration(selectedExecution.duration) : '-'}
                  </p>
                </div>
              </div>

              {selectedExecution.error && (
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-secondary-700 mb-2">Error</h4>
                  <div className="bg-error-50 border border-error-200 rounded-md p-3">
                    <p className="text-sm text-error-700">{selectedExecution.error}</p>
                  </div>
                </div>
              )}

              <div>
                <h4 className="text-sm font-medium text-secondary-700 mb-2">Execution Data</h4>
                <div className="bg-secondary-50 border border-secondary-200 rounded-md p-3">
                  <pre className="text-xs text-secondary-700 overflow-x-auto">
                    {JSON.stringify({
                      id: selectedExecution.id,
                      workflowId: selectedExecution.workflowId,
                      status: selectedExecution.status,
                      startedAt: selectedExecution.startedAt,
                      finishedAt: selectedExecution.finishedAt,
                      duration: selectedExecution.duration,
                      error: selectedExecution.error
                    }, null, 2)}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
