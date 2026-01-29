import React from 'react'


export default function Button({children}: {children: React.ReactNode}) {
  return (
   <button className='bg-[#10217D] text-white border text-sm rounded-2xl w-41 h-11'>
    {children}
   </button>
  )
}
 