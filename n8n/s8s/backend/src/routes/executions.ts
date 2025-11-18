import express from 'express'
import { getExecutions, getExecution, deleteExecution } from '../controllers/executionController'
import { authenticate } from '../middleware/auth'

const router = express.Router()

// All routes are protected
router.use(authenticate)

// @route   GET /api/executions
// @desc    Get all executions for user
// @access  Private
router.get('/', getExecutions)

// @route   GET /api/executions/:id
// @desc    Get single execution
// @access  Private
router.get('/:id', getExecution)

// @route   DELETE /api/executions/:id
// @desc    Delete execution
// @access  Private
router.delete('/:id', deleteExecution)

export default router
