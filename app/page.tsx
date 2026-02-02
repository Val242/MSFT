import Doctors from '@/components/Doctors'
import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import QuickConsult from '@/components/QuickConsult'
import React from 'react'

function page() {
  return (
    <div >
      
      <NavBar />
      <Hero />
      <Doctors />
      <QuickConsult />

    </div>
  )
}

export default page