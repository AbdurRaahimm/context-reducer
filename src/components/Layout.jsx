import React from 'react'
import Navber from '@/components/Navber'
import Footer from '@/components/Footer'

export default function Layout({children}) {
  return (
    <>
      <Navber />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
