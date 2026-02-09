import React from 'react'
import Image from 'next/image'
import MSFT from "../images/MSFT Pro.png"
import Button from '../ui/Button'
import "./index.css"

export default function NavBar() {
  const navBarText = [
    "Healthcare",
    "Medicines & Health Devices",
    "Services",
    "About"
  ]
  
  return (
    <div>
      <nav className='grid grid-cols-[1fr_3fr_1fr] mt-2 mx-4 md:mx-15 items-center'>
        
       
        <div className='flex justify-start'>
          <Image 
            src={MSFT} 
            alt='Logo' 
            className='w-24 h-7 md:w-30 md:h-7'
          />
        </div>
        
        
        <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center'>
          {navBarText.map((text, index) => (
            <div 
              className='hover:text-[#1BA9B5] text-center sm:text-left hover:underline'
              key={index}
            >
              {text}
            </div>
          ))}
        </div>
        
        
        <div className='flex flex-col sm:flex-row gap-2 justify-end items-center text-center sm:text-right'>
          <p className='text-sm'>Call 671369673</p>
          <Button variant='navigation' size='md'>Consult Online</Button>
        </div>

      </nav>
    </div>
  )
}
