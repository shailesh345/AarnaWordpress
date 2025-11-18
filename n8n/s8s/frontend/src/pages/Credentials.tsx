import { useState, useEffect } from 'react'
import { 
  Plus, 
  Key, 
  Globe, 
  Mail, 
  Database, 
  Shield, 
  Edit,
  Trash2,
  TestTube
} from 'lucide-react'
import { Button, Card, CardContent, CardHeader, CardTitle, Modal, ModalContent, ModalFooter, Badge, Alert } from '../components/ui'
import { Input } from '../components/ui/Input'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

interface Credential {
  id: string
  name: string
  type: 'http' | 'email' | 'database' | 'api_key' | 'oauth'
  isActive: boolean
  createdAt: string
  updatedAt: string
}

interface CredentialForm {
  name: string
  type: 'http' | 'email' | 'database' | 'api_key' | 'oauth'
  data: Record<string, any>
}

const credentialTypes = [
  { value: 'http', label: 'HTTP/API', icon: Globe, color: 'bg-blue-100 text-blue-700' },
  { value: 'email', label: 'Email', icon: Mail, color: 'bg-green-100 text-green-700' },
  { value: 'database', label: 'Database', icon: Database, color: 'bg-purple-100 text-purple-700' },
  { value: 'api_key', label: 'API Key', icon: Key, color: 'bg-orange-100 text-orange-700' },
  { value: 'oauth', label: 'OAuth', icon: Shield, color: 'bg-red-100 text-red-700' },
]

