import { LayoutDashboard, BarChart3, FileText, Settings, LogOut } from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: FileText, label: 'Reports', active: false },
  { icon: BarChart3, label: 'Analytics', active: false },
  { icon: Settings, label: 'Settings', active: false },
]

export default function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside
      className={`${
        isOpen ? 'w-64' : 'w-20'
      } bg-github-bg-secondary border-r border-github-border transition-all duration-300 flex flex-col`}
    >
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
              item.active
                ? 'bg-github-green text-white'
                : 'text-github-text hover:bg-github-bg-tertiary'
            }`}
          >
            <item.icon size={20} />
            {isOpen && <span>{item.label}</span>}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-github-border">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-md text-github-text hover:bg-github-bg-tertiary transition-colors">
          <LogOut size={20} />
          {isOpen && <span>Logout</span>}
        </button>
      </div>
    </aside>
  )
}
