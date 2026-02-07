import React from 'react'
import Image from 'next/image'
import patient from '../images/patient.png'

export default function Feedback() {
  return (
    <div>
         <h1 className='font-bold text-3xl'> 
           <span className='text-[#10217D]'>Our </span> 
           <span className='text-[#1BA9B5]'>patients </span> 
           <span className='text-[#10217D]'>feedback about us </span> 
        </h1>
    <div className='bg-[#ECEEF9]'>
       
        <div className='grid grid-cols-2'>
          <div className='rounded-lg'>
            <Image
           src={patient}
            alt={''}
              className='w-[60%] h-full px-1  m-auto rounded-[10px]'
            /></div>
            <p className='m-auto text-2xl'>
                “MSFT Pro is an website and mobile app <br />
                 for you to feel better or get medical help. <br />
                 They offer you a 24/7 doctor service with <br />
                 Medicine Purchasing Facility” 
            </p>

        </div>
    </div>
           <div className='flex'>
            <div className='w-1/2 ml-auto text-right pr-4'>
                <p>Anjali Sharma</p>
                <p className='text-gray-400'>MSFT Pro Customer</p>
            </div>
</div>
 <p className='text-[#1BA9B5] my-4 cursor-pointer hover:underline ml-8'>View all</p>


    </div>
  )
}

