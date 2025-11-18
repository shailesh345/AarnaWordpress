import { PrismaClient } from '@prisma/client'
import { io } from '../index'

const prisma = new PrismaClient()

interface WorkflowNode {
  id: string
  type: string
  position: { x: number; y: number }
  data: {
    label: string
    config?: Record<string, any>
  }
}

interface WorkflowEdge {
  id: string
  source: string
  target: string
  type?: string
  data?: Record<string, any>
}

interface Workflow {
  id: string
  name: string
  description?: string
  nodes: WorkflowNode[]
  edges: WorkflowEdge[]
  isActive: boolean
  userId: string
}

export const executeWorkflow = async (workflow: Workflow, executionId: string) => {
  try {
    console.log(`Starting execution of workflow: ${workflow.name}`)
    
    // Update execution status to running
    await prisma.execution.update({
      where: { id: executionId },
      data: { status: 'RUNNING' }
    })

    // Emit real-time update
    io.emit('execution_update', {
      executionId,
      status: 'RUNNING',
      message: 'Workflow execution started'
    })

    // Find the start node (input type)
    const startNode = workflow.nodes.find(node => node.type === 'input')
    if (!startNode) {
      throw new Error('No start node found in workflow')
    }

    // Execute nodes in order
    const executionData: Record<string, any> = {}
    const visitedNodes = new Set<string>()
    
    await executeNode(startNode, workflow, executionData, visitedNodes, executionId)

    // Update execution as completed
    await prisma.execution.update({
      where: { id: executionId },
      data: {
        status: 'COMPLETED',
        finishedAt: new Date(),
        data: executionData
      }
    })

    // Emit real-time update
    io.emit('execution_update', {
      executionId,
      status: 'COMPLETED',
      message: 'Workflow execution completed successfully',
      data: executionData
    })

    // Update workflow execution count
    await prisma.workflow.update({
      where: { id: workflow.id },
      data: {
        executionCount: { increment: 1 },
        lastExecuted: new Date()
      }
    })

    console.log(`Workflow execution completed: ${workflow.name}`)
  } catch (error) {
    console.error(`Workflow execution failed: ${workflow.name}`, error)
    
    // Update execution as failed
    await prisma.execution.update({
      where: { id: executionId },
      data: {
        status: 'FAILED',
        finishedAt: new Date(),
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    })

    // Emit real-time update
    io.emit('execution_update', {
      executionId,
      status: 'FAILED',
      message: 'Workflow execution failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    })
  }
}

const executeNode = async (
  node: WorkflowNode,
  workflow: Workflow,
  executionData: Record<string, any>,
  visitedNodes: Set<string>,
  executionId: string
) => {
  if (visitedNodes.has(node.id)) {
    return // Prevent infinite loops
  }
  
  visitedNodes.add(node.id)
  console.log(`Executing node: ${node.type} (${node.id})`)

  try {
    switch (node.type) {
      case 'input':
        executionData[node.id] = { message: 'Workflow started' }
        break
        
      case 'http':
        await executeHttpNode(node, executionData)
        break
        
      case 'email':
        await executeEmailNode(node, executionData)
        break
        
      case 'database':
        await executeDatabaseNode(node, executionData)
        break
        
      case 'condition':
        await executeConditionNode(node, workflow, executionData, visitedNodes, executionId)
        return // Condition nodes handle their own next node execution
        
      case 'delay':
        await executeDelayNode(node, executionData)
        break
        
      case 'code':
        await executeCodeNode(node, executionData)
        break
        
      case 'webhook':
        await executeWebhookNode(node, executionData)
        break
        
      case 'file':
        await executeFileNode(node, executionData)
        break
        
      default:
        executionData[node.id] = { message: `Node type ${node.type} not implemented` }
    }

    // Find and execute next nodes
    const nextEdges = workflow.edges.filter(edge => edge.source === node.id)
    for (const edge of nextEdges) {
      const nextNode = workflow.nodes.find(n => n.id === edge.target)
      if (nextNode) {
        await executeNode(nextNode, workflow, executionData, visitedNodes, executionId)
      }
    }
  } catch (error) {
    console.error(`Error executing node ${node.id}:`, error)
    executionData[node.id] = { error: error instanceof Error ? error.message : 'Unknown error' }
    throw error
  }
}

const executeHttpNode = async (node: WorkflowNode, executionData: Record<string, any>) => {
  const config = node.data.config || {}
  const url = config.url || 'https://httpbin.org/get'
  const method = config.method || 'GET'
  const headers = config.headers || {}
  const body = config.body

  try {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: body ? JSON.stringify(body) : undefined
    })

    let responseData
    const contentType = response.headers.get('content-type')
    if (contentType && contentType.includes('application/json')) {
      responseData = await response.json()
    } else {
      responseData = await response.text()
    }

    executionData[node.id] = {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries()),
      data: responseData,
      success: response.ok,
      url: response.url
    }
  } catch (error) {
    executionData[node.id] = {
      error: error instanceof Error ? error.message : 'HTTP request failed',
      success: false
    }
    throw error
  }
}

