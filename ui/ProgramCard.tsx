import React from 'react'

interface ProgramsProp{
  image: {
    src: string
    height: number
    width: number
    alt?: string
  };
  title: string;
  text: string;
  price: number;
}

export default function ProgramCard({image,title,text,price}:ProgramsProp) {
  return (
    <div>

    </div>
  )
}
