import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Plus, 
  Play, 
  Pause, 
  BarChart3, 
  Clock, 
  CheckCircle,
  Workflow
} from 'lucide-react'
import { useWorkflowStore } from '../store/workflowStore'
import { useAuthStore } from '../store/authStore'

export function Dashboard() {
  const { workflows, fetchWorkflows, isLoading } = useWorkflowStore()
  const { user } = useAuthStore()

  useEffect(() => {
    fetchWorkflows()
  }, [fetchWorkflows])

  const activeWorkflows = workflows.filter(w => w.isActive).length
  const totalExecutions = workflows.reduce((sum, w) => sum + w.executionCount, 0)
  const recentWorkflows = workflows.slice(0, 5)

  const stats = [
    {
      name: 'Total Workflows',
      value: workflows.length,
      icon: Workflow,
      color: 'text-primary-600',
      bgColor: 'bg-primary-100',
    },
    {
      name: 'Active Workflows',
      value: activeWorkflows,
      icon: Play,
      color: 'text-success-600',
      bgColor: 'bg-success-100',
    },
    {
      name: 'Total Executions',
      value: totalExecutions,
      icon: BarChart3,
      color: 'text-warning-600',
      bgColor: 'bg-warning-100',
    },
    {
      name: 'Success Rate',
      value: '98.5%',
      icon: CheckCircle,
      color: 'text-success-600',
      bgColor: 'bg-success-100',
    },
  ]

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary-900">
          Welcome back, {user?.name}!
        </h1>
        <p className="mt-2 text-secondary-600">
          Here's what's happening with your workflows today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.name} className="card">
            <div className="card-content">
              <div className="flex items-center">
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-secondary-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-secondary-900">{stat.value}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Workflows */}
        <div className="card">
          <div className="card-header">
            <div className="flex items-center justify-between">
              <h3 className="card-title">Recent Workflows</h3>
              <Link
                to="/workflows"
                className="btn btn-outline btn-sm"
              >
                View All
              </Link>
            </div>
          </div>
          <div className="card-content">
            {isLoading ? (
              <div className="space-y-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="h-4 bg-secondary-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-secondary-200 rounded w-1/2"></div>
                  </div>
                ))}
              </div>
            ) : recentWorkflows.length > 0 ? (
              <div className="space-y-4">
                {recentWorkflows.map((workflow) => (
                  <div key={workflow.id} className="flex items-center justify-between p-3 border border-secondary-200 rounded-lg">
                    <div className="flex items-center">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-full ${
                        workflow.isActive ? 'bg-success-100' : 'bg-secondary-100'
                      }`}>
                        {workflow.isActive ? (
                          <Play className="h-4 w-4 text-success-600" />
                        ) : (
                          <Pause className="h-4 w-4 text-secondary-600" />
                        )}
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-secondary-900">{workflow.name}</p>
                        <p className="text-xs text-secondary-500">
                          {workflow.executionCount} executions
                        </p>
                      </div>
                    </div>
                    <Link
                      to={`/workflows/${workflow.id}`}
                      className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                    >
                      Edit
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Workflow className="mx-auto h-12 w-12 text-secondary-400" />
                <h3 className="mt-2 text-sm font-medium text-secondary-900">No workflows</h3>
                <p className="mt-1 text-sm text-secondary-500">
                  Get started by creating your first workflow.
                </p>
                <div className="mt-6">
                  <Link
                    to="/workflows"
                    className="btn btn-primary"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Create Workflow
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Quick Actions</h3>
          </div>
          <div className="card-content">
            <div className="space-y-4">
              <Link
                to="/workflows"
                className="flex items-center p-4 border border-secondary-200 rounded-lg hover:bg-secondary-50 transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                  <Plus className="h-5 w-5 text-primary-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-secondary-900">Create New Workflow</p>
                  <p className="text-xs text-secondary-500">Build a new automation workflow</p>
                </div>
              </Link>
              
              <Link
                to="/executions"
                className="flex items-center p-4 border border-secondary-200 rounded-lg hover:bg-secondary-50 transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning-100">
                  <BarChart3 className="h-5 w-5 text-warning-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-secondary-900">View Executions</p>
                  <p className="text-xs text-secondary-500">Monitor workflow executions</p>
                </div>
              </Link>
              
              <Link
                to="/settings"
                className="flex items-center p-4 border border-secondary-200 rounded-lg hover:bg-secondary-50 transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary-100">
                  <Clock className="h-5 w-5 text-secondary-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-secondary-900">Settings</p>
                  <p className="text-xs text-secondary-500">Configure your account</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
