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
      } bg-primer-bg-subtle border-r border-primer-border-default transition-all duration-300 flex flex-col shadow-sm`}
    >
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              item.active
                ? 'bg-primer-accent-fg text-white shadow-md hover:bg-primer-success-emphasis'
                : 'text-primer-fg-default hover:bg-primer-bg-muted'
            }`}
          >
            <item.icon size={20} />
            {isOpen && <span className="font-medium">{item.label}</span>}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-primer-border-default">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-primer-fg-default hover:bg-primer-bg-muted transition-colors duration-200">
          <LogOut size={20} />
          {isOpen && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </aside>
  )
}