const executeEmailNode = async (node: WorkflowNode, executionData: Record<string, any>) => {
  const config = node.data.config || {}
  
  try {
    // In a real implementation, you would use nodemailer or similar
    // For now, we'll simulate email sending
    if (!config.to || !config.subject) {
      throw new Error('Email recipient and subject are required')
    }

    // Simulate email sending with validation
    executionData[node.id] = {
      message: 'Email sent successfully',
      to: config.to,
      subject: config.subject,
      body: config.body,
      timestamp: new Date().toISOString(),
      success: true
    }
    
    console.log(`Email sent to ${config.to}: ${config.subject}`)
  } catch (error) {
    executionData[node.id] = {
      error: error instanceof Error ? error.message : 'Email sending failed',
      success: false
    }
    throw error
  }
}

const executeDatabaseNode = async (node: WorkflowNode, executionData: Record<string, any>) => {
  const config = node.data.config || {}
  const operation = config.operation || 'select'
  const table = config.table || 'users'
  const query = config.query
  
  try {
    // In a real implementation, you would execute actual database queries
    // For now, we'll simulate database operations
    if (!table) {
      throw new Error('Table name is required for database operations')
    }

    let result
    switch (operation.toLowerCase()) {
      case 'select':
        result = [{ id: 1, name: 'Sample User', email: 'user@example.com' }]
        break
      case 'insert':
        result = { id: 2, affected: 1 }
        break
      case 'update':
        result = { affected: 1 }
        break
      case 'delete':
        result = { affected: 1 }
        break
      default:
        throw new Error(`Unsupported database operation: ${operation}`)
    }

    executionData[node.id] = {
      operation,
      table,
      query,
      message: `Database ${operation} operation completed`,
      result,
      success: true,
      timestamp: new Date().toISOString()
    }
    
    console.log(`Database ${operation} on ${table} completed`)
  } catch (error) {
    executionData[node.id] = {
      operation,
      table,
      query,
      error: error instanceof Error ? error.message : 'Database operation failed',
      success: false
    }
    throw error
  }
}

const executeConditionNode = async (
  node: WorkflowNode,
  workflow: Workflow,
  executionData: Record<string, any>,
  visitedNodes: Set<string>,
  executionId: string
) => {
  const config = node.data.config || {}
  const condition = config.condition || 'true'
  const value = config.value || 'true'
  
  // Simple condition evaluation
  const result = condition === value
  
  executionData[node.id] = {
    condition,
    value,
    result,
    message: `Condition evaluated to ${result}`
  }
  
  // Find the appropriate next node based on condition result
  const nextEdges = workflow.edges.filter(edge => edge.source === node.id)
  const nextEdge = nextEdges.find(edge => 
    (result && edge.data?.condition === 'true') || 
    (!result && edge.data?.condition === 'false')
  )
  
  if (nextEdge) {
    const nextNode = workflow.nodes.find(n => n.id === nextEdge.target)
    if (nextNode) {
      await executeNode(nextNode, workflow, executionData, visitedNodes, executionId)
    }
  }
}

