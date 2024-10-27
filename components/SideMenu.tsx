'use client'
import { Listbox, ListboxItem } from '@nextui-org/listbox'
import { ListObjectResult } from 'ali-oss'
import { useEffect, useRef } from 'react'

import { ossClient } from '@/utils/Client'
import { FolderDataIcon, HomeIcon } from '@/components/icons'
import { useSideMenu } from '@/components/SideMenuContext'

interface NavItem {
  title: string
  href: string
}

export const SideMenu = () => {
  const { isSideMenuOpen } = useSideMenu()
  const iconClasses =
    'text-xl text-default-500 pointer-events-none flex-shrink-0'

  const navItems: React.Ref<NavItem[]> = useRef<NavItem[]>([
    { title: '主页', href: '/' },
  ])

  useEffect(() => {
    ossClient.listDir('').then((res: ListObjectResult) => {
      const titles: string[] = navItems.current!.map((v: NavItem) => v.title)

      res.prefixes.forEach((prefix: string) => {
        const title = prefix.replace('/', '')

        if (!titles.includes(title)) {
          navItems.current?.push({
            title: title,
            href: `/books/${prefix}`,
          })
        }
      })
    })
  }, [])

  const className = isSideMenuOpen
    ? 'fixed top-16 right-0 bottom-8 bg-primary-600 w-full  max-w-[300px]  border-small px-0 py-0 rounded-small border-default-200 dark:border-default-100 transform transition-transform duration-300 translate-x-0'
    : 'fixed top-16 right-0 bottom-8 bg-primary-600 w-full  max-w-[300px] border-small px-0 py-0 rounded-small border-default-200 dark:border-default-100 transform transition-transform duration-300 translate-x-full'

  return (
    <div className={className}>
      <Listbox aria-label="Actions">
        {navItems.current!.map((v: NavItem, i: number) => {
          if (v.title == '主页') {
            return (
              <ListboxItem
                key={i}
                href={v.href}
                startContent={<HomeIcon className={iconClasses} />}
                title={v.title}
              />
            )
          } else {
            return (
              <ListboxItem
                key={i}
                href={v.href}
                startContent={<FolderDataIcon className={iconClasses} />}
                title={v.title}
              />
            )
          }
        })}
      </Listbox>
    </div>
  )
}
