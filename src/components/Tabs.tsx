interface TabsProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const tabs = [
  { id: 'review', label: 'Review', count: 4 },
  { id: 'reports', label: 'Reports', count: 8 },
  { id: 'archive', label: 'Archive', count: 2 },
]

export default function Tabs({ activeTab, onTabChange }: TabsProps) {
  return (
    <div className="flex gap-0 border-b border-primer-border-default">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-6 py-3 font-medium transition-all duration-200 border-b-2 ${
            activeTab === tab.id
              ? 'border-primer-accent-fg text-primer-accent-fg'
              : 'border-transparent text-primer-fg-muted hover:text-primer-fg-default'
          }`}
        >
          {tab.label}
          <span className="ml-2 text-sm bg-primer-bg-muted px-2 py-1 rounded text-primer-fg-muted">
            {tab.count}
          </span>
        </button>
      ))}
    </div>
  )
}
