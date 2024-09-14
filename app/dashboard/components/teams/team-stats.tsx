import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ListCheckIcon, PieChart, StarIcon, UsersIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import cm from '@/public/images/cm.jpg'
import tf from '@/public/images/tf.jpg'
import rl from '@/public/images/rl.jpg'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import Image from 'next/image'
import TeamDistributionChart from '@/app/dashboard/components/teams/team-distrubution-chart'

const teamLeaders = [
  {
    firstName: 'Brendan',
    lastName: 'Morris',
    avatar: cm,
  },
  {
    firstName: 'Jenny',
    lastName: 'Wilson',
  },
  {
    firstName: 'Lori',
    lastName: 'Barnes',
  },
  {
    firstName: 'Megan',
    lastName: 'Foster',
    avatar: tf,
  },
  {
    firstName: 'Nina',
    lastName: 'Harrison',
  },
  {
    firstName: 'Randy',
    lastName: 'Hunt',
  },
  {
    firstName: 'Samantha',
    lastName: 'Reed',
    avatar: rl,
  },
  {
    firstName: 'Terry',
    lastName: 'Ward',
  },
]

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
            <CardTitle className="flex items-center justify-between text-base">
              <span>Team leaders</span>
              <StarIcon className="text-yellow-500" />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {teamLeaders.map((teamLeader) => (
              <TooltipProvider key={`${teamLeader.firstName}${teamLeader.lastName}`}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar>
                      {!!teamLeader.avatar && (
                        <Image
                          src={teamLeader.avatar}
                          alt={`${teamLeader.firstName} ${teamLeader.lastName} avatar`}
                        />
                      )}
                      <AvatarFallback>
                        {teamLeader.firstName[0]}
                        {teamLeader.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    {teamLeader.firstName} {teamLeader.lastName}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center justify-between text-base">
              <span>Team distribution</span>
              <PieChart />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-2">
            <TeamDistributionChart />
          </CardContent>
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
