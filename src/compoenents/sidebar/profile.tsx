import { LogOut } from 'lucide-react'
import { Button } from '../button'

export function Profile() {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <img
          src="https://github.com/EmanuelBacalhau.png"
          className="h-10 w-10 rounded-full"
          alt=""
        />

        <div className="flex flex-col truncate">
          <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
            Emanuel Bacalhau
          </span>
          <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
            carlosemanuel@gmail.com
          </span>
        </div>
      </div>

      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
