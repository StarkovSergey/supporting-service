import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import {
  AlertTriangleIcon,
  BadgeCheckIcon,
  UserCheckIcon,
  UserIcon,
  UserRoundXIcon,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function EmployeesStats() {
  const totalEmployees = 100
  const employeesPresent = 80
  const employeesPresentPercentage = (employeesPresent / totalEmployees) * 100

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Total employees</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between gap-4">
          <div className="flex gap-2">
            <UserIcon />
            <div className="text-5xl font-bold">{totalEmployees}</div>
          </div>
          <div>
            <Button asChild size="xs">
              <Link href="/dashboard/emplyees">View all</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Employees present</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between gap-4">
          <div className="flex gap-2">
            {employeesPresentPercentage > 75 ? <UserCheckIcon /> : <UserRoundXIcon />}

            <div className="text-5xl font-bold">{employeesPresent}</div>
          </div>
        </CardContent>
        <CardFooter>
          {employeesPresentPercentage > 75 ? (
            <span className="flex items-center gap-1 text-xs text-green-500">
              <BadgeCheckIcon />
              {employeesPresentPercentage}% of employees are present
            </span>
          ) : (
            <span className="flex items-center gap-1 text-xs text-red-500">
              <AlertTriangleIcon />
              Only {employeesPresentPercentage}% of employees are present
            </span>
          )}
        </CardFooter>
      </Card>
      <Card className="border-pink-500">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Employee of the month</CardTitle>
        </CardHeader>
      </Card>
    </div>
  )
}
