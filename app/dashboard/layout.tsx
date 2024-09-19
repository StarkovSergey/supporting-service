'use client'

import { ReactNode } from 'react'
import { MainMenu } from '@/app/dashboard/components/main-menu'
import { MenuTitle } from '@/app/dashboard/components/menu-title'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { MenuIcon } from 'lucide-react'
import { useMediaQuery } from '@/hooks/use-media-query'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const isDesktop = useMediaQuery('(min-width:768px)')

  return (
    <div className="grid h-screen md:grid-cols-[250px_1fr]">
      <MainMenu className="hidden md:flex" />
      {!isDesktop && (
        <div className="sticky left-0 top-0 flex justify-between border-b border-border bg-background p-4 md:hidden">
          <MenuTitle />
          <Drawer>
            <DrawerTrigger>
              <MenuIcon />
            </DrawerTrigger>
            <DrawerContent>
              <MainMenu />
            </DrawerContent>
          </Drawer>
        </div>
      )}
      <div className="overflow-auto px-4 py-2">
        <h1 className="pb-4">Welcome back!</h1>
        {children}
      </div>
    </div>
  )
}
