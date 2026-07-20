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
    <main className="flex-1 overflow-auto bg-gray-50">
      <div className="p-8 space-y-6">
        {/* Header Section */}
        <div className="flex justify-between items-start md:items-center gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">📊 Dashboard</h2>
            <p className="text-gray-600 mt-2">Headless UI + Tailwind Styling</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-sm">
              <Upload size={18} /> Upload
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium">
              <Download size={18} /> Export
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium">
              <Filter size={18} /> Filter
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <DashboardStats />

        {/* Tabs */}
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Content */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
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
