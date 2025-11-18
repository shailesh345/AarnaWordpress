import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { 
  User, 
  Mail, 
  Lock, 
  Save, 
  Bell, 
  Shield, 
  Database,
  Globe
} from 'lucide-react'
import { useAuthStore } from '../store/authStore'
import toast from 'react-hot-toast'

interface ProfileForm {
  name: string
  email: string
}

interface PasswordForm {
  currentPassword: string
  newPassword: string
  confirmPassword: string
}

export function Settings() {
  const { user, updateUser } = useAuthStore()
  const [activeTab, setActiveTab] = useState<'profile' | 'security' | 'notifications' | 'integrations'>('profile')

  const {
    register: registerProfile,
    handleSubmit: handleProfileSubmit,
    formState: { errors: profileErrors },
  } = useForm<ProfileForm>({
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
    },
  })

  const {
    register: registerPassword,
    handleSubmit: handlePasswordSubmit,
    formState: { errors: passwordErrors },
    reset: resetPassword,
  } = useForm<PasswordForm>()

  const onProfileSubmit = async (_data: ProfileForm) => {
    try {
      updateUser(_data)
      toast.success('Profile updated successfully')
    } catch (error) {
      toast.error('Failed to update profile')
    }
  }

  const onPasswordSubmit = async (_data: PasswordForm) => {
    if (_data.newPassword !== _data.confirmPassword) {
      toast.error('Passwords do not match')
      return
    }

    try {
      // Handle password change
      toast.success('Password updated successfully')
      resetPassword()
    } catch (error) {
      toast.error('Failed to update password')
    }
  }

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'integrations', name: 'Integrations', icon: Database },
  ]

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary-900">Settings</h1>
        <p className="mt-2 text-secondary-600">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <nav className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-secondary-600 hover:bg-secondary-100 hover:text-secondary-900'
                }`}
              >
                <tab.icon className="mr-3 h-5 w-5" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          {activeTab === 'profile' && (
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Profile Information</h3>
                <p className="card-description">
                  Update your personal information and contact details
                </p>
              </div>
              <div className="card-content">
                <form onSubmit={handleProfileSubmit(onProfileSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700">
                      Full Name
                    </label>
                    <input
                      {...registerProfile('name', { required: 'Name is required' })}
                      type="text"
                      className="mt-1 input"
                    />
                    {profileErrors.name && (
                      <p className="mt-1 text-sm text-error-600">{profileErrors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700">
                      Email Address
                    </label>
                    <input
                      {...registerProfile('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      type="email"
                      className="mt-1 input"
                    />
                    {profileErrors.email && (
                      <p className="mt-1 text-sm text-error-600">{profileErrors.email.message}</p>
                    )}
                  </div>

                  <div className="flex justify-end">
                    <button type="submit" className="btn btn-primary">
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Security Settings</h3>
                <p className="card-description">
                  Manage your password and security preferences
                </p>
              </div>
              <div className="card-content">
                <form onSubmit={handlePasswordSubmit(onPasswordSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="currentPassword" className="block text-sm font-medium text-secondary-700">
                      Current Password
                    </label>
                    <input
                      {...registerPassword('currentPassword', { required: 'Current password is required' })}
                      type="password"
                      className="mt-1 input"
                    />
                    {passwordErrors.currentPassword && (
                      <p className="mt-1 text-sm text-error-600">{passwordErrors.currentPassword.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="newPassword" className="block text-sm font-medium text-secondary-700">
                      New Password
                    </label>
                    <input
                      {...registerPassword('newPassword', {
                        required: 'New password is required',
                        minLength: {
                          value: 8,
                          message: 'Password must be at least 8 characters',
                        },
                      })}
                      type="password"
                      className="mt-1 input"
                    />
                    {passwordErrors.newPassword && (
                      <p className="mt-1 text-sm text-error-600">{passwordErrors.newPassword.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-secondary-700">
                      Confirm New Password
                    </label>
                    <input
                      {...registerPassword('confirmPassword', { required: 'Please confirm your password' })}
                      type="password"
                      className="mt-1 input"
                    />
                    {passwordErrors.confirmPassword && (
                      <p className="mt-1 text-sm text-error-600">{passwordErrors.confirmPassword.message}</p>
                    )}
                  </div>

                  <div className="flex justify-end">
                    <button type="submit" className="btn btn-primary">
                      <Lock className="h-4 w-4 mr-2" />
                      Update Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Notification Preferences</h3>
                <p className="card-description">
                  Configure how you receive notifications
                </p>
              </div>
              <div className="card-content">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-secondary-900">Email Notifications</h4>
                      <p className="text-sm text-secondary-500">Receive notifications via email</p>
                    </div>
                    <input type="checkbox" className="h-4 w-4 text-primary-600" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-secondary-900">Workflow Executions</h4>
                      <p className="text-sm text-secondary-500">Get notified when workflows complete or fail</p>
                    </div>
                    <input type="checkbox" className="h-4 w-4 text-primary-600" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-secondary-900">System Updates</h4>
                      <p className="text-sm text-secondary-500">Receive updates about system maintenance</p>
                    </div>
                    <input type="checkbox" className="h-4 w-4 text-primary-600" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'integrations' && (
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Integrations</h3>
                <p className="card-description">
                  Manage your third-party integrations and API connections
                </p>
              </div>
              <div className="card-content">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-secondary-200 rounded-lg">
                    <div className="flex items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                        <Mail className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-sm font-medium text-secondary-900">Email Service</h4>
                        <p className="text-sm text-secondary-500">SMTP configuration</p>
                      </div>
                    </div>
                    <button className="btn btn-outline btn-sm">Configure</button>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-secondary-200 rounded-lg">
                    <div className="flex items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                        <Database className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-sm font-medium text-secondary-900">Database</h4>
                        <p className="text-sm text-secondary-500">PostgreSQL connection</p>
                      </div>
                    </div>
                    <button className="btn btn-outline btn-sm">Configure</button>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-secondary-200 rounded-lg">
                    <div className="flex items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                        <Globe className="h-5 w-5 text-purple-600" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-sm font-medium text-secondary-900">Webhooks</h4>
                        <p className="text-sm text-secondary-500">Incoming webhook endpoints</p>
                      </div>
                    </div>
                    <button className="btn btn-outline btn-sm">Configure</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
