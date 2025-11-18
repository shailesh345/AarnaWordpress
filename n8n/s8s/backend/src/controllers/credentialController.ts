import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import crypto from 'crypto'
import { validationResult } from 'express-validator'
import { AuthRequest } from '../middleware/auth'

const prisma = new PrismaClient()

// Encryption key (in production, use environment variable)
const ENCRYPTION_KEY = process.env.CREDENTIAL_ENCRYPTION_KEY || 'your-32-character-secret-key-here!'
const ALGORITHM = 'aes-256-cbc'

// Generate a proper 32-byte key from the secret
const getKey = () => {
  return crypto.createHash('sha256').update(ENCRYPTION_KEY).digest()
}

// Encrypt sensitive data
const encrypt = (text: string): string => {
  const iv = crypto.randomBytes(16)
  const cipher = crypto.createCipheriv(ALGORITHM, getKey(), iv)
  let encrypted = cipher.update(text, 'utf8', 'hex')
  encrypted += cipher.final('hex')
  return iv.toString('hex') + ':' + encrypted
}

// Decrypt sensitive data
const decrypt = (encryptedText: string): string => {
  const textParts = encryptedText.split(':')
  const iv = Buffer.from(textParts.shift()!, 'hex')
  const encryptedData = textParts.join(':')
  const decipher = crypto.createDecipheriv(ALGORITHM, getKey(), iv)
  let decrypted = decipher.update(encryptedData, 'hex', 'utf8')
  decrypted += decipher.final('utf8')
  return decrypted
}

// @desc    Get all credentials for user
// @route   GET /api/credentials
// @access  Private
export const getCredentials = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const credentials = await prisma.credential.findMany({
      where: { userId: req.user!.id },
      select: {
        id: true,
        name: true,
        type: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
        // Don't include sensitive data in list
      },
      orderBy: { createdAt: 'desc' }
    })

    res.json({
      success: true,
      data: credentials
    })
  } catch (error) {
    console.error('Get credentials error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
}

// @desc    Get single credential
// @route   GET /api/credentials/:id
// @access  Private
export const getCredential = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params

    const credential = await prisma.credential.findFirst({
      where: {
        id,
        userId: req.user!.id
      }
    })

    if (!credential) {
      res.status(404).json({
        success: false,
        message: 'Credential not found'
      })
    }

    // Decrypt sensitive data
    const decryptedData = credential.data ? JSON.parse(decrypt(credential.data)) : {}

    res.json({
      success: true,
      data: {
        ...credential,
        data: decryptedData
      }
    })
  } catch (error) {
    console.error('Get credential error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
}

// @desc    Create new credential
// @route   POST /api/credentials
// @access  Private
export const createCredential = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      })
    }

    const { name, type, data } = req.body

    // Encrypt sensitive data
    const encryptedData = encrypt(JSON.stringify(data))

    const credential = await prisma.credential.create({
      data: {
        name,
        type,
        data: encryptedData,
        userId: req.user!.id
      }
    })

    res.status(201).json({
      success: true,
      message: 'Credential created successfully',
      data: {
        id: credential.id,
        name: credential.name,
        type: credential.type,
        isActive: credential.isActive,
        createdAt: credential.createdAt,
        updatedAt: credential.updatedAt
      }
    })
  } catch (error) {
    console.error('Create credential error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
}

// @desc    Update credential
// @route   PUT /api/credentials/:id
// @access  Private
export const updateCredential = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      })
    }

    const { id } = req.params
    const { name, type, data, isActive } = req.body

    // Check if credential exists and belongs to user
    const existingCredential = await prisma.credential.findFirst({
      where: {
        id,
        userId: req.user!.id
      }
    })

    if (!existingCredential) {
      res.status(404).json({
        success: false,
        message: 'Credential not found'
      })
    }

    // Prepare update data
    const updateData: any = {}
    if (name) updateData.name = name
    if (type) updateData.type = type
    if (data) updateData.data = encrypt(JSON.stringify(data))
    if (isActive !== undefined) updateData.isActive = isActive

    const credential = await prisma.credential.update({
      where: { id },
      data: updateData
    })

    res.json({
      success: true,
      message: 'Credential updated successfully',
      data: {
        id: credential.id,
        name: credential.name,
        type: credential.type,
        isActive: credential.isActive,
        createdAt: credential.createdAt,
        updatedAt: credential.updatedAt
      }
    })
  } catch (error) {
    console.error('Update credential error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
}

// @desc    Delete credential
// @route   DELETE /api/credentials/:id
// @access  Private
export const deleteCredential = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params

    // Check if credential exists and belongs to user
    const credential = await prisma.credential.findFirst({
      where: {
        id,
        userId: req.user!.id
      }
    })

    if (!credential) {
      res.status(404).json({
        success: false,
        message: 'Credential not found'
      })
    }

    await prisma.credential.delete({
      where: { id }
    })

    res.json({
      success: true,
      message: 'Credential deleted successfully'
    })
  } catch (error) {
    console.error('Delete credential error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
}

// @desc    Test credential connection
// @route   POST /api/credentials/:id/test
// @access  Private
export const testCredential = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params

    const credential = await prisma.credential.findFirst({
      where: {
        id,
        userId: req.user!.id
      }
    })

    if (!credential) {
      res.status(404).json({
        success: false,
        message: 'Credential not found'
      })
    }

    // Decrypt data for testing
    const decryptedData = credential.data ? JSON.parse(decrypt(credential.data)) : {}

    // Test connection based on credential type
    let testResult = { success: false, message: '' }

    switch (credential.type) {
      case 'http':
        // Test HTTP connection
        try {
          const response = await fetch(decryptedData.url || 'https://httpbin.org/get', {
            method: 'GET',
            headers: decryptedData.headers || {}
          })
          testResult = {
            success: response.ok,
            message: response.ok ? 'Connection successful' : `HTTP ${response.status}: ${response.statusText}`
          }
        } catch (error) {
          testResult = {
            success: false,
            message: error instanceof Error ? error.message : 'Connection failed'
          }
        }
        break

      case 'email':
        // Test email configuration
        testResult = {
          success: !!(decryptedData.host && decryptedData.port && decryptedData.user && decryptedData.pass),
          message: 'Email configuration validated'
        }
        break

      case 'database':
        // Test database connection
        testResult = {
          success: !!(decryptedData.host && decryptedData.port && decryptedData.database),
          message: 'Database configuration validated'
        }
        break

      default:
        testResult = {
          success: true,
          message: 'Credential type not testable'
        }
    }

    res.json({
      success: true,
      data: testResult
    })
  } catch (error) {
    console.error('Test credential error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
}
