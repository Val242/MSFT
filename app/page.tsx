import Doctors from '@/components/Doctors'
import Feedback from '@/components/Feedback'
import Footer from '@/components/Footer'
import HealthCarePrograms from '@/components/HealthCarePrograms'
import Hero from '@/components/Hero'
import MediShop from '@/components/MediShop'
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
      <MediShop/>
      <HealthCarePrograms/>
      <Feedback/>
      <Footer/>
    </div>
  )
}

export default page