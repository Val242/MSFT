import Image from "next/image"
import bgImage from "../images/bg.png"
import Button from "./Button"
import Needs from "./Needs"

export default function Hero() {
  const needs = [
    {
      title: 'Call Doctor',
      description: 'Quick consult via call'
    },
      {
      title: 'Book Appointment',
      description: 'Long established fact that'
    },
      {
      title: 'Quick Health checkup',
      description: 'Contrary to popular belief'
    }
  ]
  return (
    <div className="relative min-h-screen w-full">
    
      <Image
        src={bgImage}
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 flex items-center justify-center z-10 p-8">
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center gap-6">
       
          <div className="flex">
            {
              needs.map((need,index)=>(
                  <Needs title={need.title} description={need.description} key={index}/>
              ))
            }
          </div>

       
          <div className="flex">
            <Button variant="cta2" size="lg">I need a call for</Button>
            <Button variant="cta1" size="lg">Select the Reason</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
