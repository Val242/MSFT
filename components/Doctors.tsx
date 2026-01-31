import React from 'react'
import DoctorCard from './DoctorCard'
import mishra from "../images/Mishra.png"
import sandip from "../images/Sandeep.png"
import rajeev from "../images/Rajeev.png"
import ajay from "../images/Ajay.png"
import naresh from "../images/Naresh.png"
import vinad from "../images/Vinad.png"

export default function Doctors() {
  return (
    <div className='mt-8 mx-8'>
        <h1 className='text-3xl my-4 font-bold'>
             <span className='text-[#10217D]'>Top Rated</span>
              <span className='text-[#1BA9B5]'> Doctors </span>
               <span className='text-[#10217D]'>Near You</span>
        </h1>
        <div className='flex gap-3'>
                <DoctorCard  image={mishra} name='Dr Y K Mishra' description='Cardiac Surgeon' location='New Delhi, India'/>
                <DoctorCard  image={sandip} name='Dr Sandeep Vaishya' description='Neurosurgeon' location='Gurgaon, India'/>
                <DoctorCard  image={rajeev} name='Dr Rajeev Verma' description='Cardiac Surgeon' location='New Delhi India'/>
                <DoctorCard  image={ajay} name='Dr Ajay Koul' description='Cardiac Surgeon' location='New Delhi India'/>
                <DoctorCard  image={naresh} name='Dr Naresh Terhan' description='Cardiac Surgeon' location='Gurgaon India'/>
                <DoctorCard  image={vinad} name='Dr Vinad Raina' description='Medical Oncologist,' location='Gurgaon India'/>
        </div>
    </div>
  )
}
