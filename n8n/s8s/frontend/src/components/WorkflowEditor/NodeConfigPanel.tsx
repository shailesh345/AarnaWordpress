import { useState, useEffect } from 'react'
import { X, Save, TestTube } from 'lucide-react'
import { Node } from 'reactflow'
import toast from 'react-hot-toast'

interface NodeConfigPanelProps {
  node: Node | null
  onClose: () => void
  onSave: (nodeId: string, config: any) => void
}

export function NodeConfigPanel({ node, onClose, onSave }: NodeConfigPanelProps) {
  const [config, setConfig] = useState<any>({})
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    if (node) {
      setConfig(node.data.config || {})
      setErrors({})
    }
  }, [node])

  if (!node) return null

  const validateConfig = (): boolean => {
    const newErrors: Record<string, string> = {}
    
    switch (node.type) {
      case 'http':
        if (!config.url) newErrors.url = 'URL is required'
        if (!config.method) newErrors.method = 'Method is required'
        break
      case 'email':
        if (!config.to) newErrors.to = 'Recipient email is required'
        if (!config.subject) newErrors.subject = 'Subject is required'
        break
      case 'database':
        if (!config.query) newErrors.query = 'Query is required'
        break
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSave = () => {
    if (validateConfig()) {
      onSave(node.id, config)
      toast.success('Configuration saved!')
      onClose()
    }
  }

  const handleJsonChange = (value: string, field: string) => {
    try {
      const parsed = JSON.parse(value)
      setConfig({ ...config, [field]: parsed })
      if (errors[field]) {
        const newErrors = { ...errors }
        delete newErrors[field]
        setErrors(newErrors)
      }
    } catch (error) {
      setErrors({ ...errors, [field]: 'Invalid JSON format' })
    }
  }

  const renderConfigFields = () => {
    switch (node.type) {
      case 'http':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-1">
                URL *
              </label>
              <input
                type="url"
                value={config.url || ''}
                onChange={(e) => {
                  setConfig({ ...config, url: e.target.value })
                  if (errors.url) setErrors({ ...errors, url: '' })
                }}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                  errors.url ? 'border-red-500' : 'border-secondary-300'
                }`}
                placeholder="https://api.example.com/endpoint"
              />
              {errors.url && (
                <p className="mt-1 text-sm text-red-600">{errors.url}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-1">
                Method
              </label>
              <select
                value={config.method || 'GET'}
                onChange={(e) => setConfig({ ...config, method: e.target.value })}
                className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
                <option value="PATCH">PATCH</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-1">
                Headers (JSON)
              </label>
              <textarea
                value={config.headers ? JSON.stringify(config.headers, null, 2) : '{}'}
                onChange={(e) => handleJsonChange(e.target.value, 'headers')}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 font-mono text-sm ${
                  errors.headers ? 'border-red-500' : 'border-secondary-300'
                }`}
                rows={4}
                placeholder='{"Content-Type": "application/json"}'
              />
              {errors.headers && (
                <p className="mt-1 text-sm text-red-600">{errors.headers}</p>
              )}
            </div>

            {config.method !== 'GET' && (
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-1">
                  Body (JSON)
                </label>
                <textarea
                  value={config.body ? JSON.stringify(config.body, null, 2) : '{}'}
                  onChange={(e) => handleJsonChange(e.target.value, 'body')}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 font-mono text-sm ${
                    errors.body ? 'border-red-500' : 'border-secondary-300'
                  }`}
                  rows={4}
                  placeholder='{"key": "value"}'
                />
                {errors.body && (
                  <p className="mt-1 text-sm text-red-600">{errors.body}</p>
                )}
              </div>
            )}
          </div>
        )

      case 'email':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-1">
                To *
              </label>
              <input
                type="email"
                value={config.to || ''}
                onChange={(e) => {
                  setConfig({ ...config, to: e.target.value })
                  if (errors.to) setErrors({ ...errors, to: '' })
                }}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                  errors.to ? 'border-red-500' : 'border-secondary-300'
                }`}
                placeholder="recipient@example.com"
              />
              {errors.to && (
                <p className="mt-1 text-sm text-red-600">{errors.to}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-1">
                Subject *
              </label>
              <input
                type="text"
                value={config.subject || ''}
                onChange={(e) => {
                  setConfig({ ...config, subject: e.target.value })
                  if (errors.subject) setErrors({ ...errors, subject: '' })
                }}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                  errors.subject ? 'border-red-500' : 'border-secondary-300'
                }`}
                placeholder="Email subject"
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-1">
                Body
              </label>
              <textarea
                value={config.body || ''}
                onChange={(e) => setConfig({ ...config, body: e.target.value })}
                className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                rows={6}
                placeholder="Email content..."
              />
            </div>
          </div>
        )

      case 'database':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-1">
                Operation
              </label>
              <select
                value={config.operation || 'select'}
                onChange={(e) => setConfig({ ...config, operation: e.target.value })}
                className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="select">SELECT</option>
                <option value="insert">INSERT</option>
                <option value="update">UPDATE</option>
                <option value="delete">DELETE</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-1">
                Table
              </label>
              <input
                type="text"
                value={config.table || ''}
                onChange={(e) => setConfig({ ...config, table: e.target.value })}
                className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="table_name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-1">
                Query
              </label>
              <textarea
                value={config.query || ''}
                onChange={(e) => setConfig({ ...config, query: e.target.value })}
                className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 font-mono text-sm"
                rows={4}
                placeholder="SELECT * FROM users WHERE id = ?"
              />
            </div>
          </div>
        )

      case 'condition':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-1">
                Condition
              </label>
              <input
                type="text"
                value={config.condition || ''}
                onChange={(e) => setConfig({ ...config, condition: e.target.value })}
                className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="data.status === 'success'"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-1">
                Expected Value
              </label>
              <input
                type="text"
                value={config.value || ''}
                onChange={(e) => setConfig({ ...config, value: e.target.value })}
                className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="true"
              />
            </div>
          </div>
        )

      case 'delay':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-1">
                Delay (milliseconds)
              </label>
              <input
                type="number"
                value={config.delay || 1000}
                onChange={(e) => setConfig({ ...config, delay: parseInt(e.target.value) })}
                className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                min="0"
                step="100"
              />
            </div>
          </div>
        )

      case 'code':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-1">
                JavaScript Code
              </label>
              <textarea
                value={config.code || ''}
                onChange={(e) => setConfig({ ...config, code: e.target.value })}
                className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 font-mono text-sm"
                rows={10}
                placeholder="// Your JavaScript code here&#10;return { result: 'success' };"
              />
              <p className="text-xs text-secondary-500 mt-1">
                Access previous node data with: <code className="bg-secondary-100 px-1 rounded">data</code>
              </p>
            </div>
          </div>
        )

      case 'webhook':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-1">
                Webhook Path
              </label>
              <input
                type="text"
                value={config.path || '/webhook'}
                onChange={(e) => setConfig({ ...config, path: e.target.value })}
                className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="/webhook"
              />
              <p className="text-xs text-secondary-500 mt-1">
                Webhook URL will be: <code className="bg-secondary-100 px-1 rounded">http://localhost:5555{config.path || '/webhook'}</code>
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-1">
                HTTP Method
              </label>
              <select
                value={config.method || 'POST'}
                onChange={(e) => setConfig({ ...config, method: e.target.value })}
                className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
                <option value="PATCH">PATCH</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-1">
                Authentication
              </label>
              <select
                value={config.authentication || 'none'}
                onChange={(e) => setConfig({ ...config, authentication: e.target.value })}
                className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="none">None</option>
                <option value="basic">Basic Auth</option>
                <option value="token">Bearer Token</option>
              </select>
            </div>

            {config.authentication === 'basic' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    value={config.username || ''}
                    onChange={(e) => setConfig({ ...config, username: e.target.value })}
                    className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="username"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    value={config.password || ''}
                    onChange={(e) => setConfig({ ...config, password: e.target.value })}
                    className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="password"
                  />
                </div>
              </>
            )}

            {config.authentication === 'token' && (
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-1">
                  Token
                </label>
                <input
                  type="password"
                  value={config.token || ''}
                  onChange={(e) => setConfig({ ...config, token: e.target.value })}
                  className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="your-token-here"
                />
              </div>
            )}
          </div>
        )

      case 'file':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-1">
                Operation
              </label>
              <select
                value={config.operation || 'read'}
                onChange={(e) => setConfig({ ...config, operation: e.target.value })}
                className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="read">Read File</option>
                <option value="write">Write File</option>
                <option value="delete">Delete File</option>
                <option value="exists">Check if Exists</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-1">
                File Path
              </label>
              <input
                type="text"
                value={config.path || ''}
                onChange={(e) => setConfig({ ...config, path: e.target.value })}
                className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="/path/to/file.txt"
              />
            </div>

            {(config.operation === 'write') && (
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-1">
                  Content
                </label>
                <textarea
                  value={config.content || ''}
                  onChange={(e) => setConfig({ ...config, content: e.target.value })}
                  className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 font-mono text-sm"
                  rows={6}
                  placeholder="File content..."
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-1">
                Encoding
              </label>
              <select
                value={config.encoding || 'utf8'}
                onChange={(e) => setConfig({ ...config, encoding: e.target.value })}
                className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="utf8">UTF-8</option>
                <option value="ascii">ASCII</option>
                <option value="base64">Base64</option>
                <option value="binary">Binary</option>
              </select>
            </div>
          </div>
        )

      case 'input':
        return (
          <div className="space-y-4">
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-secondary-900 mb-2">Start Node</h4>
              <p className="text-sm text-secondary-500 max-w-xs mx-auto">
                This is the starting point of your workflow. It triggers automatically when you execute the workflow.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-1">
                Node Label
              </label>
              <input
                type="text"
                value={config.label || 'Start'}
                onChange={(e) => setConfig({ ...config, label: e.target.value })}
                className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Start"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-1">
                Initial Data (JSON)
              </label>
              <textarea
                value={config.data ? JSON.stringify(config.data, null, 2) : '{}'}
                onChange={(e) => handleJsonChange(e.target.value, 'data')}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 font-mono text-sm ${
                  errors.data ? 'border-red-500' : 'border-secondary-300'
                }`}
                rows={4}
                placeholder='{"message": "Workflow started"}'
              />
              {errors.data && (
                <p className="mt-1 text-sm text-red-600">{errors.data}</p>
              )}
              <p className="text-xs text-secondary-500 mt-1">
                This data will be available to the next nodes
              </p>
            </div>
          </div>
        )

      default:
        return (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-100 mb-4">
              <svg className="w-8 h-8 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-medium text-secondary-900 mb-2">{node.type} Node</h4>
            <p className="text-sm text-secondary-500">
              Configuration options for this node type are coming soon.
            </p>
          </div>
        )
    }
  }

  return (
    <div className="w-80 bg-white border-l border-secondary-200 h-full flex flex-col">
      <div className="p-4 border-b border-secondary-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-secondary-900">
            Configure {node.data.label}
          </h3>
          <button
            onClick={onClose}
            className="p-1 text-secondary-400 hover:text-secondary-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        {renderConfigFields()}
      </div>

      <div className="p-4 border-t border-secondary-200">
        <div className="flex space-x-2">
          <button
            onClick={handleSave}
            className="flex-1 btn btn-primary btn-sm"
          >
            <Save className="h-4 w-4 mr-1" />
            Save
          </button>
          <button
            className="btn btn-outline btn-sm"
            title="Test configuration"
          >
            <TestTube className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
