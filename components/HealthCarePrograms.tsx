import ProgramCard from '@/ui/ProgramCard'
import React from 'react'
import medicine from "../images/icons/012-medicine.png"
import heart from "../images/icons/017-heart.png"
import syringe from "../images/icons/005-syringe.png"

export default function HealthCarePrograms() {
  const healthPrograms =[
    {
      image: medicine,
      title: "Complete Nutrition",
      description:`The exact cause of most types of diabetes is unknown.
       In all cases, sugar builds up in the bloodstream. 
       This is because the pancreas doesn't
        produce enough insulin. Both type 1 and type 2 diabetes may be caused by
         a combination of genetic or environmental factors.`,
      price: 999
    },
    {
      image: heart,
      title:"Health Care",
      description:`The exact cause of most types of diabetes is unknown. 
      In all cases, sugar builds up in the bloodstream. 
      This is because the pancreas doesn't produce enough insulin. 
      Both type 1 and type 2 diabetes may be caused by a combination of genetic or environmental factors.`,
      price: 999
    },
    {
      image: syringe,
      title: "Diabetics Care",
      description: `The exact cause of most types of diabetes is unknown. 
      In all cases, sugar builds up in the bloodstream. 
      This is because the pancreas doesn't produce enough insulin. 
      Both type 1 and type 2 diabetes may be caused by a combination of genetic or environmental factors.`,
      price: 999
    },
  ]
  return (
    <div className='ml-8'>
      <div className='flex justify-between mx-4 pt-10 pb-4'>
        <h1 className='font-bold text-3xl'> 
            <span className='text-[#1BA9B5]'>Healthcare </span>
            <span className='text-[#10217D]'>Programs</span>
        </h1>
        <p className='text-center text-[#B7BCD8] text-sm'>
          Healthcare helps people maintain good health and prevent illness <br />. 
          Regular check-ups, vaccinations, and screenings can catch health <br />
           issues early and prevent them from becoming more serious.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mr-2'>
       {
        healthPrograms.map((healthProgram, index)=>(
            <ProgramCard
            image={healthProgram.image}
            title={healthProgram.title}
            description={healthProgram.description}
            price={healthProgram.price}
            key={index}
            />
        ))
       }
      </div>
           <p className='text-[#1BA9B5] my-4 cursor-pointer hover:underline'>View all</p>
    </div>
  )
}

