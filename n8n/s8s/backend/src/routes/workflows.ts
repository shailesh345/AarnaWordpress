import express from 'express'
import { body } from 'express-validator'
import { 
  getWorkflows, 
  getWorkflow, 
  createWorkflow, 
  updateWorkflow, 
  deleteWorkflow,
  executeWorkflow
} from '../controllers/workflowController'
import { authenticate } from '../middleware/auth'

const router = express.Router()

// All routes are protected
router.use(authenticate)

// @route   GET /api/workflows
// @desc    Get all workflows for user
// @access  Private
router.get('/', getWorkflows)

// @route   GET /api/workflows/:id
// @desc    Get single workflow
// @access  Private
router.get('/:id', getWorkflow)

// @route   POST /api/workflows
// @desc    Create new workflow
// @access  Private
router.post('/', [
  body('name').trim().isLength({ min: 1 }).withMessage('Workflow name is required'),
  body('nodes').isArray().withMessage('Nodes must be an array'),
  body('edges').isArray().withMessage('Edges must be an array')
], createWorkflow)

// @route   PUT /api/workflows/:id
// @desc    Update workflow
// @access  Private
router.put('/:id', [
  body('name').optional().trim().isLength({ min: 1 }).withMessage('Workflow name cannot be empty'),
  body('nodes').optional().isArray().withMessage('Nodes must be an array'),
  body('edges').optional().isArray().withMessage('Edges must be an array')
], updateWorkflow)

// @route   DELETE /api/workflows/:id
// @desc    Delete workflow
// @access  Private
router.delete('/:id', deleteWorkflow)

// @route   POST /api/workflows/:id/execute
// @desc    Execute workflow
// @access  Private
router.post('/:id/execute', executeWorkflow)

export default router
