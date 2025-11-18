import express from 'express'
import { getUsers, getUser, updateUser, deleteUser } from '../controllers/userController'
import { authenticate, authorize } from '../middleware/auth'

const router = express.Router()

// All routes are protected
router.use(authenticate)

// @route   GET /api/users
// @desc    Get all users (admin only)
// @access  Private/Admin
router.get('/', authorize('ADMIN'), getUsers)

// @route   GET /api/users/:id
// @desc    Get single user
// @access  Private
router.get('/:id', getUser)

// @route   PUT /api/users/:id
// @desc    Update user
// @access  Private
router.put('/:id', updateUser)

// @route   DELETE /api/users/:id
// @desc    Delete user
// @access  Private/Admin
router.delete('/:id', authorize('ADMIN'), deleteUser)

export default router
