import { useState } from 'react'
import { Upload, Download, Filter } from 'lucide-react'
import Tabs from '@/components/Tabs'
import DataTable from '@/components/DataTable'
import Charts from '@/components/Charts'

const sampleData = [
  { id: 1, name: 'Q1 Report', date: '2024-03-31', status: 'Completed', value: 45000 },
  { id: 2, name: 'Q2 Report', date: '2024-06-30', status: 'In Progress', value: 52000 },
  { id: 3, name: 'Q3 Report', date: '2024-09-30', status: 'Pending', value: 38000 },
  { id: 4, name: 'Q4 Report', date: '2024-12-31', status: 'Completed', value: 61000 },
]

export default function MainContent() {
  const [activeTab, setActiveTab] = useState('review')

  return (
    <main className="flex-1 overflow-auto bg-github-bg">
      <div className="p-8 space-y-6">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-github-text">Reports Dashboard</h2>
            <p className="text-github-text-secondary mt-2">Manage and track your reports</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-github-green text-white rounded-md hover:bg-github-green-dark transition-colors">
              <Upload size={18} /> Upload Report
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-github-border text-github-text rounded-md hover:bg-github-bg-tertiary transition-colors">
              <Download size={18} /> Export
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-github-border text-github-text rounded-md hover:bg-github-bg-tertiary transition-colors">
              <Filter size={18} /> Filter
            </button>
          </div>
        </div>

        {/* Tabs */}
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Content */}
        <div className="bg-github-bg-secondary border border-github-border rounded-lg p-6">
          {activeTab === 'review' ? (
            <DataTable data={sampleData} />
          ) : (
            <Charts data={sampleData} />
          )}
        </div>
      </div>
    </main>
  )
}
