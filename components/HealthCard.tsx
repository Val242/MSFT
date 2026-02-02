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
   <div className='flex'>
        <button className='rounded-[50px] bg-[#1BA9B5] w-20 h-20'> <img src={image.src} height={image.height} width={image.width} alt={image.alt} className='w-10 mx-auto' /></button>
        <p>{text}</p>
   </div>
  )
}

export default HealthCard