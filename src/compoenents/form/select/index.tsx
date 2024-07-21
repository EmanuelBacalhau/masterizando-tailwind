'use client'

import * as SelectRadix from '@radix-ui/react-select'

import { ChevronDown } from 'lucide-react'

interface SelectProps extends SelectRadix.SelectProps {
  placeholder: string
  children: React.ReactNode
}

export function Select({ children, placeholder, ...props }: SelectProps) {
  return (
    <SelectRadix.Root {...props}>
      <SelectRadix.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100 data-[placeholder]:text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/10 dark:data-[placeholder]:text-zinc-400">
        <SelectRadix.Value className="text-black" placeholder={placeholder} />

        <SelectRadix.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </SelectRadix.Icon>
      </SelectRadix.Trigger>

      <SelectRadix.SelectPortal>
        <SelectRadix.Content
          side="bottom"
          position="popper"
          className="animate-slideDownAndFade z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-300 bg-white shadow-md dark:border-zinc-700 dark:bg-zinc-800"
          sideOffset={4}
        >
          <SelectRadix.Viewport>{children}</SelectRadix.Viewport>
        </SelectRadix.Content>
      </SelectRadix.SelectPortal>
    </SelectRadix.Root>
  )
}
