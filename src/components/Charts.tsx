import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface ChartDataItem {
  id: number
  name: string
  date: string
  status: string
  value: number
}

interface ChartsProps {
  data: ChartDataItem[]
}

export default function Charts({ data }: ChartsProps) {
  const chartData = data.map((item) => ({
    name: item.name.replace(' Report', ''),
    value: item.value,
  }))

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-github-text mb-4">Reports Value Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
            <XAxis dataKey="name" stroke="#8b949e" />
            <YAxis stroke="#8b949e" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#161b22',
                border: '1px solid #30363d',
                borderRadius: '6px',
              }}
              labelStyle={{ color: '#c9d1d9' }}
            />
            <Legend />
            <Bar dataKey="value" fill="#238636" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-github-text mb-4">Reports Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
            <XAxis dataKey="name" stroke="#8b949e" />
            <YAxis stroke="#8b949e" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#161b22',
                border: '1px solid #30363d',
                borderRadius: '6px',
              }}
              labelStyle={{ color: '#c9d1d9' }}
            />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#238636" strokeWidth={2} dot={{ fill: '#238636', r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
