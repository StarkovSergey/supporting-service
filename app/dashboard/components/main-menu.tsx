import { MenuTitle } from '@/app/dashboard/components/menu-title'
import MenuItem from '@/app/dashboard/components/menu-item'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import Link from 'next/link'
import { LightDarkToggle } from '@/components/ui/light-dark-toggle'

export function MainMenu() {
  return (
    <div className="flex flex-col overflow-auto bg-muted p-4">
      <div className="border-b border-b-zinc-300 pb-4 dark:border-b-black">
        <MenuTitle />
      </div>
      <div className="grow py-4">
        <MenuItem href="/dashboard">My dashboard</MenuItem>
        <MenuItem href="/dashboard/teams">Teams</MenuItem>
        <MenuItem href="/dashboard/employees">Employees</MenuItem>
        <MenuItem href="/dashboard/account">Account</MenuItem>
        <MenuItem href="/dashboard/settings">Settings</MenuItem>
      </div>
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarFallback className="bg-pink-300 dark:bg-pink-800">SS</AvatarFallback>
        </Avatar>
        <Link href="/" className="hover:underline">
          Logout
        </Link>
        <LightDarkToggle className="ml-auto" />
      </div>
    </div>
  )
}
