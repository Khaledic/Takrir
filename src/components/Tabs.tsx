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
    <div className="flex gap-0 border-b border-github-border">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-6 py-3 font-medium transition-colors border-b-2 ${
            activeTab === tab.id
              ? 'border-github-green text-github-green'
              : 'border-transparent text-github-text-secondary hover:text-github-text'
          }`}
        >
          {tab.label}
          <span className="ml-2 text-sm bg-github-bg-tertiary px-2 py-1 rounded">
            {tab.count}
          </span>
        </button>
      ))}
    </div>
  )
}
