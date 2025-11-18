import { Server, Socket } from 'socket.io'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface AuthenticatedSocket extends Socket {
  userId?: string
  user?: {
    id: string
    email: string
    name: string
  }
}

export const setupSocketHandlers = (io: Server) => {
  // Authentication middleware for Socket.IO
  io.use(async (socket: AuthenticatedSocket, next) => {
    try {
      const token = socket.handshake.auth.token || socket.handshake.headers.authorization?.replace('Bearer ', '')
      
      if (!token) {
        return next(new Error('Authentication error: No token provided'))
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any
      
      const user = await prisma.user.findUnique({
        where: { id: decoded.userId },
        select: {
          id: true,
          email: true,
          name: true,
          isActive: true
        }
      })

      if (!user || !user.isActive) {
        return next(new Error('Authentication error: Invalid user'))
      }

      socket.userId = user.id
      socket.user = user
      next()
    } catch (error) {
      next(new Error('Authentication error: Invalid token'))
    }
  })

  io.on('connection', (socket: AuthenticatedSocket) => {
    console.log(`User connected: ${socket.user?.email} (${socket.id})`)

    // Join user-specific room
    if (socket.userId) {
      socket.join(`user:${socket.userId}`)
    }

    // Handle workflow execution updates
    socket.on('subscribe_execution', (executionId: string) => {
      socket.join(`execution:${executionId}`)
      console.log(`User ${socket.user?.email} subscribed to execution ${executionId}`)
    })

    socket.on('unsubscribe_execution', (executionId: string) => {
      socket.leave(`execution:${executionId}`)
      console.log(`User ${socket.user?.email} unsubscribed from execution ${executionId}`)
    })

    // Handle workflow updates
    socket.on('subscribe_workflow', (workflowId: string) => {
      socket.join(`workflow:${workflowId}`)
      console.log(`User ${socket.user?.email} subscribed to workflow ${workflowId}`)
    })

    socket.on('unsubscribe_workflow', (workflowId: string) => {
      socket.leave(`workflow:${workflowId}`)
      console.log(`User ${socket.user?.email} unsubscribed from workflow ${workflowId}`)
    })

    // Handle disconnect
    socket.on('disconnect', () => {
      console.log(`User disconnected: ${socket.user?.email} (${socket.id})`)
    })
  })

  // Export the io instance for use in other parts of the application
  return io
}

// Helper functions to emit events
export const emitExecutionUpdate = (io: Server, executionId: string, data: any) => {
  io.to(`execution:${executionId}`).emit('execution_update', {
    executionId,
    ...data
  })
}

export const emitWorkflowUpdate = (io: Server, workflowId: string, data: any) => {
  io.to(`workflow:${workflowId}`).emit('workflow_update', {
    workflowId,
    ...data
  })
}

export const emitUserNotification = (io: Server, userId: string, notification: any) => {
  io.to(`user:${userId}`).emit('notification', notification)
}
