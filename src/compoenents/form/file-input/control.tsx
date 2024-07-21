'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './root'

interface ControlProps extends ComponentProps<'input'> {}

export function Control({ multiple = false, ...props }: ControlProps) {
  const { id, onFilesSelected } = useFileInput()

  function handleFileSelected(ev: ChangeEvent<HTMLInputElement>) {
    if (ev.target.files?.length) {
      const files = Array.from(ev.target.files)

      onFilesSelected(files, multiple)
    }
  }

  return (
    <input
      type="file"
      id={id}
      className="sr-only"
      onChange={handleFileSelected}
      {...props}
      multiple={multiple}
    />
  )
}
