import { useState } from 'react'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import MainContent from '@/components/MainContent'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-white">
      <Sidebar isOpen={sidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <MainContent />
      </div>
    </div>
  )
}

export default App
