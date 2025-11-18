export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  role: 'ADMIN' | 'USER'
  createdAt: string
  updatedAt: string
}

export interface WorkflowNode {
  id: string
  type: string
  position: { x: number; y: number }
  data: {
    label: string
    config?: Record<string, any>
  }
}

export interface WorkflowEdge {
  id: string
  source: string
  target: string
  type?: string
  data?: Record<string, any>
}

export interface Workflow {
  id: string
  name: string
  description?: string
  nodes: WorkflowNode[]
  edges: WorkflowEdge[]
  isActive: boolean
  createdAt: string
  updatedAt: string
  lastExecuted?: string
  executionCount: number
}

export interface Execution {
  id: string
  workflowId: string
  workflowName: string
  status: 'RUNNING' | 'COMPLETED' | 'FAILED' | 'PAUSED' | 'CANCELLED'
  startedAt: string
  finishedAt?: string
  duration?: number
  error?: string
  data?: Record<string, any>
}

export interface ApiResponse<T = any> {
  success: boolean
  message?: string
  data?: T
  error?: string
}

export interface PaginationMeta {
  page: number
  limit: number
  total: number
  pages: number
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: PaginationMeta
}
