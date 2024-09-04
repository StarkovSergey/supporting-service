import { MenuTitle } from '@/app/dashboard/components/menu-title'
import MenuItem from '@/app/dashboard/components/menu-item'

export function MainMenu() {
  return (
    <div className="overflow-auto bg-muted p-4">
      <div className="border-b border-b-zinc-300 pb-4 dark:border-b-black">
        <MenuTitle />
      </div>
      <div className="py-4">
        <MenuItem href="/dashboard">My dashboard</MenuItem>
        <MenuItem href="/dashboard/teams">Teams</MenuItem>
        <MenuItem href="/dashboard/employees">Employees</MenuItem>
        <MenuItem href="/dashboard/account">Account</MenuItem>
        <MenuItem href="/dashboard/settings">Settings</MenuItem>
      </div>
    </div>
  )
}
