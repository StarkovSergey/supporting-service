import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ListCheckIcon, UsersIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function TeamsStats() {
  return (
    <>
      <div className="grid gap-4 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total teams</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between gap-4">
            <div className="flex gap-2">
              <UsersIcon />
              <div className="text-5xl font-bold">8</div>
            </div>
            <div>
              <Button asChild size="xs">
                <Link href="/dashboard/teams">View all</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Team leaders</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between gap-4"></CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Team distribution</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-2"></CardContent>
        </Card>
      </div>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <ListCheckIcon />
            <span>Support tickets resolved</span>
          </CardTitle>
          <CardContent className="pl-0">line graph</CardContent>
        </CardHeader>
      </Card>
    </>
  )
}
