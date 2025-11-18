import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { validationResult } from 'express-validator'
import { AuthRequest } from '../middleware/auth'

const prisma = new PrismaClient()

// @desc    Get all templates
// @route   GET /api/templates
// @access  Public
export const getTemplates = async (req: Request, res: Response): Promise<void> => {
  try {
    const { category, search } = req.query

    const where: any = {
      isPublic: true
    }

    if (category) {
      where.category = category
    }

    if (search) {
      where.OR = [
        { name: { contains: search as string, mode: 'insensitive' } },
        { description: { contains: search as string, mode: 'insensitive' } }
      ]
    }

    const templates = await prisma.template.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    })

    res.json({
      success: true,
      data: templates
    })
  } catch (error) {
    console.error('Get templates error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
}

// @desc    Get single template
// @route   GET /api/templates/:id
// @access  Public
export const getTemplate = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params

    const template = await prisma.template.findFirst({
      where: {
        id,
        isPublic: true
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    })

    if (!template) {
      res.status(404).json({
        success: false,
        message: 'Template not found'
      })
    }

    res.json({
      success: true,
      data: template
    })
  } catch (error) {
    console.error('Get template error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
}

// @desc    Create template from workflow
// @route   POST /api/templates
// @access  Private
export const createTemplate = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      })
    }

    const { workflowId, name, description, category, tags, isPublic } = req.body

    // Get the workflow
    const workflow = await prisma.workflow.findFirst({
      where: {
        id: workflowId,
        userId: req.user!.id
      }
    })

    if (!workflow) {
      res.status(404).json({
        success: false,
        message: 'Workflow not found'
      })
    }

    // Create template
    const template = await prisma.template.create({
      data: {
        name,
        description,
        category,
        tags,
        isPublic: isPublic || false,
        workflowData: {
          nodes: workflow.nodes,
          edges: workflow.edges
        },
        userId: req.user!.id
      }
    })

    res.status(201).json({
      success: true,
      message: 'Template created successfully',
      data: template
    })
  } catch (error) {
    console.error('Create template error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
}

// @desc    Create workflow from template
// @route   POST /api/templates/:id/use
// @access  Private
export const useTemplate = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const { name } = req.body

    // Get the template
    const template = await prisma.template.findFirst({
      where: {
        id,
        isPublic: true
      }
    })

    if (!template) {
      res.status(404).json({
        success: false,
        message: 'Template not found'
      })
    }

    // Create workflow from template
    const workflowData = template.workflowData as any
    const workflow = await prisma.workflow.create({
      data: {
        name: name || `${template.name} (Copy)`,
        description: `Created from template: ${template.name}`,
        nodes: workflowData.nodes,
        edges: workflowData.edges,
        isActive: false,
        userId: req.user!.id
      }
    })

    res.status(201).json({
      success: true,
      message: 'Workflow created from template successfully',
      data: workflow
    })
  } catch (error) {
    console.error('Use template error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
}

// @desc    Get user's templates
// @route   GET /api/templates/my
// @access  Private
export const getMyTemplates = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const templates = await prisma.template.findMany({
      where: { userId: req.user!.id },
      orderBy: { createdAt: 'desc' }
    })

    res.json({
      success: true,
      data: templates
    })
  } catch (error) {
    console.error('Get my templates error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
}

// @desc    Delete template
// @route   DELETE /api/templates/:id
// @access  Private
export const deleteTemplate = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params

    // Check if template exists and belongs to user
    const template = await prisma.template.findFirst({
      where: {
        id,
        userId: req.user!.id
      }
    })

    if (!template) {
      res.status(404).json({
        success: false,
        message: 'Template not found'
      })
    }

    await prisma.template.delete({
      where: { id }
    })

    res.json({
      success: true,
      message: 'Template deleted successfully'
    })
  } catch (error) {
    console.error('Delete template error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
}
