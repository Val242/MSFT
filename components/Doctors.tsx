import React from 'react'
import DoctorCard from '../ui/DoctorCard'
import mishra from "../images/Mishra.png"
import sandip from "../images/Sandeep.png"
import rajeev from "../images/Rajeev.png"
import ajay from "../images/Ajay.png"
import naresh from "../images/Naresh.png"
import vinad from "../images/Vinad.png"

export default function Doctors() {
  const doctors = [
    {
      image: mishra,
      name: 'Dr Y K Mishra',
      description: 'Cardiac Surgeon',
      city: 'New Delhi',
      country: 'India'
    },
     {
      image: sandip,
      name:'Dr Sandeep Vaishya',
      description: 'Nerurosurgeon',
      city: 'New Delhi',
      country: 'India'
    },
     {
      image: rajeev,
      name:'Dr Sandeep Vaishya',
      description: 'Cardiac Surgeon',
      city: 'New Delhi',
      country: 'India'
    },
     {
      image: ajay,
      name: 'Dr Ajay Koul',
      description: 'Cardiac Surgeon' ,
      city: 'New Delhi',
      country: 'India'
    },
     {
      image: naresh,
      name: 'Dr Naresh Terhan',
      description: 'Cardiac Surgeon',
      city: 'New Delhi',
      country: 'India'
    },
     {
      image: vinad,
      name: 'Dr Vinad Raina',
      description: 'Medical Oncologist',
      city: 'New Delhi',
      country: 'India'
    },
  ]
  return (
    <div className='mt-8 mx-8'>
        <h1 className='text-3xl my-4 font-bold'>
             <span className='text-[#10217D]'>Top Rated</span>
              <span className='text-[#1BA9B5]'> Doctors </span>
               <span className='text-[#10217D]'>Near You</span>
        </h1>
        <div className='flex gap-3'>
         
                {
                  doctors.map((doctor, index)=>(
                    <DoctorCard 
                     image={doctor.image}
                     name={doctor.name}
                     description= {doctor.description} 
                     city= {doctor.city}
                     country={doctor.country}
                     key={index} />
                  ))
                }
        </div>
        <p className='text-[#1BA9B5] my-4 cursor-pointer hover:underline'>View all</p>
    </div>
  )
}
