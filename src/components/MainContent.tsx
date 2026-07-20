import { useState } from 'react'
import { Upload, Download, Filter } from 'lucide-react'
import Tabs from '@/components/Tabs'
import DataTable from '@/components/DataTable'
import Charts from '@/components/Charts'
import DashboardStats from '@/components/DashboardStats'

const sampleData = [
  { id: 1, name: 'Q1 Report', date: '2024-03-31', status: 'Completed', value: 45000 },
  { id: 2, name: 'Q2 Report', date: '2024-06-30', status: 'In Progress', value: 52000 },
  { id: 3, name: 'Q3 Report', date: '2024-09-30', status: 'Pending', value: 38000 },
  { id: 4, name: 'Q4 Report', date: '2024-12-31', status: 'Completed', value: 61000 },
]

export default function MainContent() {
  const [activeTab, setActiveTab] = useState('review')

  return (
    <main className="flex-1 overflow-auto bg-primer-bg-default">
      <div className="p-8 space-y-6">
        {/* Header Section */}
        <div className="flex justify-between items-start md:items-center gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl font-bold text-primer-fg-default">🎨 Dashboard</h2>
            <p className="text-primer-fg-muted mt-2">Primer UI Components</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <button className="primer-button-primary flex items-center gap-2">
              <Upload size={18} /> Upload
            </button>
            <button className="primer-button-secondary flex items-center gap-2">
              <Download size={18} /> Export
            </button>
            <button className="primer-button-secondary flex items-center gap-2">
              <Filter size={18} /> Filter
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <DashboardStats />

        {/* Tabs */}
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Content */}
        <div className="bg-primer-bg-default border border-primer-border-default rounded-lg p-6">
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
