import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem({ value, title, isSelected = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      className="relative whitespace-nowrap px-1 py-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700 dark:text-zinc-400 dark:hover:text-violet-300 dark:data-[state=active]:text-violet-300"
      value={value}
    >
      <span>{title}</span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 rounded-full bg-violet-700 dark:bg-violet-300"
        />
      )}
    </Tabs.Trigger>
  )
}
