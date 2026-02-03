import React from 'react'
import Image from "next/image"

interface WellnessProps{
      image: {
    src: string
    height: number
    width: number
    alt?: string
  };
    name: string;
}

export default function Wellness({image, name}: WellnessProps) {
  return (
     <div className='flex flex-col border border-gray-300 rounded-lg gap-4'>
           <Image
                 src={image.src}
                 width={image.width}
                 height={image.height} alt={''}
                 className='w-full h-full  rounded-sm'
           ></Image>

           <p className='text-center text-[#527C88] font-bold'>{name}</p>
    </div>
  )
}
