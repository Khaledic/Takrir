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
        <h3 className="text-lg font-semibold text-primer-fg-default mb-4">Reports Value Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eaeef2" />
            <XAxis dataKey="name" stroke="#57606a" />
            <YAxis stroke="#57606a" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #d0d7de',
                borderRadius: '6px',
                boxShadow: '0 3px 12px rgba(0, 0, 0, 0.12)',
              }}
              labelStyle={{ color: '#24292f' }}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Bar dataKey="value" fill="#238636" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-primer-fg-default mb-4">Reports Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eaeef2" />
            <XAxis dataKey="name" stroke="#57606a" />
            <YAxis stroke="#57606a" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #d0d7de',
                borderRadius: '6px',
                boxShadow: '0 3px 12px rgba(0, 0, 0, 0.12)',
              }}
              labelStyle={{ color: '#24292f' }}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Line type="monotone" dataKey="value" stroke="#238636" strokeWidth={2} dot={{ fill: '#238636', r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
