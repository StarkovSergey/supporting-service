import { ReactNode } from 'react'
import { LightDarkToggle } from '@/components/ui/light-dark-toggle'

type Props = {
  children?: ReactNode
}

export default function LoggedOutLayout({ children }: Props) {
  return (
    <>
      <div className="flex flex-col gap-4 min-h-screen items-center p-24 justify-center">
        {children}
      </div>
      <LightDarkToggle className="fixed top-[calc(50%-12px)] right-2" />
    </>
  )
}
