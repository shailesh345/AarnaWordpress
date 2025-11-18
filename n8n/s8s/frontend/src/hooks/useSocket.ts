import { useEffect, useRef } from 'react'
import { io, Socket } from 'socket.io-client'
import { useAuthStore } from '../store/authStore'

export function useSocket() {
  const socketRef = useRef<Socket | null>(null)
  const { token, isAuthenticated } = useAuthStore()

  useEffect(() => {
    if (isAuthenticated && token) {
      // Initialize socket connection
      socketRef.current = io((import.meta as any).env.VITE_API_URL || 'http://localhost:5555', {
        auth: {
          token
        }
      })

      socketRef.current.on('connect', () => {
        console.log('Socket connected:', socketRef.current?.id)
      })

      socketRef.current.on('disconnect', () => {
        console.log('Socket disconnected')
      })

      socketRef.current.on('connect_error', (error) => {
        console.error('Socket connection error:', error)
      })
    }

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect()
        socketRef.current = null
      }
    }
  }, [isAuthenticated, token])

  return socketRef.current
}

export function useExecutionUpdates(callback: (data: any) => void) {
  const socket = useSocket()

  useEffect(() => {
    if (socket) {
      socket.on('execution_update', callback)

      return () => {
        socket.off('execution_update', callback)
      }
    }
  }, [socket, callback])
}

export function useWorkflowUpdates(callback: (data: any) => void) {
  const socket = useSocket()

  useEffect(() => {
    if (socket) {
      socket.on('workflow_update', callback)

      return () => {
        socket.off('workflow_update', callback)
      }
    }
  }, [socket, callback])
}

export function useNotifications(callback: (notification: any) => void) {
  const socket = useSocket()

  useEffect(() => {
    if (socket) {
      socket.on('notification', callback)

      return () => {
        socket.off('notification', callback)
      }
    }
  }, [socket, callback])
}
