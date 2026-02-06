import React from 'react'
import Image from 'next/image'
import Button from './Button';
interface ProgramsProp{
  image: {
    src: string
    height: number
    width: number
    alt?: string
  };
  title: string;
  description: string;
  price: number;
}

export default function ProgramCard({image,title,description,price}:ProgramsProp) {
  return (
       <div className='flex flex-col border border-gray-300 rounded-[10px] py-4 px-2'>
          <button className='rounded-[50px] w-15 h-15 my-auto bg-[#EAF2FD] '> 
            <img src={image.src}
             height={image.height} 
             width={image.width}
             alt={image.alt} 
             className='w-10 mx-auto' />
             </button>
           <h2 className='text-black mt-4 mb-2'>{title}</h2>
           <p className='text-gray-400 mb-2 text-sm'>{description}</p>
                
                <div className='flex justify-between'>
                    <p className='text-[#1BA9B5]'>₹{price}/-</p>
                    <Button variant='book' size='sm'> Book now</Button>
                </div>
          
             
       </div>
  )
}
