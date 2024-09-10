'use client'

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const MOCK_DATA = [
  {
    name: 'Jan',
    office: 82,
    wfh: 44,
  },
  {
    name: 'Feb',
    office: 80,
    wfh: 40,
  },
  {
    name: 'Mar',
    office: 83,
    wfh: 42,
  },
  {
    name: 'Apr',
    office: 50,
    wfh: 50,
  },
  {
    name: 'May',
    office: 50,
    wfh: 50,
  },
  {
    name: 'Jun',
    office: 50,
    wfh: 50,
  },
  {
    name: 'Jul',
    office: 55,
    wfh: 50,
  },
  {
    name: 'Aug',
    office: 49,
    wfh: 61,
  },
  {
    name: 'Sep',
    office: 44,
    wfh: 76,
  },
  {
    name: 'Oct',
    office: 40,
    wfh: 40,
  },
  {
    name: 'Nov',
    office: 50,
    wfh: 50,
  },
  {
    name: 'Dec',
    office: 50,
    wfh: 50,
  },
]

export default function WorkLocationTrends() {
  return (
    <ResponsiveContainer height={350} width="100%">
      <BarChart data={MOCK_DATA}>
        <XAxis dataKey="name" stroke="#888888" fontSize={14} />
        <YAxis stroke="#888888" fontSize={14} />
        <Tooltip />
        <Bar dataKey="office" stackId={1} fill="#ec4899" />
        <Bar dataKey="wfh" stackId={1} fill="#6b7280" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
