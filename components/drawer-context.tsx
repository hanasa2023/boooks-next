'use client'
import React, { createContext, useContext, useState } from 'react'

interface SideMenuContextProps {
  isSideMenuOpen: boolean
  toggleSideMenu: () => void
}

const Drawer = createContext<SideMenuContextProps | null>(null)

export const SideMenuProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false)

  const toggleSideMenu = () => {
    setIsSideMenuOpen((prevState: boolean) => !prevState)
  }

  return (
    <Drawer.Provider value={{ isSideMenuOpen, toggleSideMenu }}>
      {children}
    </Drawer.Provider>
  )
}

export const useSideMenu = () => {
  const context = useContext(Drawer)

  if (context === null) {
    throw new Error('useSideMenu must be used within a SideMenuProvider')
  }

  return context
}
