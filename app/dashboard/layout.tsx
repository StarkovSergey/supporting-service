import { ReactNode } from 'react'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid h-screen grid-cols-[250px_1fr]">
      <div className="overflow-auto bg-muted p-4">side panel</div>
      <div className="overflow-auto px-4 py-2">
        <h1 className="pb-4">Welcome back!</h1>
        {children}
      </div>
    </div>
  )
}
