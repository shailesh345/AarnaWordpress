import express from 'express'
import { body } from 'express-validator'
import { 
  getTemplates, 
  getTemplate, 
  createTemplate, 
  useTemplate,
  getMyTemplates,
  deleteTemplate
} from '../controllers/templateController'
import { authenticate } from '../middleware/auth'

const router = express.Router()

// @route   GET /api/templates
// @desc    Get all public templates
// @access  Public
router.get('/', getTemplates)

// @route   GET /api/templates/:id
// @desc    Get single template
// @access  Public
router.get('/:id', getTemplate)

// @route   POST /api/templates/:id/use
// @desc    Create workflow from template
// @access  Private
router.post('/:id/use', authenticate, [
  body('name').optional().trim().isLength({ min: 1 }).withMessage('Workflow name cannot be empty')
], useTemplate)

// All other routes are protected
router.use(authenticate)

// @route   GET /api/templates/my
// @desc    Get user's templates
// @access  Private
router.get('/my', getMyTemplates)

// @route   POST /api/templates
// @desc    Create template from workflow
// @access  Private
router.post('/', [
  body('workflowId').notEmpty().withMessage('Workflow ID is required'),
  body('name').trim().isLength({ min: 1 }).withMessage('Template name is required'),
  body('description').optional().isString().withMessage('Description must be a string'),
  body('category').optional().isString().withMessage('Category must be a string'),
  body('tags').optional().isArray().withMessage('Tags must be an array'),
  body('isPublic').optional().isBoolean().withMessage('isPublic must be a boolean')
], createTemplate)

// @route   DELETE /api/templates/:id
// @desc    Delete template
// @access  Private
router.delete('/:id', deleteTemplate)

export default router
