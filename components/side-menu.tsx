'use client'
import { Listbox, ListboxItem } from '@nextui-org/listbox'
import { ListObjectResult } from 'ali-oss'
import { useEffect, useRef } from 'react'
import { Link } from '@nextui-org/link'
import { MailFilledIcon } from '@nextui-org/shared-icons'
import { Spacer } from '@nextui-org/spacer'

import { ossClient } from '@/utils/Client'
import {
  FolderDataIcon,
  GithubIcon,
  HeartFilledIcon,
  HomeIcon,
} from '@/components/icons'
import { useSideMenu } from '@/components/side-menu-context'
import { siteConfig } from '@/config/site'

interface NavItem {
  title: string
  href: string
}

export const SideMenu = () => {
  const { isSideMenuOpen, toggleSideMenu } = useSideMenu()
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

  return (
    <>
      {isSideMenuOpen ? (
        <div
          aria-label="overlay"
          className="fixed inset-0 bg-black bg-opacity-50 z-40 cursor-default"
          role="button"
          tabIndex={0}
          onClick={toggleSideMenu}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              toggleSideMenu()
            }
          }}
        />
      ) : null}
      <div
        className={`fixed top-16 right-0 z-40 bottom-8 bg-primary-600 w-full  max-w-[300px]  border-small px-0 py-0 rounded-l-xl border-default-200 dark:border-default-100 transform transition-transform duration-300 ${isSideMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          <Listbox aria-label="Actions" className="flex-grow">
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
          <div className="flex items-center justify-center py-4">
            <Link href={siteConfig.links.github}>
              <GithubIcon />
            </Link>
            <Spacer />
            <Link href={siteConfig.links.mail}>
              <MailFilledIcon fontSize={24} />
            </Link>
            <Spacer />
            <Link href={siteConfig.links.sponsor}>
              <HeartFilledIcon />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
