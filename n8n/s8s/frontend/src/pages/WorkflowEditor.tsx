import { useEffect, useState, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { 
  Save, 
  Play, 
  Pause, 
  ArrowLeft
} from 'lucide-react'
import { useWorkflowStore, WorkflowNode } from '../store/workflowStore'
import { ReactFlow, Node, Edge, addEdge, Connection, useNodesState, useEdgesState, Controls, Background, MiniMap } from 'reactflow'
import 'reactflow/dist/style.css'
import toast from 'react-hot-toast'
import { NodeLibrary } from '../components/WorkflowEditor/NodeLibrary'
import { NodeConfigPanel } from '../components/WorkflowEditor/NodeConfigPanel'
import { nodeTypes } from '../components/WorkflowEditor/NodeTypes'

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    position: { x: 250, y: 25 },
    data: { label: 'Start' },
  },
]

const initialEdges: Edge[] = []

export function WorkflowEditor() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { currentWorkflow, fetchWorkflow, updateWorkflow, isLoading } = useWorkflowStore()
  
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const [workflowName, setWorkflowName] = useState('')
  const [workflowDescription, setWorkflowDescription] = useState('')
  const [selectedNode, setSelectedNode] = useState<Node | null>(null)
  const [showConfigPanel, setShowConfigPanel] = useState(false)

  useEffect(() => {
    if (id && id !== 'new') {
      fetchWorkflow(id)
    }
  }, [id, fetchWorkflow])

  useEffect(() => {
    if (currentWorkflow) {
      setWorkflowName(currentWorkflow.name)
      setWorkflowDescription(currentWorkflow.description || '')
      setNodes(currentWorkflow.nodes)
      setEdges(currentWorkflow.edges)
    }
  }, [currentWorkflow, setNodes, setEdges])

  const onConnect = (params: Connection) => {
    setEdges((eds) => addEdge(params, eds))
  }

  const addNode = useCallback((type: string) => {
    const newNode: Node = {
      id: `${Date.now()}`,
      type,
      position: { x: 400, y: 200 + (nodes.length * 100) },
      data: { 
        label: `${type.charAt(0).toUpperCase() + type.slice(1)}`,
        config: {}
      },
    }
    setNodes((nds) => [...nds, newNode])
    toast.success(`${newNode.data.label} node added!`)
  }, [setNodes, nodes.length])

  const onNodeClick = useCallback((_event: React.MouseEvent, node: Node) => {
    setSelectedNode(node)
    setShowConfigPanel(true)
  }, [])

  const onSaveNodeConfig = useCallback((nodeId: string, config: any) => {
    setNodes((nds) => 
      nds.map((node) => 
        node.id === nodeId 
          ? { ...node, data: { ...node.data, config } }
          : node
      )
    )
  }, [])

  const handleSave = async () => {
    if (!workflowName.trim()) {
      toast.error('Workflow name is required')
      return
    }

    try {
      const workflowData = {
        name: workflowName,
        description: workflowDescription,
        nodes: nodes.map(node => ({
          id: node.id,
          type: node.type || 'input',
          position: node.position,
          data: node.data
        } as WorkflowNode)),
        edges,
        isActive: currentWorkflow?.isActive || false,
      }

      if (id === 'new') {
        // Create new workflow
        const { createWorkflow } = useWorkflowStore.getState()
        await createWorkflow(workflowData)
        toast.success('Workflow created successfully')
        navigate('/workflows')
      } else {
        // Update existing workflow
        await updateWorkflow(id!, workflowData)
        toast.success('Workflow saved successfully')
      }
    } catch (error) {
      console.error('Save error:', error)
      toast.error('Failed to save workflow')
    }
  }

  const handleExecute = async () => {
    if (!id || id === 'new') {
      toast.error('Please save the workflow first')
      return
    }

    try {
      const response = await fetch(`http://localhost:5555/api/workflows/${id}/execute`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${useWorkflowStore.getState().token}`,
          'Content-Type': 'application/json'
        }
      })
      const result = await response.json()
      
      if (result.success) {
        toast.success('Workflow execution started!')
        // Optionally navigate to execution page
        // navigate(`/executions`)
      } else {
        toast.error(result.message || 'Failed to execute workflow')
      }
    } catch (error) {
      console.error('Execute error:', error)
      toast.error('Failed to execute workflow')
    }
  }

  const handleToggleActive = async () => {
    if (!currentWorkflow) return

    try {
      await updateWorkflow(currentWorkflow.id, { 
        isActive: !currentWorkflow.isActive 
      })
      toast.success(`Workflow ${currentWorkflow.isActive ? 'paused' : 'activated'}`)
    } catch (error) {
      toast.error('Failed to update workflow status')
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-secondary-200 bg-white">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/workflows')}
            className="p-2 text-secondary-500 hover:text-secondary-700 hover:bg-secondary-100 rounded"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div>
            <input
              type="text"
              value={workflowName}
              onChange={(e) => setWorkflowName(e.target.value)}
              placeholder="Workflow name"
              className="text-xl font-semibold bg-transparent border-none outline-none text-secondary-900"
            />
            <input
              type="text"
              value={workflowDescription}
              onChange={(e) => setWorkflowDescription(e.target.value)}
              placeholder="Workflow description"
              className="block text-sm text-secondary-500 bg-transparent border-none outline-none mt-1"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={handleExecute}
            className="btn btn-primary btn-sm"
            disabled={!id || id === 'new'}
            title={!id || id === 'new' ? 'Save workflow first' : 'Execute workflow'}
          >
            <Play className="h-4 w-4 mr-1" />
            Execute
          </button>
          {currentWorkflow && (
            <button
              onClick={handleToggleActive}
              className={`btn btn-sm ${
                currentWorkflow.isActive ? 'btn-outline' : 'btn-outline'
              }`}
            >
              {currentWorkflow.isActive ? (
                <>
                  <Pause className="h-4 w-4 mr-1" />
                  Pause
                </>
              ) : (
                <>
                  <Play className="h-4 w-4 mr-1" />
                  Activate
                </>
              )}
            </button>
          )}
          <button
            onClick={handleSave}
            className="btn btn-primary btn-sm"
          >
            <Save className="h-4 w-4 mr-1" />
            Save
          </button>
        </div>
      </div>

      <div className="flex-1 flex">
        {/* Node Library */}
        <NodeLibrary onAddNode={addNode} />

        {/* Flow Canvas */}
        <div className="flex-1 relative">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={onNodeClick}
            nodeTypes={nodeTypes}
            fitView
            className="bg-secondary-50"
          >
            <Controls className="bg-white border border-secondary-200 rounded-lg shadow-sm" />
            <Background color="#e2e8f0" gap={20} />
            <MiniMap 
              className="bg-white border border-secondary-200 rounded-lg shadow-sm"
              nodeColor={(node) => {
                switch (node.type) {
                  case 'input': return '#2563eb'
                  case 'http': return '#3b82f6'
                  case 'email': return '#22c55e'
                  case 'database': return '#8b5cf6'
                  case 'condition': return '#f97316'
                  case 'delay': return '#eab308'
                  case 'code': return '#6366f1'
                  case 'webhook': return '#ef4444'
                  default: return '#64748b'
                }
              }}
            />
          </ReactFlow>
        </div>

        {/* Node Configuration Panel */}
        {showConfigPanel && (
          <NodeConfigPanel
            node={selectedNode}
            onClose={() => {
              setShowConfigPanel(false)
              setSelectedNode(null)
            }}
            onSave={onSaveNodeConfig}
          />
        )}
      </div>
    </div>
  )
}
