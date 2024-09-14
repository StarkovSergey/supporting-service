'use client'

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const data = [
  {
    name: 'Jan',
    kelpie: 40,
    unicorn: 24,
    dragon: 24,
  },
  {
    name: 'Feb',
    kelpie: 30,
    unicorn: 13,
    dragon: 40,
  },
  {
    name: 'Mar',
    kelpie: 20,
    unicorn: 22,
    dragon: 30,
  },
  {
    name: 'Apr',
    kelpie: 27,
    unicorn: 30,
    dragon: 45,
  },
  {
    name: 'May',
    kelpie: 35,
    unicorn: 20,
    dragon: 45,
  },
  {
    name: 'Jun',
    kelpie: 25,
    unicorn: 30,
    dragon: 55,
  },
  {
    name: 'Jul',
    kelpie: 30,
    unicorn: 35,
    dragon: 40,
  },
  {
    name: 'Aug',
    kelpie: 20,
    unicorn: 25,
    dragon: 30,
  },
  {
    name: 'Sep',
    kelpie: 25,
    unicorn: 30,
    dragon: 35,
  },
  {
    name: 'Oct',
    kelpie: 23,
    unicorn: 35,
    dragon: 40,
  },
  {
    name: 'Nov',
    kelpie: 20,
    unicorn: 15,
    dragon: 30,
  },
  {
    name: 'Dec',
    kelpie: 15,
    unicorn: 30,
    dragon: 35,
  },
]

export function SupportTicketsResolved() {
  return (
    <ResponsiveContainer height={350} width="100%">
      <LineChart data={data}>
        <Tooltip
          wrapperClassName="!text-sm dark:!bg-black rounded-md dark:!border-border"
          labelClassName="font-bold"
        />
        <XAxis fontSize={12} dataKey="name" stroke="#888888" />
        <YAxis fontSize={12} stroke="#888888" />
        <CartesianGrid strokeDasharray="3" />
        <Line dataKey="kelpie" type="monotone" stroke="#84cc16" />
        <Line dataKey="unicorn" type="monotone" stroke="#FFC107" />
        <Line dataKey="dragon" type="monotone" stroke="#f44336" />
        <Legend formatter={(value) => <span className="capitalize">{value}</span>} />
      </LineChart>
    </ResponsiveContainer>
  )
}
