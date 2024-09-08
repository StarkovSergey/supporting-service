import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { UserIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function EmployeesStats() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Total employees</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between gap-4">
          <div className="flex gap-2">
            <UserIcon />
            <div className="text-5xl font-bold">100</div>
          </div>
          <div>
            <Button asChild size="xs">
              <Link href="/dashboard/emplyees">View all</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Employees present</CardTitle>
        </CardHeader>
      </Card>
      <Card className="border-pink-500">
        <CardHeader>
          <CardTitle className="text-base">Employee of the month</CardTitle>
        </CardHeader>
      </Card>
    </div>
  )
}
