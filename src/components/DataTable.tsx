import { CheckCircle2, Clock, AlertCircle } from 'lucide-react'

interface DataRow {
  id: number
  name: string
  date: string
  status: string
  value: number
}

interface DataTableProps {
  data: DataRow[]
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'Completed':
      return <CheckCircle2 size={18} className="text-primer-success-fg" />
    case 'In Progress':
      return <Clock size={18} className="text-blue-500" />
    case 'Pending':
      return <AlertCircle size={18} className="text-primer-attention-fg" />
    default:
      return null
  }
}

export default function DataTable({ data }: DataTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-primer-border-default bg-primer-bg-muted">
            <th className="px-6 py-3 text-left font-semibold text-primer-fg-default">Report Name</th>
            <th className="px-6 py-3 text-left font-semibold text-primer-fg-default">Date</th>
            <th className="px-6 py-3 text-left font-semibold text-primer-fg-default">Status</th>
            <th className="px-6 py-3 text-right font-semibold text-primer-fg-default">Value</th>
            <th className="px-6 py-3 text-right font-semibold text-primer-fg-default">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={row.id}
              className={`border-b border-primer-border-muted transition-colors duration-200 ${
                idx % 2 === 0 ? 'bg-primer-bg-default' : 'bg-primer-bg-muted/50'
              } hover:bg-primer-bg-muted`}
            >
              <td className="px-6 py-4 text-primer-fg-default font-medium">{row.name}</td>
              <td className="px-6 py-4 text-primer-fg-muted">{row.date}</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  {getStatusIcon(row.status)}
                  <span className="text-primer-fg-default">{row.status}</span>
                </div>
              </td>
              <td className="px-6 py-4 text-right text-primer-accent-fg font-semibold">
                ${row.value.toLocaleString()}
              </td>
              <td className="px-6 py-4 text-right">
                <button className="text-primer-accent-fg hover:text-primer-success-emphasis transition-colors duration-200 font-medium hover:underline">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
