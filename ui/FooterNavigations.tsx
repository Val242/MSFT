import React from 'react'
interface FooterNavs{
  title: string
  p1: string
  p2: string
  p3: string
}

export default function FooterNavigations({title,p1,p2,p3}: FooterNavs) {
  return (
                <nav>
                    <h2 className='text-2xl mb-2 text-[#1BA9B5] '>{title}</h2>
                        <ul className='list-none'>
                            <li>{p1}</li>
                            <li>{p2}</li>
                            <li>{p3}</li>
                        </ul>
                </nav>
  )
}

