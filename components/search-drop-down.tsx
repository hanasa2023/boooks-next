import { Listbox, ListboxItem } from '@nextui-org/listbox'
import Fuse, { FuseResult } from 'fuse.js'
import { useEffect, useState } from 'react'

import { ossClient } from '@/utils/Client'
import { FileData } from '@/types'

export const SearchDropDown = ({ value }: { value: string }) => {
  const [files, setFiles] = useState<FileData[]>([])
  const [results, setResults] = useState<FileData[]>([])

  useEffect(() => {
    ossClient.listAllFiles('').then((f) => {
      setFiles(f)
    })
  }, [])

  const fuse = new Fuse(files ? files : [], {
    keys: ['name'],
    threshold: 0.3,
  })

  useEffect(() => {
    const r: FileData[] = fuse
      .search(value)
      .map((res: FuseResult<FileData>) => {
        return res.item
      })

    setResults(r)
  }, [value, files])

  if (value) {
    return (
      <Listbox
        aria-label="DropDown"
        className="absolute rounded-sm top-full w-full z-50 shadow-xl bg-primary-400/65 dark:bg-default/60 backdrop-blur-xl backdrop-saturate-200"
        color="primary"
        items={results}
        variant="shadow"
      >
        {(item: FileData) => (
          <ListboxItem
            key={item.name}
            className="overflow-clip"
            href={`/books/${item.dir}`}
          >
            {item.name}
          </ListboxItem>
        )}
      </Listbox>
    )
  } else {
    return <></>
  }
}
