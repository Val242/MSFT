import React from 'react'
import Image from 'next/image'
import MSFT from "../images/MSFT Pro.png"
import FooterNavigations from '@/ui/FooterNavigations'
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';

export default function Footer() {
    const footerNavs = [
        {
            title:"Overview",
            p1:"Medecines",
            p2:"Healthcare Devices",
            p3:"Health Progress"
        },
        {
            title:"Company",
            p1:"Home",
            p2:"About us",
            p3:"Services"
        },
        {
            title:"Explore",
            p1:"Medecines",
            p2:"Privacy Policy",
            p3:"Cookies"
        },
    ]
  return (
    <div>
    <div className='grid grid-cols-2 m-8 border pb-4 border-b-gray-200 border-t-transparent border-r-transparent border-l-transparent'>
        <div>
             <Image src={MSFT} alt={'Logo'} className='w-30 h-7 place-items-center'/>
             <p className='mt-2 pt-2'>
                Health care refers to the efforts that medical professionals make <br />
                to restore our physical and mental well-being. The term also <br />
                includes the provision of services to maintain emotional well- <br /> 
                being. We call people and organizations that provide these <br />
                services 'health-care providers.
            </p>
        </div>

        <div className='flex gap-10'>
               
                {
                    footerNavs.map((footerNav, index)=>(
                        <FooterNavigations 
                                title={footerNav.title}
                                p1={footerNav.p1}
                                p2={footerNav.p2}
                                p3={footerNav.p3}
                                key={index}
                        />
                    ))
                }
                <nav>
                    <h2 className='text-2xl mb-2 text-[#1BA9B5] '>Social Media</h2>
                    <nav className='flex gap-4'>
                    <Facebook />
                    <Instagram />
                    <Twitter/>
                    </nav>
                </nav>
        </div>

    </div>
    <p className='text-center text-gray-500'>Copyright @ MSFT Pro {new Date().getFullYear()}</p>
    </div>
  )
}

