import React from 'react'
import HealthCard from '../ui/HealthCard'
import heart from "../images/icons/Heart.png"
import asthma from "../images/icons/asthma.png"
import diabetics from "../images/icons/diabetics.png"
import lungs from "../images/icons/lungs.png"
import oxygen from "../images/icons/oxygen.png"
import prescribe from "../images/icons/prescribe.png"
import MediShop from './MediShop'


export default function QuickConsult() {
  const healthCardsOne =[
      {
          image: heart,
          text: 'Heart'
      },
      {
          image: asthma,
          text: 'Lungs'
      },
      {
          image: lungs,
          text: 'Lungs'
      },
      {
          image: oxygen,
          text: 'Oxygen'
      },
      {
          image: diabetics,
          text: 'Diabetics'
      },
      {
          image: prescribe,
          text: 'Prescribe'
      }
  ]
   const healthCardsTwo =[
      {
          image: oxygen,
          text: 'Oxygen'
      },
      {
          image: prescribe,
          text: 'Prescribe'
      },
      {
          image: diabetics,
          text: 'Diabetics'
      },
      {
          image: asthma,
          text: 'Asthma'
      },
      {
          image: lungs,
          text: 'lungs'
      },
      {
          image: heart,
          text: 'Heart'
      }
  ]
  return (
    <div className='m-8 '>
          <h1 className='text-3xl my-4 font-bold'>
             <span className='text-[#1BA9B5]'>Quick</span>
             <span className='text-[#10217D]'>Consults </span>
            <span className='text-[#10217D]'>For</span>
          </h1>
        <div className='flex flex-col  gap-4 '>
            <div className='flex gap-4'>
                    {
                      healthCardsOne.map((card, index)=>(
                        <HealthCard 
                            image={card.image}
                            text={card.text} 
                            key={index} />
                      ))
                    }

            </div>
            <div className='flex gap-4'>
                     {
                      healthCardsTwo.map((card, index)=>(
                        <HealthCard
                         image={card.image}
                         text={card.text}
                         key={index} />
                      ))
                    }
            </div>

        </div>
     <p className='text-[#1BA9B5] my-4 cursor-pointer hover:underline'>View all</p>
       
    </div>
  )
}

