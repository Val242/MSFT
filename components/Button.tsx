import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "navigation" | "cta1" | "cta2" | "book"
  size?: "sm" | "md" | "lg" | "icon";
};


export default function Button({
  children,
  variant = "navigation",
  size = "md",
  className = "",
  ...props
}: ButtonProps & { children: React.ReactNode }) {
  const varianStyles: Record<string,string> = {
    navigation:
    "bg-[#10217D] text-white border text-sm rounded-2xl "
  }

  const sizeStyles: Record<string,string> = {
      md:"w-41 h-11 rounded-2xl"
 }
  
   return (
   <button className={`${varianStyles} ${sizeStyles} ${className} `}>
    {children}
   </button>
)
}
 