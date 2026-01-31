import Image from "next/image"
import bgImage from "../images/bg.png"

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

      <div className="relative z-10 bg-white grid-row-[1fr_2fr] ">
        <div className="flex">
              
        </div>
    <div>
        <button className="border-black">
        I need to call for
        </button>
        <button className="bg-[#1BA9B5]">
            Select the Reason
        </button>
    </div>
    
      </div>
    </div>
  )
}
