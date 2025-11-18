import React from 'react'
import { Handle, Position, NodeProps } from 'reactflow'
import { 
  Play, 
  Globe, 
  Mail, 
  Database, 
  GitBranch, 
  Clock,
  Code,
  FileText,
  Zap
} from 'lucide-react'

// Base node component
const BaseNode: React.FC<NodeProps & { icon: React.ReactNode; color: string }> = ({ 
  data, 
  selected, 
  icon, 
  color 
}) => {
  return (
    <div className={`px-4 py-2 shadow-md rounded-md border-2 min-w-[150px] bg-white ${
      selected ? 'border-primary-500' : 'border-secondary-200'
    }`}>
      <div className="flex items-center space-x-2">
        <div className={`p-1 rounded ${color}`}>
          {icon}
        </div>
        <div className="text-sm font-medium text-secondary-900">
          {data.label}
        </div>
      </div>
      
      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3 bg-secondary-400"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 bg-secondary-400"
      />
    </div>
  )
}

// Input Node
export const InputNode: React.FC<NodeProps> = (props) => (
  <BaseNode
    {...props}
    icon={<Play className="h-4 w-4 text-white" />}
    color="bg-primary-600"
  />
)

// HTTP Node
export const HttpNode: React.FC<NodeProps> = (props) => (
  <BaseNode
    {...props}
    icon={<Globe className="h-4 w-4 text-white" />}
    color="bg-blue-600"
  />
)

// Email Node
export const EmailNode: React.FC<NodeProps> = (props) => (
  <BaseNode
    {...props}
    icon={<Mail className="h-4 w-4 text-white" />}
    color="bg-green-600"
  />
)

// Database Node
export const DatabaseNode: React.FC<NodeProps> = (props) => (
  <BaseNode
    {...props}
    icon={<Database className="h-4 w-4 text-white" />}
    color="bg-purple-600"
  />
)

// Condition Node
export const ConditionNode: React.FC<NodeProps> = (props) => (
  <BaseNode
    {...props}
    icon={<GitBranch className="h-4 w-4 text-white" />}
    color="bg-orange-600"
  />
)

// Delay Node
export const DelayNode: React.FC<NodeProps> = (props) => (
  <BaseNode
    {...props}
    icon={<Clock className="h-4 w-4 text-white" />}
    color="bg-yellow-600"
  />
)

// Code Node
export const CodeNode: React.FC<NodeProps> = (props) => (
  <BaseNode
    {...props}
    icon={<Code className="h-4 w-4 text-white" />}
    color="bg-indigo-600"
  />
)

// Webhook Node
export const WebhookNode: React.FC<NodeProps> = (props) => (
  <BaseNode
    {...props}
    icon={<Zap className="h-4 w-4 text-white" />}
    color="bg-red-600"
  />
)

// File Node
export const FileNode: React.FC<NodeProps> = (props) => (
  <BaseNode
    {...props}
    icon={<FileText className="h-4 w-4 text-white" />}
    color="bg-gray-600"
  />
)

// Node types configuration
export const nodeTypes = {
  input: InputNode,
  http: HttpNode,
  email: EmailNode,
  database: DatabaseNode,
  condition: ConditionNode,
  delay: DelayNode,
  code: CodeNode,
  webhook: WebhookNode,
  file: FileNode,
}

// Node definitions for the node library
export const nodeDefinitions = [
  {
    type: 'input',
    name: 'Start',
    description: 'Workflow trigger point',
    icon: Play,
    color: 'bg-primary-600',
    category: 'triggers',
  },
  {
    type: 'webhook',
    name: 'Webhook',
    description: 'Trigger workflow via HTTP webhook',
    icon: Zap,
    color: 'bg-red-600',
    category: 'triggers',
  },
  {
    type: 'http',
    name: 'HTTP Request',
    description: 'Make HTTP requests to external APIs',
    icon: Globe,
    color: 'bg-blue-600',
    category: 'actions',
  },
  {
    type: 'email',
    name: 'Send Email',
    description: 'Send email notifications',
    icon: Mail,
    color: 'bg-green-600',
    category: 'actions',
  },
  {
    type: 'database',
    name: 'Database',
    description: 'Execute database operations',
    icon: Database,
    color: 'bg-purple-600',
    category: 'actions',
  },
  {
    type: 'condition',
    name: 'Condition',
    description: 'Add conditional logic to your workflow',
    icon: GitBranch,
    color: 'bg-orange-600',
    category: 'logic',
  },
  {
    type: 'delay',
    name: 'Delay',
    description: 'Add delays between workflow steps',
    icon: Clock,
    color: 'bg-yellow-600',
    category: 'logic',
  },
  {
    type: 'code',
    name: 'Code',
    description: 'Execute custom JavaScript code',
    icon: Code,
    color: 'bg-indigo-600',
    category: 'actions',
  },
  {
    type: 'file',
    name: 'File',
    description: 'Read, write, or manipulate files',
    icon: FileText,
    color: 'bg-gray-600',
    category: 'actions',
  },
]

export const nodeCategories = [
  { id: 'triggers', name: 'Triggers', color: 'bg-red-100 text-red-700' },
  { id: 'actions', name: 'Actions', color: 'bg-blue-100 text-blue-700' },
  { id: 'logic', name: 'Logic', color: 'bg-orange-100 text-orange-700' },
]
