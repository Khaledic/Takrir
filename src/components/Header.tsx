import { Menu, Settings, Bell, User } from 'lucide-react'

interface HeaderProps {
  onMenuClick: () => void
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="h-16 bg-primer-bg-default border-b border-primer-border-default flex items-center justify-between px-6 sticky top-0 z-40 shadow-sm">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="p-2 hover:bg-primer-bg-subtle rounded-lg transition-colors duration-200 text-primer-fg-default"
        >
          <Menu size={20} />
        </button>
        <h1 className="text-xl font-bold text-primer-accent-fg">Takrir</h1>
      </div>

      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-primer-bg-subtle rounded-lg transition-colors duration-200 text-primer-fg-default">
          <Bell size={20} />
        </button>
        <button className="p-2 hover:bg-primer-bg-subtle rounded-lg transition-colors duration-200 text-primer-fg-default">
          <Settings size={20} />
        </button>
        <button className="p-2 hover:bg-primer-bg-subtle rounded-lg transition-colors duration-200 text-primer-fg-default">
          <User size={20} />
        </button>
      </div>
    </header>
  )
}
