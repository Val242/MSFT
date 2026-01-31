import Image from "next/image"
import bgImage from "../images/bg.png"
import Button from "./Button"
import Needs from "./Needs"

export default function Hero() {
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
            <Needs title="Call Doctor" description="Quick Consult via Call" />
            <Needs title="Book Appointment" description="Long established fact that" />
            <Needs title="Quick Health Checkup" description="Contrary to popular belief" />
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
