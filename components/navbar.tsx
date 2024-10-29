'use client'
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
} from '@nextui-org/navbar'
import { Button } from '@nextui-org/button'
import { useRouter } from 'next/navigation'

import { BoooksLogo, MenuIcon } from '@/components/icons'
import { useSideMenu } from '@/components/drawer-context'
import { SearchInput } from '@/components/search-input'

export const Navbar = () => {
  const { toggleSideMenu } = useSideMenu()
  const router = useRouter()

  return (
    <NextUINavbar isBordered className="bg-primary-400 z-50" maxWidth="full">
      <NavbarBrand>
        <BoooksLogo onClick={() => router.push('/')} />
      </NavbarBrand>
      <NavbarContent justify="center">
        <SearchInput />
      </NavbarContent>
      <NavbarContent justify="end">
        {/*<ThemeSwitch />*/}
        <Button
          isIconOnly
          color="secondary"
          variant="light"
          onClick={toggleSideMenu}
        >
          <MenuIcon />
        </Button>
      </NavbarContent>
    </NextUINavbar>
  )
}
