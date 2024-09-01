'use client'

import { useState } from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { MoonIcon, SunIcon } from 'lucide-react'

export function LightDarkToggle({ className }: { className?: string }) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className={className}
          onClick={() => {
            setIsDarkMode((prevValue) => !prevValue)
            document.body.classList.toggle('dark')
          }}>
          {isDarkMode ? <MoonIcon /> : <SunIcon />}
        </TooltipTrigger>
        <TooltipContent>{isDarkMode ? 'Enable light mode' : 'Enable dark mode'}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
