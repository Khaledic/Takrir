import { Menu, Settings, Bell, User } from 'lucide-react'

interface HeaderProps {
  onMenuClick: () => void
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="h-16 bg-github-bg-secondary border-b border-github-border flex items-center justify-between px-6 sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="p-2 hover:bg-github-bg-tertiary rounded-md transition-colors"
        >
          <Menu size={20} className="text-github-text" />
        </button>
        <h1 className="text-xl font-bold text-github-green">Takrir</h1>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-github-bg-tertiary rounded-md transition-colors">
          <Bell size={20} className="text-github-text" />
        </button>
        <button className="p-2 hover:bg-github-bg-tertiary rounded-md transition-colors">
          <Settings size={20} className="text-github-text" />
        </button>
        <button className="p-2 hover:bg-github-bg-tertiary rounded-md transition-colors">
          <User size={20} className="text-github-text" />
        </button>
      </div>
    </header>
  )
}
