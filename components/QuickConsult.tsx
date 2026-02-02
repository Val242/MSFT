import React from 'react'
import HealthCard from './HealthCard'
import heart from "../images/icons/Heart.png"
import asthma from "../images/icons/asthma.png"
import diabetics from "../images/icons/diabetics.png"
import lungs from "../images/icons/lungs.png"
import oxygen from "../images/icons/oxygen.png"
import prescribe from "../images/icons/prescribe.png"


export default function QuickConsult() {
  return (
    <div className='mt-8 mx-8'>
          <h1 className='text-3xl my-4 font-bold'>
             <span className='text-[#1BA9B5]'>Quick</span>
              <span className='text-[#10217D]'>Consults </span>
               <span className='text-[#10217D]'>For</span>
        </h1>
        <div className='flex flex-col  gap-4 '>
            <div className='flex gap-2'>
                    <HealthCard image={heart} text='Heart' />
                    <HealthCard image={asthma} text='Asthma' />
                    <HealthCard image={lungs} text='Lungs' />
                    <HealthCard image={oxygen} text='Oxygen' />
                    <HealthCard image={diabetics} text='Diabetics' />
                    <HealthCard image={prescribe} text='Prscribe' />

            </div>
            <div className='flex gap-2'>
                    <HealthCard image={oxygen} text='Oxygen' />
                    <HealthCard image={heart} text='Heart' />
                    <HealthCard image={diabetics} text='Diabetics' />
                    <HealthCard image={asthma} text='Asthma' />
                    <HealthCard image={lungs} text='Lungs' />
                    <HealthCard image={heart} text='Heart' />
            </div>

        </div>
    </div>
  )
}

