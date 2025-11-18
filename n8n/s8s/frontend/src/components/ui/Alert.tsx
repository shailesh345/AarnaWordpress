import React from 'react'
import { AlertCircle, CheckCircle, Info, AlertTriangle } from 'lucide-react'
import { cn } from '../../utils/cn'

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  title?: string
  description?: string
  showIcon?: boolean
}

export function Alert({
  className,
  variant = 'default',
  title,
  description,
  showIcon = true,
  children,
  ...props
}: AlertProps) {
  const variants = {
    default: 'bg-secondary-50 border-secondary-200 text-secondary-900',
    success: 'bg-success-50 border-success-200 text-success-900',
    warning: 'bg-warning-50 border-warning-200 text-warning-900',
    error: 'bg-error-50 border-error-200 text-error-900',
    info: 'bg-primary-50 border-primary-200 text-primary-900'
  }

  const icons = {
    default: AlertCircle,
    success: CheckCircle,
    warning: AlertTriangle,
    error: AlertCircle,
    info: Info
  }

  const Icon = icons[variant]

  return (
    <div
      className={cn(
        'relative w-full rounded-lg border p-4',
        variants[variant],
        className
      )}
      {...props}
    >
      <div className="flex">
        {showIcon && (
          <div className="flex-shrink-0">
            <Icon className="h-5 w-5" />
          </div>
        )}
        <div className={cn('ml-3', !showIcon && 'ml-0')}>
          {title && (
            <h3 className="text-sm font-medium">
              {title}
            </h3>
          )}
          {description && (
            <div className={cn('text-sm', title && 'mt-1')}>
              {description}
            </div>
          )}
          {children && (
            <div className={cn('text-sm', (title || description) && 'mt-1')}>
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
