import { Link } from '@nextui-org/link'
import { Divider } from '@nextui-org/divider'

import { Navbar } from '@/components/navbar'
import { Drawer } from '@/components/drawer'
import { SideMenuProvider } from '@/components/drawer-context'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative flex flex-col h-screen bg-dark-bg bg-cover">
        <SideMenuProvider>
          <Navbar />
          <div className="flex flex-grow relative">
            <main className="w-full">{children}</main>
            <Drawer />
          </div>
        </SideMenuProvider>
        <footer className="w-full z-50 flex flex-row items-center justify-center py-1 bg-primary-300">
          <Link
            isExternal
            className="flex items-center gap-1 text-current"
            href="https://beian.miit.gov.cn/"
            title="ICP"
          >
            <p className="text-primary">赣ICP备2023015459号 </p>
          </Link>
          <Divider className="mx-2" orientation="vertical" />
          <Link className="flex items-center gap-1 text-current" href="/">
            <span className="text-primary">
              &copy; {new Date().getFullYear()} hanasaki. All rights reserved.
            </span>
          </Link>
        </footer>
      </div>
    </>
  )
}