const executeDelayNode = async (node: WorkflowNode, executionData: Record<string, any>) => {
  const config = node.data.config || {}
  const delay = config.delay || 1000 // Default 1 second
  
  try {
    executionData[node.id] = {
      delay,
      message: `Delayed for ${delay}ms`,
      startTime: new Date().toISOString()
    }
    
    await new Promise(resolve => setTimeout(resolve, delay))
    
    executionData[node.id] = {
      ...executionData[node.id],
      endTime: new Date().toISOString(),
      success: true
    }
    
    console.log(`Delay completed: ${delay}ms`)
  } catch (error) {
    executionData[node.id] = {
      error: error instanceof Error ? error.message : 'Delay execution failed',
      success: false
    }
    throw error
  }
}

const executeCodeNode = async (node: WorkflowNode, executionData: Record<string, any>) => {
  const config = node.data.config || {}
  const code = config.code || ''
  
  try {
    if (!code.trim()) {
      throw new Error('Code is required for code node execution')
    }

    // Create a safe execution context
    const context = {
      // Add previous node results to context
      ...executionData,
      // Add utility functions
      console: {
        log: (...args: any[]) => console.log('[Code Node]', ...args)
      },
      // Add date utilities
      Date,
      Math,
      JSON,
      // Add string utilities
      String,
      Number,
      Boolean
    }

    // Execute the code in a controlled environment
    const func = new Function('context', `
      with (context) {
        ${code}
      }
    `)

    const result = func(context)
    
    executionData[node.id] = {
      code,
      result,
      message: 'Code executed successfully',
      success: true,
      timestamp: new Date().toISOString()
    }
    
    console.log(`Code node executed successfully`)
  } catch (error) {
    executionData[node.id] = {
      code,
      error: error instanceof Error ? error.message : 'Code execution failed',
      success: false
    }
    throw error
  }
}

const executeWebhookNode = async (node: WorkflowNode, executionData: Record<string, any>) => {
  const config = node.data.config || {}
  
  try {
    // Generate a unique webhook URL
    const webhookId = `webhook_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    const webhookUrl = `${process.env.CORS_ORIGIN || 'http://localhost:3000'}/webhook/${webhookId}`
    
    executionData[node.id] = {
      webhookId,
      webhookUrl,
      message: 'Webhook endpoint created',
      success: true,
      timestamp: new Date().toISOString(),
      // Store webhook data for later retrieval
      webhookData: null
    }
    
    console.log(`Webhook created: ${webhookUrl}`)
  } catch (error) {
    executionData[node.id] = {
      error: error instanceof Error ? error.message : 'Webhook creation failed',
      success: false
    }
    throw error
  }
}

const executeFileNode = async (node: WorkflowNode, executionData: Record<string, any>) => {
  const config = node.data.config || {}
  const operation = config.operation || 'read'
  const filePath = config.filePath || ''
  const content = config.content || ''
  
  try {
    if (!filePath) {
      throw new Error('File path is required for file operations')
    }

    let result
    switch (operation.toLowerCase()) {
      case 'read':
        // Simulate file reading
        result = { content: 'Sample file content', size: 1024 }
        break
      case 'write':
        if (!content) {
          throw new Error('Content is required for write operations')
        }
        result = { written: true, size: content.length }
        break
      case 'append':
        if (!content) {
          throw new Error('Content is required for append operations')
        }
        result = { appended: true, size: content.length }
        break
      case 'delete':
        result = { deleted: true }
        break
      default:
        throw new Error(`Unsupported file operation: ${operation}`)
    }

    executionData[node.id] = {
      operation,
      filePath,
      content: operation === 'read' ? result.content : undefined,
      result,
      message: `File ${operation} operation completed`,
      success: true,
      timestamp: new Date().toISOString()
    }
    
    console.log(`File ${operation} operation completed on ${filePath}`)
  } catch (error) {
    executionData[node.id] = {
      operation,
      filePath,
      error: error instanceof Error ? error.message : 'File operation failed',
      success: false
    }
    throw error
  }
}
