import React from 'react'
import Image from "next/image"
import bgImage from "../images/mediShop.png"
import vitamins from "../images/vitamins.png"
import nutritionalDrinks from "../images/nutritionalDrinks.png"
import skinCare from "../images/skinCare.png"
import wellness from "../images/wellness.png"
import sexualWellness from "../images/sexualWellness.png"
import Wellness from './Wellness'
import shoppingCart from '../images/shopping-cart.png'
import { ShoppingCart } from 'lucide-react';

export default function MediShop() {
    const mediWell = [
        {
            image: vitamins,
            name: "Vitamins"
        },
        {
            image: nutritionalDrinks,
            name: "Nutritional Drinks"
        },
        {
            image: skinCare,
            name: "Skin Care"
        },
        {
            image: wellness,
            name: "Wellness"
        },
        {
            image: sexualWellness,
            name: "Sexual Wellness"
        }
    ]
  return (
    <div 
     style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}   >
   
      
            <div className="flex items-center justify-center z-10 p-8 ">
        
              <div className="bg-white rounded-[5px] shadow-lg p-8 flex flex-col items-center gap-6 my-8 mx-4">
                      <h1 className='font-bold text-3xl'><span className='text-[#1BA9B5]'>Shop</span> <span className='text-[#10217D]'> for Medicines & Welness</span>  <ShoppingCart size={40} color="#10217D" className='inline-block ' /> </h1>
                      <p className='text-center text-[#B7BCD8] text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum has been the industry's standard <br /> dumbfbfdbdbdbdbdbd</p>
                   <div className="flex gap-4">
                  {
                    mediWell.map((well,index)=>(
                        <Wellness image={well.image} name={well.name} key={index}/>
                    ))
                  }
                </div>
      
              </div>
            </div>
      </div>
  )
}

