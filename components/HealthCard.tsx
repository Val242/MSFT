import React from 'react'
interface HealthProp{
   image: {
    src: string
    height: number
    width: number
    alt?: string
  };
  text: string
}

function HealthCard({image, text}:HealthProp) {
  return (
    
   <div className='flex bg-[#D8EFF1] w-70 h-30 rounded-[10px] place-content-center justify-center gap-3'>
        <button className='rounded-[50px] bg-[#1BA9B5] w-15 h-15 my-auto '> <img src={image.src} height={image.height} width={image.width} alt={image.alt} className='w-10 mx-auto' /></button>
        <p className='my-auto text-[#527C88]'>{text}</p>
   </div>
  )
}

export default HealthCard