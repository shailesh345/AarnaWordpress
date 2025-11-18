import { useState } from 'react'
import { Search, Filter } from 'lucide-react'
import { nodeDefinitions, nodeCategories } from './NodeTypes'

interface NodeLibraryProps {
  onAddNode: (nodeType: string) => void
}

export function NodeLibrary({ onAddNode }: NodeLibraryProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filteredNodes = nodeDefinitions.filter(node => {
    const matchesSearch = node.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         node.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || node.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const groupedNodes = filteredNodes.reduce((acc, node) => {
    if (!acc[node.category]) {
      acc[node.category] = []
    }
    acc[node.category].push(node)
    return acc
  }, {} as Record<string, typeof nodeDefinitions>)

  return (
    <div className="w-64 bg-white border-r border-secondary-200 p-4 h-full overflow-y-auto">
      <div className="mb-4">
        <h3 className="text-sm font-medium text-secondary-900 mb-3">Node Library</h3>
        
        {/* Search */}
        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-secondary-400" />
          <input
            type="text"
            placeholder="Search nodes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-3 py-2 text-sm border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-1 mb-4">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-2 py-1 text-xs rounded-full transition-colors ${
              selectedCategory === 'all'
                ? 'bg-primary-100 text-primary-700'
                : 'bg-secondary-100 text-secondary-600 hover:bg-secondary-200'
            }`}
          >
            All
          </button>
          {nodeCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-2 py-1 text-xs rounded-full transition-colors ${
                selectedCategory === category.id
                  ? category.color
                  : 'bg-secondary-100 text-secondary-600 hover:bg-secondary-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Node List */}
      <div className="space-y-4">
        {Object.entries(groupedNodes).map(([category, nodes]) => (
          <div key={category}>
            <h4 className="text-xs font-medium text-secondary-500 uppercase tracking-wider mb-2">
              {nodeCategories.find(c => c.id === category)?.name || category}
            </h4>
            <div className="space-y-1">
              {nodes.map(node => (
                <button
                  key={node.type}
                  onClick={() => onAddNode(node.type)}
                  className="w-full text-left p-3 border border-secondary-200 rounded-lg hover:bg-secondary-50 transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-1.5 rounded ${node.color}`}>
                      <node.icon className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-secondary-900 group-hover:text-primary-700">
                        {node.name}
                      </div>
                      <div className="text-xs text-secondary-500 line-clamp-2">
                        {node.description}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filteredNodes.length === 0 && (
        <div className="text-center py-8">
          <Filter className="mx-auto h-8 w-8 text-secondary-400 mb-2" />
          <p className="text-sm text-secondary-500">No nodes found</p>
          <p className="text-xs text-secondary-400 mt-1">
            Try adjusting your search or filter
          </p>
        </div>
      )}
    </div>
  )
}
