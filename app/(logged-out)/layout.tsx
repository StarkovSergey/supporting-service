import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

export default function LoggedOutLayout({ children }: Props) {
  return (
    <div className="flex flex-col gap-4 min-h-screen items-center p-24 justify-center">
      {children}
    </div>
  )
}
