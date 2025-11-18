import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Plus, 
  Play, 
  Pause, 
  Edit, 
  Trash2, 
  MoreVertical,
  Search
} from 'lucide-react'
import { useWorkflowStore, Workflow } from '../store/workflowStore'
import toast from 'react-hot-toast'

export function Workflows() {
  const { workflows, fetchWorkflows, deleteWorkflow, updateWorkflow, isLoading } = useWorkflowStore()
  const [searchTerm, setSearchTerm] = useState('')
  const [filterActive, setFilterActive] = useState<'all' | 'active' | 'inactive'>('all')

  useEffect(() => {
    fetchWorkflows()
  }, [fetchWorkflows])

  const filteredWorkflows = workflows.filter(workflow => {
    const matchesSearch = workflow.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         workflow.description?.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesFilter = filterActive === 'all' || 
                         (filterActive === 'active' && workflow.isActive) ||
                         (filterActive === 'inactive' && !workflow.isActive)
    
    return matchesSearch && matchesFilter
  })

  const handleToggleActive = async (workflow: Workflow) => {
    try {
      await updateWorkflow(workflow.id, { isActive: !workflow.isActive })
      toast.success(`Workflow ${workflow.isActive ? 'paused' : 'activated'}`)
    } catch (error) {
      toast.error('Failed to update workflow')
    }
  }

  const handleDelete = async (workflow: Workflow) => {
    if (window.confirm(`Are you sure you want to delete "${workflow.name}"?`)) {
      try {
        await deleteWorkflow(workflow.id)
        toast.success('Workflow deleted')
      } catch (error) {
        toast.error('Failed to delete workflow')
      }
    }
  }

  return (
    <div className="p-6">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-secondary-900">Workflows</h1>
            <p className="mt-2 text-secondary-600">
              Create and manage your automation workflows
            </p>
          </div>
          <Link
            to="/workflows/new"
            className="btn btn-primary"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Workflow
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-secondary-400" />
          <input
            type="text"
            placeholder="Search workflows..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input pl-10"
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setFilterActive('all')}
            className={`btn btn-sm ${filterActive === 'all' ? 'btn-primary' : 'btn-outline'}`}
          >
            All
          </button>
          <button
            onClick={() => setFilterActive('active')}
            className={`btn btn-sm ${filterActive === 'active' ? 'btn-primary' : 'btn-outline'}`}
          >
            Active
          </button>
          <button
            onClick={() => setFilterActive('inactive')}
            className={`btn btn-sm ${filterActive === 'inactive' ? 'btn-primary' : 'btn-outline'}`}
          >
            Inactive
          </button>
        </div>
      </div>

      {/* Workflows Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="card animate-pulse">
              <div className="card-content">
                <div className="h-4 bg-secondary-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-secondary-200 rounded w-1/2 mb-4"></div>
                <div className="h-8 bg-secondary-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      ) : filteredWorkflows.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorkflows.map((workflow) => (
            <div key={workflow.id} className="card hover:shadow-md transition-shadow">
              <div className="card-content">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-secondary-900 mb-1">
                      {workflow.name}
                    </h3>
                    {workflow.description && (
                      <p className="text-sm text-secondary-600 line-clamp-2">
                        {workflow.description}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => handleToggleActive(workflow)}
                      className={`p-1 rounded ${
                        workflow.isActive 
                          ? 'text-success-600 hover:bg-success-100' 
                          : 'text-secondary-400 hover:bg-secondary-100'
                      }`}
                      title={workflow.isActive ? 'Pause workflow' : 'Activate workflow'}
                    >
                      {workflow.isActive ? (
                        <Pause className="h-4 w-4" />
                      ) : (
                        <Play className="h-4 w-4" />
                      )}
                    </button>
                    <div className="relative">
                      <button className="p-1 text-secondary-400 hover:bg-secondary-100 rounded">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-secondary-500 mb-4">
                  <span>{workflow.executionCount} executions</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    workflow.isActive 
                      ? 'bg-success-100 text-success-700' 
                      : 'bg-secondary-100 text-secondary-700'
                  }`}>
                    {workflow.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>

                <div className="flex space-x-2">
                  <Link
                    to={`/workflows/${workflow.id}`}
                    className="btn btn-outline btn-sm flex-1"
                  >
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(workflow)}
                    className="btn btn-outline btn-sm text-error-600 hover:bg-error-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="mx-auto h-24 w-24 text-secondary-400 mb-4">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-secondary-900 mb-2">No workflows found</h3>
          <p className="text-secondary-500 mb-6">
            {searchTerm || filterActive !== 'all' 
              ? 'Try adjusting your search or filter criteria.'
              : 'Get started by creating your first workflow.'
            }
          </p>
          {!searchTerm && filterActive === 'all' && (
            <Link
              to="/workflows/new"
              className="btn btn-primary"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create Your First Workflow
            </Link>
          )}
        </div>
      )}
    </div>
  )
}
