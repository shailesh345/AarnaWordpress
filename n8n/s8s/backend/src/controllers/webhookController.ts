import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { io } from '../index'

const prisma = new PrismaClient()

// Store active webhooks in memory (in production, use Redis or database)
const activeWebhooks = new Map<string, { workflowId: string; userId: string }>()

// @desc    Trigger workflow via webhook
// @route   POST /api/webhooks/:webhookId
// @access  Public
export const triggerWebhook = async (req: Request, res: Response): Promise<void> => {
  try {
    const { webhookId } = req.params
    const webhookData = req.body
    const headers = req.headers

    // Find the webhook configuration
    const webhookConfig = activeWebhooks.get(webhookId)
    if (!webhookConfig) {
      res.status(404).json({
        success: false,
        message: 'Webhook not found or expired'
      })
    }

    // Find the workflow
    const workflow = await prisma.workflow.findFirst({
      where: {
        id: webhookConfig.workflowId,
        userId: webhookConfig.userId,
        isActive: true
      }
    })

    if (!workflow) {
      res.status(404).json({
        success: false,
        message: 'Workflow not found or inactive'
      })
    }

    // Create execution record
    const execution = await prisma.execution.create({
      data: {
        workflowId: workflow.id,
        userId: webhookConfig.userId,
        status: 'RUNNING',
        data: {
          webhookData,
          headers,
          timestamp: new Date().toISOString()
        }
      }
    })

    // Execute workflow asynchronously
    const { executeWorkflow } = await import('../services/workflowService')
    executeWorkflow(workflow as any, execution.id)

    res.json({
      success: true,
      message: 'Webhook triggered successfully',
      data: {
        executionId: execution.id,
        workflowId: workflow.id
      }
    })
  } catch (error) {
    console.error('Webhook trigger error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
}

// @desc    Create webhook endpoint
// @route   POST /api/webhooks
// @access  Private
export const createWebhook = async (req: Request, res: Response): Promise<void> => {
  try {
    const { workflowId, name } = req.body
    const userId = (req as any).user.id

    // Verify workflow ownership
    const workflow = await prisma.workflow.findFirst({
      where: {
        id: workflowId,
        userId
      }
    })

    if (!workflow) {
      res.status(404).json({
        success: false,
        message: 'Workflow not found'
      })
    }

    // Generate unique webhook ID
    const webhookId = `webhook_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    const webhookUrl = `${process.env.CORS_ORIGIN || 'http://localhost:3000'}/api/webhooks/${webhookId}`

    // Store webhook configuration
    activeWebhooks.set(webhookId, { workflowId, userId })

    // Create webhook record in database
    const webhook = await prisma.webhook.create({
      data: {
        name: name || `Webhook for ${workflow.name}`,
        url: webhookUrl,
        secret: `secret_${Math.random().toString(36).substr(2, 16)}`,
        isActive: true,
        events: ['workflow.triggered']
      }
    })

    res.status(201).json({
      success: true,
      message: 'Webhook created successfully',
      data: {
        webhookId,
        webhookUrl,
        webhook
      }
    })
  } catch (error) {
    console.error('Create webhook error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
}

// @desc    Get webhooks for user
// @route   GET /api/webhooks
// @access  Private
export const getWebhooks = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any).user.id

    const webhooks = await prisma.webhook.findMany({
      where: {
        // Add user relationship when implemented
      },
      orderBy: { createdAt: 'desc' }
    })

    res.json({
      success: true,
      data: webhooks
    })
  } catch (error) {
    console.error('Get webhooks error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
}

// @desc    Delete webhook
// @route   DELETE /api/webhooks/:id
// @access  Private
export const deleteWebhook = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const userId = (req as any).user.id

    // Remove from active webhooks
    for (const [webhookId, config] of activeWebhooks.entries()) {
      if (config.userId === userId) {
        activeWebhooks.delete(webhookId)
      }
    }

    // Delete from database
    await prisma.webhook.delete({
      where: { id }
    })

    res.json({
      success: true,
      message: 'Webhook deleted successfully'
    })
  } catch (error) {
    console.error('Delete webhook error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
}

// Export the activeWebhooks map for use in workflow service
export { activeWebhooks }
