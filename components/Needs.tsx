import React from 'react'

interface NeedsProps {
  title: string;
  description: string;
}

export default function Needs({title, description}: NeedsProps) {
  return (
    <div className='mx-4'>
      <h2 className='text-[#10217D]'>{title}</h2> 
       <p className='text-gray-400'>{description}</p> 
    </div>
  )
}
