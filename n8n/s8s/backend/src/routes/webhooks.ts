import express from 'express'
import { body } from 'express-validator'
import { 
  triggerWebhook, 
  createWebhook, 
  getWebhooks, 
  deleteWebhook 
} from '../controllers/webhookController'
import { authenticate } from '../middleware/auth'

const router = express.Router()

// @route   POST /api/webhooks/:webhookId
// @desc    Trigger workflow via webhook
// @access  Public
router.post('/:webhookId', triggerWebhook)

// All other routes are protected
router.use(authenticate)

// @route   POST /api/webhooks
// @desc    Create webhook endpoint
// @access  Private
router.post('/', [
  body('workflowId').notEmpty().withMessage('Workflow ID is required'),
  body('name').optional().isString().withMessage('Name must be a string')
], createWebhook)

// @route   GET /api/webhooks
// @desc    Get webhooks for user
// @access  Private
router.get('/', getWebhooks)

// @route   DELETE /api/webhooks/:id
// @desc    Delete webhook
// @access  Private
router.delete('/:id', deleteWebhook)

export default router
