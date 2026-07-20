import { ReactNode } from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'

interface StatCardPrimerProps {
  title: string
  value: string | number
  change: number
  icon: ReactNode
  unit?: string
}

export default function StatCardPrimer({ title, value, change, icon, unit }: StatCardPrimerProps) {
  const isPositive = change >= 0

  return (
    <div className="bg-primer-bg-default border border-primer-border-default rounded-lg p-5 hover:shadow-md transition-all hover:border-primer-border-muted">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-primer-fg-default">{title}</h3>
        <div className="text-primer-fg-muted bg-primer-bg-subtle p-2 rounded-md">
          {icon}
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-baseline gap-2">
          <p className="text-2xl font-bold text-primer-fg-default">{value}</p>
          {unit && <span className="text-xs text-primer-fg-muted">{unit}</span>}
        </div>
        
        <div className="flex items-center gap-1">
          {isPositive ? (
            <TrendingUp size={14} className="text-primer-fg-success" />
          ) : (
            <TrendingDown size={14} className="text-primer-fg-danger" />
          )}
          <span className={`text-xs font-medium ${isPositive ? 'text-primer-fg-success' : 'text-primer-fg-danger'}`}>
            {isPositive ? '+' : ''}{change}%
          </span>
          <span className="text-xs text-primer-fg-muted">vs last month</span>
        </div>
      </div>
    </div>
  )
}
