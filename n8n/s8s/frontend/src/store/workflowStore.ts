import { create } from 'zustand'
import { api } from '../utils/api'

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

interface WorkflowState {
  workflows: Workflow[]
  currentWorkflow: Workflow | null
  isLoading: boolean
  error: string | null
  
  // Actions
  fetchWorkflows: () => Promise<void>
  fetchWorkflow: (id: string) => Promise<void>
  createWorkflow: (workflow: Omit<Workflow, 'id' | 'createdAt' | 'updatedAt' | 'executionCount'>) => Promise<void>
  updateWorkflow: (id: string, updates: Partial<Workflow>) => Promise<void>
  deleteWorkflow: (id: string) => Promise<void>
  setCurrentWorkflow: (workflow: Workflow | null) => void
  clearError: () => void
}

export const useWorkflowStore = create<WorkflowState>((set, _get) => ({
  workflows: [],
  currentWorkflow: null,
  isLoading: false,
  error: null,

  fetchWorkflows: async () => {
    set({ isLoading: true, error: null })
    try {
      const response = await api.get('/workflows')
      set({ workflows: response.data.data, isLoading: false })
    } catch (error: any) {
      set({ 
        error: error.response?.data?.message || 'Failed to fetch workflows',
        isLoading: false 
      })
    }
  },

  fetchWorkflow: async (id: string) => {
    set({ isLoading: true, error: null })
    try {
      const response = await api.get(`/workflows/${id}`)
      set({ currentWorkflow: response.data.data, isLoading: false })
    } catch (error: any) {
      set({ 
        error: error.response?.data?.message || 'Failed to fetch workflow',
        isLoading: false 
      })
    }
  },

  createWorkflow: async (workflowData) => {
    set({ isLoading: true, error: null })
    try {
      const response = await api.post('/workflows', workflowData)
      const newWorkflow = response.data.data
      
      set(state => ({
        workflows: [...state.workflows, newWorkflow],
        isLoading: false
      }))
    } catch (error: any) {
      set({ 
        error: error.response?.data?.message || 'Failed to create workflow',
        isLoading: false 
      })
    }
  },

  updateWorkflow: async (id: string, updates) => {
    set({ isLoading: true, error: null })
    try {
      const response = await api.put(`/workflows/${id}`, updates)
      const updatedWorkflow = response.data.data
      
      set(state => ({
        workflows: state.workflows.map(w => 
          w.id === id ? updatedWorkflow : w
        ),
        currentWorkflow: state.currentWorkflow?.id === id ? updatedWorkflow : state.currentWorkflow,
        isLoading: false
      }))
    } catch (error: any) {
      set({ 
        error: error.response?.data?.message || 'Failed to update workflow',
        isLoading: false 
      })
    }
  },

  deleteWorkflow: async (id: string) => {
    set({ isLoading: true, error: null })
    try {
      await api.delete(`/workflows/${id}`)
      
      set(state => ({
        workflows: state.workflows.filter(w => w.id !== id),
        currentWorkflow: state.currentWorkflow?.id === id ? null : state.currentWorkflow,
        isLoading: false
      }))
    } catch (error: any) {
      set({ 
        error: error.response?.data?.message || 'Failed to delete workflow',
        isLoading: false 
      })
    }
  },

  setCurrentWorkflow: (workflow) => {
    set({ currentWorkflow: workflow })
  },

  clearError: () => {
    set({ error: null })
  },
}))
