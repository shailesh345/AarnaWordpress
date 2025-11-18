import express from 'express'
import { body } from 'express-validator'
import { 
  getCredentials, 
  getCredential, 
  createCredential, 
  updateCredential, 
  deleteCredential,
  testCredential
} from '../controllers/credentialController'
import { authenticate } from '../middleware/auth'

const router = express.Router()

// All routes are protected
router.use(authenticate)

// @route   GET /api/credentials
// @desc    Get all credentials for user
// @access  Private
router.get('/', getCredentials)

// @route   GET /api/credentials/:id
// @desc    Get single credential
// @access  Private
router.get('/:id', getCredential)

// @route   POST /api/credentials
// @desc    Create new credential
// @access  Private
router.post('/', [
  body('name').trim().isLength({ min: 1 }).withMessage('Credential name is required'),
  body('type').isIn(['http', 'email', 'database', 'api_key', 'oauth']).withMessage('Invalid credential type'),
  body('data').isObject().withMessage('Credential data is required')
], createCredential)

// @route   PUT /api/credentials/:id
// @desc    Update credential
// @access  Private
router.put('/:id', [
  body('name').optional().trim().isLength({ min: 1 }).withMessage('Credential name cannot be empty'),
  body('type').optional().isIn(['http', 'email', 'database', 'api_key', 'oauth']).withMessage('Invalid credential type'),
  body('data').optional().isObject().withMessage('Credential data must be an object')
], updateCredential)

// @route   DELETE /api/credentials/:id
// @desc    Delete credential
// @access  Private
router.delete('/:id', deleteCredential)

// @route   POST /api/credentials/:id/test
// @desc    Test credential connection
// @access  Private
router.post('/:id/test', testCredential)

export default router
