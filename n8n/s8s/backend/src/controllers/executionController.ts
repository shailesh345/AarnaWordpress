import { Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { AuthRequest } from '../middleware/auth'

const prisma = new PrismaClient()

// @desc    Get all executions for user
// @route   GET /api/executions
// @access  Private
export const getExecutions = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { page = 1, limit = 10, status, workflowId } = req.query

    const where: any = {
      userId: req.user!.id
    }

    if (status) {
      where.status = status
    }

    if (workflowId) {
      where.workflowId = workflowId
    }

    const executions = await prisma.execution.findMany({
      where,
      include: {
        workflow: {
          select: {
            id: true,
            name: true
          }
        }
      },
      orderBy: { createdAt: 'desc' },
      skip: (Number(page) - 1) * Number(limit),
      take: Number(limit)
    })

    const total = await prisma.execution.count({ where })

    res.json({
      success: true,
      data: {
        executions,
        pagination: {
          page: Number(page),
          limit: Number(limit),
          total,
          pages: Math.ceil(total / Number(limit))
        }
      }
    })
  } catch (error) {
    console.error('Get executions error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
}

// @desc    Get single execution
// @route   GET /api/executions/:id
// @access  Private
export const getExecution = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params

    const execution = await prisma.execution.findFirst({
      where: {
        id,
        userId: req.user!.id
      },
      include: {
        workflow: {
          select: {
            id: true,
            name: true,
            description: true
          }
        }
      }
    })

    if (!execution) {
      res.status(404).json({
        success: false,
        message: 'Execution not found'
      })
    }

    res.json({
      success: true,
      data: execution
    })
  } catch (error) {
    console.error('Get execution error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
}

// @desc    Delete execution
// @route   DELETE /api/executions/:id
// @access  Private
export const deleteExecution = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params

    // Check if execution exists and belongs to user
    const execution = await prisma.execution.findFirst({
      where: {
        id,
        userId: req.user!.id
      }
    })

    if (!execution) {
      res.status(404).json({
        success: false,
        message: 'Execution not found'
      })
    }

    await prisma.execution.delete({
      where: { id }
    })

    res.json({
      success: true,
      message: 'Execution deleted successfully'
    })
  } catch (error) {
    console.error('Delete execution error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
}
