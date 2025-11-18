import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { validationResult } from 'express-validator'
import { AuthRequest } from '../middleware/auth'
import { executeWorkflow as runWorkflow } from '../services/workflowService'

const prisma = new PrismaClient()

// @desc    Get all workflows for user
// @route   GET /api/workflows
// @access  Private
export const getWorkflows = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const workflows = await prisma.workflow.findMany({
      where: { userId: req.user!.id },
      orderBy: { updatedAt: 'desc' }
    })

    res.json({
      success: true,
      data: workflows
    })
  } catch (error) {
    console.error('Get workflows error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
}

// @desc    Get single workflow
// @route   GET /api/workflows/:id
// @access  Private
export const getWorkflow = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params

    const workflow = await prisma.workflow.findFirst({
      where: {
        id,
        userId: req.user!.id
      }
    })

    if (!workflow) {
      res.status(404).json({
        success: false,
        message: 'Workflow not found'
      })
      return
    }

    res.json({
      success: true,
      data: workflow
    })
  } catch (error) {
    console.error('Get workflow error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
}

// @desc    Create new workflow
// @route   POST /api/workflows
// @access  Private
export const createWorkflow = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      })
      return
    }

    const { name, description, nodes, edges, isActive } = req.body

    const workflow = await prisma.workflow.create({
      data: {
        name,
        description,
        nodes,
        edges,
        isActive: isActive || false,
        userId: req.user!.id
      }
    })

    res.status(201).json({
      success: true,
      message: 'Workflow created successfully',
      data: workflow
    })
  } catch (error) {
    console.error('Create workflow error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
}

// @desc    Update workflow
// @route   PUT /api/workflows/:id
// @access  Private
export const updateWorkflow = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      })
      return
    }

    const { id } = req.params
    const { name, description, nodes, edges, isActive } = req.body

    // Check if workflow exists and belongs to user
    const existingWorkflow = await prisma.workflow.findFirst({
      where: {
        id,
        userId: req.user!.id
      }
    })

    if (!existingWorkflow) {
      res.status(404).json({
        success: false,
        message: 'Workflow not found'
      })
      return
    }

    const workflow = await prisma.workflow.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(description !== undefined && { description }),
        ...(nodes && { nodes }),
        ...(edges && { edges }),
        ...(isActive !== undefined && { isActive })
      }
    })

    res.json({
      success: true,
      message: 'Workflow updated successfully',
      data: workflow
    })
  } catch (error) {
    console.error('Update workflow error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
}

// @desc    Delete workflow
// @route   DELETE /api/workflows/:id
// @access  Private
export const deleteWorkflow = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params

    // Check if workflow exists and belongs to user
    const workflow = await prisma.workflow.findFirst({
      where: {
        id,
        userId: req.user!.id
      }
    })

    if (!workflow) {
      res.status(404).json({
        success: false,
        message: 'Workflow not found'
      })
      return
    }

    await prisma.workflow.delete({
      where: { id }
    })

    res.json({
      success: true,
      message: 'Workflow deleted successfully'
    })
  } catch (error) {
    console.error('Delete workflow error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
}

// @desc    Execute workflow
// @route   POST /api/workflows/:id/execute
// @access  Private
export const executeWorkflow = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params

    // Check if workflow exists and belongs to user
    const workflow = await prisma.workflow.findFirst({
      where: {
        id,
        userId: req.user!.id
      }
    })

    if (!workflow) {
      res.status(404).json({
        success: false,
        message: 'Workflow not found'
      })
      return
    }

    // Create execution record
    const execution = await prisma.execution.create({
      data: {
        workflowId: workflow.id,
        userId: req.user!.id,
        status: 'RUNNING'
      }
    })

    // Execute workflow asynchronously
    runWorkflow(workflow as any, execution.id)

    res.json({
      success: true,
      message: 'Workflow execution started',
      data: { executionId: execution.id }
    })
  } catch (error) {
    console.error('Execute workflow error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
}
