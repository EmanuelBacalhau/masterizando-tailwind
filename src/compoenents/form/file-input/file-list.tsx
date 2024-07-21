'use client'

import { useFileInput } from './root'

import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FileItem } from './file-item'

export function FileList() {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file) => {
        return (
          <FileItem
            name={file.name}
            size={file.size}
            key={file.name}
            state="complete"
          />
        )
      })}
    </div>
  )
}
