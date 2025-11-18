import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuthStore } from './store/authStore'
import { Layout } from './components/Layout'
import { Dashboard } from './pages/Dashboard'
import { Workflows } from './pages/Workflows'
import { WorkflowEditor } from './pages/WorkflowEditor'
import { Executions } from './pages/Executions'
import { Credentials } from './pages/Credentials'
import { Settings } from './pages/Settings'
import { Login } from './pages/Login'
// import { ProtectedRoute } from './components/ProtectedRoute'

function App() {
  const { checkAuth, isAuthenticated } = useAuthStore()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  if (!isAuthenticated) {
    return <Login />
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/workflows" element={<Workflows />} />
        <Route path="/workflows/:id" element={<WorkflowEditor />} />
        <Route path="/executions" element={<Executions />} />
        <Route path="/credentials" element={<Credentials />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  )
}

export default App
