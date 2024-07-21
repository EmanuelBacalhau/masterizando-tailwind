'use client'

import { Logo } from './logo'
import {
  BarChart,
  CheckSquare,
  Cog,
  FlagTriangleLeft,
  Home,
  LifeBuoy,
  Menu,
  Search,
  SquareStackIcon,
  User,
} from 'lucide-react'
import { NavItem } from './nav-item'
import { UsedSapceWidge } from './used-space-widge'
import { Profile } from './profile'
import { InputControl, InputPrefix, InputRoot } from '../input'
import * as Collapasble from '@radix-ui/react-collapsible'
import { Button } from '../button'

export function Sidebar() {
  return (
    <Collapasble.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapasble.CollapsibleTrigger className="lg:hidden" asChild>
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapasble.CollapsibleTrigger>
      </div>

      <Collapasble.CollapsibleContent
        forceMount
        className="no-scrollbar flex flex-col gap-6 overflow-y-auto pb-4 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <InputRoot>
          <InputPrefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </InputPrefix>
          <InputControl placeholder="Search" type="text" />
        </InputRoot>

        <nav className="space-y-0.5">
          <NavItem icon={Home} title="Home" />
          <NavItem icon={BarChart} title="Dashboard" />
          <NavItem icon={SquareStackIcon} title="Projects" />
          <NavItem icon={CheckSquare} title="Tasks" />
          <NavItem icon={FlagTriangleLeft} title="Reporting" />
          <NavItem icon={User} title="Users" />
        </nav>

        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem icon={LifeBuoy} title="Support" />
            <NavItem icon={Cog} title="Setting" />
          </nav>

          <UsedSapceWidge />

          <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

          <Profile />
        </div>
      </Collapasble.CollapsibleContent>
    </Collapasble.Root>
  )
}
