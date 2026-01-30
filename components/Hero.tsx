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

      <div className="relative z-10 text-white">
        Hello World
      </div>
    </div>
  )
}
