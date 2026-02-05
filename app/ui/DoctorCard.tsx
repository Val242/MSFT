import React from 'react'
import Image from "next/image"
import Button from './Button';

interface DoctorsProp{
     image: {
    src: string
    height: number
    width: number
    alt?: string
  };
    name: string;
    description: string;
    location: string
}

export default function DoctorCard({
    image,
    name,
    description,
    location
}: DoctorsProp) {
  return (
    <div className='flex flex-col border border-gray-300 rounded-lg'>
        <Image
              src={image.src}
              width={image.width}
              height={image.height} alt={''}
              className='w-full h-full px-1'
        ></Image>
        <p className='text-[#10217D]'>{name}</p>
        <p className='text-gray-400'>{description}</p>
        <p className='text-gray-400'>{location}</p>
        <Button variant='book' size='lg' className=''>Consult now</Button>

    </div>
  )
}

