'use client'
import {
  Table,
  TableColumn,
  TableHeader,
  TableBody,
  TableCell,
  TableRow,
} from '@nextui-org/table'
import React from 'react'
import { Link } from '@nextui-org/link'
import { Eye, FileDownload } from 'solar-icon-set'

import { BookData } from '@/types'
import { bToMb } from '@/utils/utils'

export const BookTable = ({ data }: { data: BookData[] }) => {
  const columns = [
    { key: 'name', label: 'NAME' },
    { key: 'size', label: 'SIZE' },
    { key: 'updateTime', label: 'UPDATE TIME' },
    { key: 'actions', label: 'ACTIONS' },
  ]
  const realData: BookData[] = []

  data.forEach((d: BookData) => {
    const n = d.name.split('/')
    const name = n[n.length - 1]

    if (name !== '') {
      realData.push({
        name,
        dir: d.dir,
        size: bToMb(d.size as number),
        url: d.url,
        updateTime: d.updateTime,
      })
    }
  })

  return (
    <Table
      aria-label="Book Table"
      className="w-3/4"
      color="secondary"
      selectionMode="single"
    >
      <TableHeader>
        {columns.map((column) => (
          <TableColumn key={column.key}>{column.label}</TableColumn>
        ))}
      </TableHeader>
      <TableBody emptyContent="暂时没有资源哦~">
        {realData.map((item: BookData, index: number) => (
          <TableRow key={index}>
            {columns.map((columnKey) => {
              if (columnKey.key === 'name') {
                return <TableCell key={columnKey.key}>{item.name}</TableCell>
              } else if (columnKey.key === 'size') {
                return <TableCell key={columnKey.key}>{item.size}</TableCell>
              } else if (columnKey.key === 'updateTime') {
                return (
                  <TableCell key={columnKey.key}>{item.updateTime}</TableCell>
                )
              } else {
                return (
                  <TableCell key={columnKey.key}>
                    <div className="relative flex justify-start items-center gap-2">
                      <Link
                        showAnchorIcon
                        anchorIcon={<Eye size={24} />}
                        href={`/books/${item.dir}/${item.name}`}
                      />
                      <Link
                        isExternal
                        showAnchorIcon
                        anchorIcon={<FileDownload size={24} />}
                        href={item.url}
                      />
                    </div>
                  </TableCell>
                )
              }
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
