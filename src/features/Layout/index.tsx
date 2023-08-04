import React from 'react'
import Header from 'common/components/Header'
import SidebarMenu from '../SidebarMenu'
import Footer from 'common/components/Footer'
import DirectionalButton from 'common/components/DirectionalButton'
import ZoomButton from 'common/components/ZoomButton'

interface LayoutProps {
  children: React.ReactElement
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 ">
        <SidebarMenu />
        <main className="flex-1 p-4 bg-gray-100">{children}</main>
      </div>
      <Footer>
        <>
          <ZoomButton />
          <DirectionalButton />
        </>
      </Footer>
    </div>
  )
}

export default Layout
