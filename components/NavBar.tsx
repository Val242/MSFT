import React from 'react'
import Image from 'next/image'
import MSFT from "../images/MSFT Pro.png"
import Button from './Button'

export default function NavBar() {
  return (
    <div>
        <nav className='grid grid-cols-[1fr_3fr_1fr] mt-2 mx-4'>
            <Image src={MSFT} alt={'Logo'} className='w-30 h-7'/>
           
         <div className='flex gap-2 mx-auto'>
              <div>Healthcare</div>
              <div>Medicines & Health Devices </div>
              <div> Services</div>
              <div>About</div>
         </div>
            <div className='flex gap-2'>
              <p>Call 671369673 or </p>  
                <Button> Consult Online</Button>
            </div>

        </nav>


    </div>
  )
}
