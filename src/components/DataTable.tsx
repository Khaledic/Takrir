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
      return <CheckCircle2 size={18} className="text-green-500" />
    case 'In Progress':
      return <Clock size={18} className="text-blue-500" />
    case 'Pending':
      return <AlertCircle size={18} className="text-yellow-500" />
    default:
      return null
  }
}

export default function DataTable({ data }: DataTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-github-border bg-github-bg-secondary">
            <th className="px-6 py-3 text-left font-semibold text-github-text">Report Name</th>
            <th className="px-6 py-3 text-left font-semibold text-github-text">Date</th>
            <th className="px-6 py-3 text-left font-semibold text-github-text">Status</th>
            <th className="px-6 py-3 text-right font-semibold text-github-text">Value</th>
            <th className="px-6 py-3 text-right font-semibold text-github-text">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={row.id}
              className={`border-b border-github-border transition-colors duration-200 ${
                idx % 2 === 0 ? 'bg-white' : 'bg-github-bg-secondary/50'
              } hover:bg-github-bg-secondary`}
            >
              <td className="px-6 py-4 text-github-text font-medium">{row.name}</td>
              <td className="px-6 py-4 text-github-text-secondary">{row.date}</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  {getStatusIcon(row.status)}
                  <span className="text-github-text">{row.status}</span>
                </div>
              </td>
              <td className="px-6 py-4 text-right text-github-green font-semibold">
                ${row.value.toLocaleString()}
              </td>
              <td className="px-6 py-4 text-right">
                <button className="text-github-green hover:text-github-green-dark transition-colors duration-200 font-medium hover:underline">
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
