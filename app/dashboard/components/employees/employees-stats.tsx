import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import {
  AlertTriangleIcon,
  BadgeCheckIcon,
  LaptopIcon,
  PartyPopperIcon,
  UserCheckIcon,
  UserIcon,
  UserRoundXIcon,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import cm from '@/public/images/cm.jpg'
import Image from 'next/image'
import WorkLocationTrends from '@/app/dashboard/components/employees/work-location-trends'

export function EmployeesStats() {
  const totalEmployees = 100
  const employeesPresent = 80
  const employeesPresentPercentage = (employeesPresent / totalEmployees) * 100

  return (
    <>
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
        <Card className="flex flex-col border-pink-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Employee of the month</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-2">
            <Avatar>
              <Image src={cm} alt="Employee of the month" />
              <AvatarFallback>BM</AvatarFallback>
            </Avatar>
            <span className="text-2xl">Brendan Morris!</span>
          </CardContent>
          <CardFooter className="mt-auto flex items-center gap-2 text-muted-foreground">
            <PartyPopperIcon className="text-pink-500" />
            <span>Congratulations, Brendan!</span>
          </CardFooter>
        </Card>
      </div>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <LaptopIcon />
            <span>Employee work location trends</span>
          </CardTitle>
          <CardContent className="pl-0">
            <WorkLocationTrends />
          </CardContent>
        </CardHeader>
      </Card>
    </>
  )
}
