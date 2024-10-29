'use client'
import { Input } from '@nextui-org/input'
import { useState } from 'react'

import { SearchIcon } from '@/components/icons'
import { SearchDropDown } from '@/components/search-drop-down'

export const SearchInput = () => {
  const [searchInput, setSearchInput] = useState<string>('')

  const onValueChange = (v: string) => {
    setSearchInput(v)
  }

  return (
    <div className="relative">
      <Input
        isClearable
        aria-label="Search"
        classNames={{
          label: 'text-black/50 dark:text-white/90',
          input: [
            'bg-transparent',
            'text-black/90 dark:text-white/90',
            'placeholder:text-default-700/50 dark:placeholder:text-white/60',
          ],
          innerWrapper: 'bg-transparent',
          inputWrapper: [
            'shadow-xl',
            'bg-default-200/50',
            'dark:bg-default/60',
            'backdrop-blur-xl',
            'backdrop-saturate-200',
            'hover:bg-default-200/70',
            'dark:hover:bg-default/70',
            'group-data-[focus=true]:bg-default-200/50',
            'dark:group-data-[focus=true]:bg-default/60',
            '!cursor-text',
          ],
        }}
        placeholder="在此输入你要找的文件……"
        radius="lg"
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
        value={searchInput}
        onValueChange={onValueChange}
      />
      <SearchDropDown value={searchInput} />
    </div>
  )
}
