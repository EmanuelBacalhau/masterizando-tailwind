'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './tab-item'
import { useState } from 'react'

import * as ScrollArea from '@radix-ui/react-scroll-area'
import { MyDetails } from './my-details'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('tab1')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.TabsList className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
            <TabItem
              value="tab1"
              title="My Details"
              isSelected={currentTab === 'tab1'}
            />
            <TabItem
              value="tab2"
              title="Profile"
              isSelected={currentTab === 'tab2'}
            />
            <TabItem
              value="tab3"
              title="Password"
              isSelected={currentTab === 'tab3'}
            />
            <TabItem
              value="tab4"
              title="Team"
              isSelected={currentTab === 'tab4'}
            />
            <TabItem
              value="tab5"
              title="Plan"
              isSelected={currentTab === 'tab5'}
            />
            <TabItem
              value="tab6"
              title="Billing"
              isSelected={currentTab === 'tab6'}
            />
            <TabItem
              value="tab7"
              title="Email"
              isSelected={currentTab === 'tab7'}
            />
            <TabItem
              value="tab8"
              title="Notification"
              isSelected={currentTab === 'tab8'}
            />
            <TabItem
              value="tab9"
              title="Integration"
              isSelected={currentTab === 'tab9'}
            />
            <TabItem
              value="tab10"
              title="API"
              isSelected={currentTab === 'tab10'}
            />
          </Tabs.TabsList>
        </ScrollArea.Viewport>

        <ScrollArea.ScrollAreaScrollbar
          className="flex h-0.5 translate-y-1.5 bg-zinc-100"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="relative touch-none select-none rounded-lg bg-slate-300" />
        </ScrollArea.ScrollAreaScrollbar>
      </ScrollArea.Root>

      <Tabs.Content value="tab1">
        <MyDetails />
      </Tabs.Content>

      <Tabs.Content value="tab2">
        <h1 className="text-zinc-950 dark:text-white">Page</h1>
      </Tabs.Content>

      <Tabs.Content value="tab3">
        <h1 className="text-zinc-950 dark:text-white">Page</h1>
      </Tabs.Content>

      <Tabs.Content value="tab4">
        <h1 className="text-zinc-950 dark:text-white">Page</h1>
      </Tabs.Content>

      <Tabs.Content value="tab5">
        <h1 className="text-zinc-950 dark:text-white">Page</h1>
      </Tabs.Content>

      <Tabs.Content value="tab6">
        <h1 className="text-zinc-950 dark:text-white">Page</h1>
      </Tabs.Content>

      <Tabs.Content value="tab7">
        <h1 className="text-zinc-950 dark:text-white">Page</h1>
      </Tabs.Content>

      <Tabs.Content value="tab8">
        <h1 className="text-zinc-950 dark:text-white">Page</h1>
      </Tabs.Content>

      <Tabs.Content value="tab9">
        <h1 className="text-zinc-950 dark:text-white">Page</h1>
      </Tabs.Content>

      <Tabs.Content value="tab10">
        <h1 className="text-zinc-950 dark:text-white">Page</h1>
      </Tabs.Content>
    </Tabs.Root>
  )
}
