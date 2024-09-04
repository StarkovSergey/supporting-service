'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type Props = {
  children: ReactNode
  href: string
}

export default function MenuItem({ children, href }: Props) {
  const pathname = usePathname()

  const isActive = pathname === href

  return (
    <Link
      className={cn(
        'block rounded-md p-2 text-muted-foreground hover:bg-white hover:text-foreground dark:hover:bg-zinc-700',
        isActive && 'bg-primary text-foreground hover:bg-primary dark:hover:bg-primary'
      )}
      href={href}>
      {children}
    </Link>
  )
}
