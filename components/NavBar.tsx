import React from 'react'
import Image from 'next/image'
import MSFT from "../images/MSFT Pro.png"
import Button from './Button'
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
        <nav className='grid grid-cols-[1fr_3fr_1fr] mt-2 mx-15  '>
            <Image src={MSFT} alt={'Logo'} className='w-30 h-7 place-items-center'/>
           
         <div className='flex gap-2 mx-auto items-center '>
             
              {
                      navBarText.map((text, index)=>(
                        <div className='hover:text-[#1BA9B5]'  key={index}>
                          {text}
                          </div>
                      ))
                    }</div>
         
            <div className='flex gap-2'>
              <p className='place-items-center'>Call 671369673 </p>  
                     
                <Button variant='navigation' size='md' className=''> Consult Online</Button>
            </div>

        </nav>


    </div>
  )
}
