import React from 'react'

type Variant = "navigation" | "cta1" | "cta2" | "book";
type Size = "sm" | "md" | "lg" | "icon";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};


export default function Button({
  children,
  variant = "navigation",
  size = "md",
  className = "",
  ...props
}: ButtonProps & { children: React.ReactNode }) {
  const variantStyles: Record<Variant,string> = {
    //An object where every key is of type K and every value is of type V
      navigation: "bg-[#10217D] text-white border text-sm rounded-2xl",
      cta1: "bg-[#1BA9B5] text-white ",
      cta2: "border border-gray-400",
      book: "bg-black text-white rounded-full"

  }

  const sizeStyles: Record<Size,string> = {
      sm: "h-8 px-3 text-sm",
      md: "h-11 px-4 text-base  w-41 h-11",
      lg: "h-14 px-6 text-lg  w-56 h-5 rounded-[10px] ",
      icon: "h-10 w-10 flex items-center justify-center"
 }
  
   return (
   <button className={`${variantStyles[variant]} ${sizeStyles[size]} ${className} `}>
    {children}
   </button>
)
}
 