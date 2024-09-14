import { ReactNode } from 'react'
import { MainMenu } from '@/app/dashboard/components/main-menu'
import { MenuTitle } from '@/app/dashboard/components/menu-title'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid h-screen md:grid-cols-[250px_1fr]">
      <MainMenu className="hidden md:flex" />
      <div className="sticky left-0 top-0 block border-b border-border bg-background p-4 md:hidden">
        <MenuTitle />
      </div>
      <div className="overflow-auto px-4 py-2">
        <h1 className="pb-4">Welcome back!</h1>
        {children}
      </div>
    </div>
  )
}
