import { BarChart3, Users, FileText, TrendingUp } from 'lucide-react'
import StatsCard from '@/components/StatsCard'

export default function DashboardStats() {
  const stats = [
    {
      title: 'Total Reports',
      value: 1234,
      change: 12,
      icon: <FileText size={20} />,
    },
    {
      title: 'Active Users',
      value: 567,
      change: 8,
      icon: <Users size={20} />,
    },
    {
      title: 'Revenue',
      value: '$45.2K',
      change: 15,
      icon: <TrendingUp size={20} />,
      unit: 'USD',
    },
    {
      title: 'Performance',
      value: '94%',
      change: 5,
      icon: <BarChart3 size={20} />,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  )
}
