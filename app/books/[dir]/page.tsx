import React from 'react'
import { ObjectMeta } from 'ali-oss'

import { ossClient } from '@/utils/Client'
import { BookTable } from '@/components/booktable'
import { BookData } from '@/types'

const getBookData = async (dir: string) => {
  const res = await ossClient.listDir(`${decodeURIComponent(dir)}/`)

  return res.objects
}

export const generateStaticParams = async () => {
  const res = await ossClient.listDir('')

  return res.prefixes.map((prefix: string) => {
    return {
      dir: prefix.replace('/', ''),
    }
  })
}

const Books = async ({ params }: { params: Promise<{ dir: string }> }) => {
  const { dir } = await params
  const d: ObjectMeta[] = await getBookData(dir)
  const data: BookData[] = []

  d.forEach((_d: ObjectMeta) => {
    const date = new Date(_d.lastModified)
    const updateTime = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`

    data.push({
      name: _d.name,
      dir: dir,
      size: _d.size,
      url: _d.url,
      updateTime: updateTime,
    })
  })

  return (
    <div className="w-full flex items-center justify-center">
      <BookTable data={data} />
    </div>
  )
}

export default Books
