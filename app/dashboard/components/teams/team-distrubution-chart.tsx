'use client'

import { Cell, Pie, ResponsiveContainer, PieChart, Tooltip } from 'recharts'

const data = [
  {
    name: 'Happy Kelpie',
    value: 55,
    color: '#84cc16',
  },
  {
    name: 'Sleepy Unicorn',
    value: 34,
    color: '#FFC107',
  },
  {
    name: 'Angry Dragon',
    value: 11,
    color: '#f44336',
  },
]

export default function TeamDistributionChart() {
  return (
    <ResponsiveContainer width="100%" height={150}>
      <PieChart>
        <Tooltip
          wrapperClassName="dark:[&_.recharts-tooltip-item]:!text-white [&_.recharts-tooltip-item]:!text-dark !text-sm dark:!bg-black rounded-md dark:!border-border"
          labelClassName="font-bold"
        />
        <Pie data={data} dataKey="value" nameKey="name">
          {data.map((dataItem) => (
            <Cell key={dataItem.name} fill={dataItem.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}