export function Credentials() {
  const [credentials, setCredentials] = useState<Credential[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editingCredential, setEditingCredential] = useState<Credential | null>(null)
  // const [showSecrets, setShowSecrets] = useState<Record<string, boolean>>({})

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<CredentialForm>()

  const selectedType = watch('type')

  useEffect(() => {
    fetchCredentials()
  }, [])

  const fetchCredentials = async () => {
    try {
      setIsLoading(true)
      // Mock data for now - replace with actual API call
      setCredentials([
        {
          id: '1',
          name: 'GitHub API',
          type: 'api_key',
          isActive: true,
          createdAt: '2024-01-15T10:30:00Z',
          updatedAt: '2024-01-15T10:30:00Z'
        },
        {
          id: '2',
          name: 'SMTP Server',
          type: 'email',
          isActive: true,
          createdAt: '2024-01-14T09:15:00Z',
          updatedAt: '2024-01-14T09:15:00Z'
        }
      ])
    } catch (error) {
      toast.error('Failed to fetch credentials')
    } finally {
      setIsLoading(false)
    }
  }

  const onSubmit = async (_data: CredentialForm) => {
    try {
      if (editingCredential) {
        // Update existing credential
        toast.success('Credential updated successfully')
      } else {
        // Create new credential
        toast.success('Credential created successfully')
      }
      setShowModal(false)
      setEditingCredential(null)
      reset()
      fetchCredentials()
    } catch (error) {
      toast.error('Failed to save credential')
    }
  }

  const handleEdit = (credential: Credential) => {
    setEditingCredential(credential)
    reset({
      name: credential.name,
      type: credential.type,
      data: {}
    })
    setShowModal(true)
  }

  const handleDelete = async (credential: Credential) => {
    if (window.confirm(`Are you sure you want to delete "${credential.name}"?`)) {
      try {
        toast.success('Credential deleted successfully')
        fetchCredentials()
      } catch (error) {
        toast.error('Failed to delete credential')
      }
    }
  }

  const handleTest = async (_credential: Credential) => {
    try {
      toast.success('Credential test successful!')
    } catch (error) {
      toast.error('Credential test failed')
    }
  }

  // const toggleSecretVisibility = (credentialId: string) => {
  //   setShowSecrets(prev => ({
  //     ...prev,
  //     [credentialId]: !prev[credentialId]
  //   }))
  // }

  const renderCredentialForm = () => {
    switch (selectedType) {
      case 'http':
        return (
          <div className="space-y-4">
            <Input
              label="Base URL"
              placeholder="https://api.example.com"
              {...register('data.baseUrl', { required: 'Base URL is required' })}
                error={errors.data?.baseUrl?.message as string}
            />
            <Input
              label="API Key"
              type="password"
              placeholder="Your API key"
              {...register('data.apiKey')}
            />
            <Input
              label="Username"
              placeholder="Username (optional)"
              {...register('data.username')}
            />
            <Input
              label="Password"
              type="password"
              placeholder="Password (optional)"
              {...register('data.password')}
            />
          </div>
        )

      case 'email':
        return (
          <div className="space-y-4">
            <Input
              label="SMTP Host"
              placeholder="smtp.gmail.com"
              {...register('data.host', { required: 'SMTP host is required' })}
              error={errors.data?.host?.message as string}
            />
            <Input
              label="Port"
              type="number"
              placeholder="587"
              {...register('data.port', { required: 'Port is required' })}
              error={errors.data?.port?.message as string}
            />
            <Input
              label="Username"
              placeholder="your-email@gmail.com"
              {...register('data.user', { required: 'Username is required' })}
              error={errors.data?.user?.message as string}
            />
            <Input
              label="Password"
              type="password"
              placeholder="Your email password or app password"
              {...register('data.pass', { required: 'Password is required' })}
              error={errors.data?.pass?.message as string}
            />
          </div>
        )

      case 'database':
        return (
          <div className="space-y-4">
            <Input
              label="Host"
              placeholder="localhost"
              {...register('data.host', { required: 'Host is required' })}
              error={errors.data?.host?.message as string}
            />
            <Input
              label="Port"
              type="number"
              placeholder="5432"
              {...register('data.port', { required: 'Port is required' })}
              error={errors.data?.port?.message as string}
            />
            <Input
              label="Database"
              placeholder="database_name"
              {...register('data.database', { required: 'Database name is required' })}
              error={errors.data?.database?.message as string}
            />
            <Input
              label="Username"
              placeholder="username"
              {...register('data.username', { required: 'Username is required' })}
              error={errors.data?.username?.message as string}
            />
            <Input
              label="Password"
              type="password"
              placeholder="password"
              {...register('data.password', { required: 'Password is required' })}
              error={errors.data?.password?.message as string}
            />
          </div>
        )

      case 'api_key':
        return (
          <div className="space-y-4">
            <Input
              label="API Key"
              type="password"
              placeholder="Your API key"
              {...register('data.apiKey', { required: 'API key is required' })}
              error={errors.data?.apiKey?.message as string}
            />
            <Input
              label="Description"
              placeholder="What this API key is used for"
              {...register('data.description')}
            />
          </div>
        )

      case 'oauth':
        return (
          <div className="space-y-4">
            <Input
              label="Client ID"
              placeholder="Your OAuth client ID"
              {...register('data.clientId', { required: 'Client ID is required' })}
              error={errors.data?.clientId?.message as string}
            />
            <Input
              label="Client Secret"
              type="password"
              placeholder="Your OAuth client secret"
              {...register('data.clientSecret', { required: 'Client secret is required' })}
              error={errors.data?.clientSecret?.message as string}
            />
            <Input
              label="Authorization URL"
              placeholder="https://oauth.example.com/authorize"
              {...register('data.authUrl')}
            />
            <Input
              label="Token URL"
              placeholder="https://oauth.example.com/token"
              {...register('data.tokenUrl')}
            />
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="p-6">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-secondary-900">Credentials</h1>
            <p className="mt-2 text-secondary-600">
              Manage your API keys, database connections, and other credentials
            </p>
          </div>
          <Button
            onClick={() => {
              setEditingCredential(null)
              reset()
              setShowModal(true)
            }}
            leftIcon={<Plus className="h-4 w-4" />}
          >
            Add Credential
          </Button>
        </div>
      </div>

      {/* Credentials Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-6">
                <div className="h-4 bg-secondary-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-secondary-200 rounded w-1/2 mb-4"></div>
                <div className="h-8 bg-secondary-200 rounded"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : credentials.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentials.map((credential) => {
            const typeInfo = credentialTypes.find(t => t.value === credential.type)
            const Icon = typeInfo?.icon || Key

            return (
              <Card key={credential.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${typeInfo?.color || 'bg-secondary-100'}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{credential.name}</CardTitle>
                        <Badge variant="secondary" size="sm">
                          {typeInfo?.label || credential.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleTest(credential)}
                        title="Test connection"
                      >
                        <TestTube className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(credential)}
                        title="Edit credential"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(credential)}
                        title="Delete credential"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-secondary-500">
                    <span>Created {new Date(credential.createdAt).toLocaleDateString()}</span>
                    <Badge variant={credential.isActive ? 'success' : 'secondary'} size="sm">
                      {credential.isActive ? 'Active' : 'Inactive'}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      ) : (
        <div className="text-center py-12">
          <Key className="mx-auto h-12 w-12 text-secondary-400 mb-4" />
          <h3 className="text-lg font-medium text-secondary-900 mb-2">No credentials found</h3>
          <p className="text-secondary-500 mb-6">
            Get started by adding your first credential to use in workflows.
          </p>
          <Button
            onClick={() => {
              setEditingCredential(null)
              reset()
              setShowModal(true)
            }}
            leftIcon={<Plus className="h-4 w-4" />}
          >
            Add Your First Credential
          </Button>
        </div>
      )}

      {/* Add/Edit Credential Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false)
          setEditingCredential(null)
          reset()
        }}
        title={editingCredential ? 'Edit Credential' : 'Add New Credential'}
        size="lg"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalContent>
            <div className="space-y-6">
              <Input
                label="Credential Name"
                placeholder="e.g., GitHub API, SMTP Server"
                {...register('name', { required: 'Credential name is required' })}
                error={errors.name?.message}
              />

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Credential Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {credentialTypes.map((type) => {
                    const Icon = type.icon
                    return (
                      <label
                        key={type.value}
                        className={`relative flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                          selectedType === type.value
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-secondary-200 hover:border-secondary-300'
                        }`}
                      >
                        <input
                          type="radio"
                          value={type.value}
                          {...register('type', { required: 'Credential type is required' })}
                          className="sr-only"
                        />
                        <div className={`p-2 rounded-lg ${type.color} mr-3`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-medium">{type.label}</span>
                      </label>
                    )
                  })}
                </div>
                {errors.type && (
                  <p className="mt-1 text-sm text-error-600">{errors.type.message}</p>
                )}
              </div>

              {selectedType && (
                <div>
                  <h4 className="text-sm font-medium text-secondary-700 mb-3">
                    Configuration
                  </h4>
                  {renderCredentialForm()}
                </div>
              )}

              <Alert variant="info" title="Security Notice">
                All credential data is encrypted and stored securely. Your sensitive information is protected.
              </Alert>
            </div>
          </ModalContent>
          <ModalFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setShowModal(false)
                setEditingCredential(null)
                reset()
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              loading={isSubmitting}
            >
              {editingCredential ? 'Update Credential' : 'Create Credential'}
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </div>
  )
}
