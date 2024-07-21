import { InputControl, InputPrefix, InputRoot } from '@/compoenents/input'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import * as FileInput from '@/compoenents/form/file-input'
import { Select } from '@/compoenents/form/select'
import { SelectItem } from '@/compoenents/form/select/select-item'
import { Button } from '@/compoenents/button'

export function MyDetails() {
  return (
    <div className="mt-6 flex flex-col">
      <div className="darK:border-zinc-700 flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 lg:flex-row lg:items-center">
        <div className="space-y-1">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Personal info
          </h2>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            Update your photo and personal details here.
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </div>
      </div>

      <form
        id="settings"
        className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
      >
        <div className="lg:grid-cols-form flex flex-col gap-3 lg:grid">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Name
          </label>
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
            <InputRoot>
              <InputControl id="firstName" defaultValue={'Emanuel'} />
            </InputRoot>

            <div className="flex flex-col gap-3 lg:block">
              <label
                className="text-sm font-medium text-zinc-700 lg:sr-only dark:text-zinc-300"
                htmlFor="lastName"
              >
                Last name
              </label>

              <InputRoot>
                <InputControl id="lastName" defaultValue={'Bacalhau'} />
              </InputRoot>
            </div>
          </div>
        </div>

        <div className="lg:grid-cols-form flex flex-col gap-3 pt-5 lg:grid">
          <label
            htmlFor="emailAddress"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Email address
          </label>
          <InputRoot>
            <InputPrefix>
              <Mail className="h-5 w-5 text-zinc-500" />
            </InputPrefix>
            <InputControl
              id="emailAddress"
              type="email"
              defaultValue={'emanuel@gmail.com'}
            />
          </InputRoot>
        </div>

        <div className="lg:grid-cols-form flex flex-col gap-3 pt-5 lg:grid">
          <label
            htmlFor="yourPhoto"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Your photo
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              This will be displayed on your profile.
            </span>
          </label>

          <FileInput.Root className="flex items-start gap-5">
            <FileInput.ImagePreview />
            <FileInput.Trigger />
            <FileInput.Control />
          </FileInput.Root>
        </div>

        <div className="lg:grid-cols-form flex flex-col gap-3 pt-5 lg:grid">
          <label
            htmlFor="role"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Role
          </label>
          <InputRoot>
            <InputControl id="role" type="text" defaultValue={'CTO'} />
          </InputRoot>
        </div>

        <div className="lg:grid-cols-form flex flex-col gap-3 pt-5 lg:grid">
          <label
            htmlFor="country"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Country
          </label>

          <Select placeholder="Select a country...">
            <SelectItem text="Braizl" value="br" />
            <SelectItem text="United States" value="un" />
          </Select>
        </div>

        <div className="lg:grid-cols-form flex flex-col gap-3 pt-5 lg:grid">
          <label
            htmlFor="timezone"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Timezone
          </label>
          <Select placeholder="Select a timezone...">
            <SelectItem
              text="Pacific Standard Time (UTC-08:00)"
              value="pacific"
            />
            <SelectItem text="America São Paulo (UTC-03:00)" value="br" />
          </Select>
        </div>

        <div className="lg:grid-cols-form flex flex-col gap-3 pt-5 lg:grid">
          <label
            htmlFor="bio"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Bio
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              Write a short introduction.
            </span>
          </label>
          <div className="space-y-3">
            <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
              <Select placeholder="" defaultValue="normal">
                <SelectItem text="Normal Text" defaultChecked value="normal" />
                <SelectItem text="MarckDown" value="md" />
              </Select>

              <div className="flex items-center gap-1">
                <Button type="button" variant="ghost">
                  <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                  <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                  <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                  <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                  <ListOrdered
                    className="h-4 w-4 text-zinc-500"
                    strokeWidth={3}
                  />
                </Button>
              </div>
            </div>

            <textarea
              id="bio"
              defaultValue="I'm a Product Designer based in Melbourne."
              className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100 data-[placeholder]:text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-400 dark:focus:border-violet-500 dark:focus:ring-violet-500/10"
            />
          </div>
        </div>

        <div className="lg:grid-cols-form flex flex-col gap-3 pt-5 lg:grid">
          <label
            htmlFor="portfolio"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Portfolio projects
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              Share a few snipptes pf your work.
            </span>
          </label>
          <FileInput.Root>
            <FileInput.Trigger />
            <FileInput.FileList />
            <FileInput.Control multiple />
          </FileInput.Root>
        </div>

        <div className="flex items-center justify-end gap-2 pt-5">
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </div>
  )
}
