import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type ButtonProps={
    type: 'button' |'submit';
    title: string;
    icon?:string;
    variant: string;
    href:string;
}
function Button({type,title,icon,variant,href}: ButtonProps) {
  return (
    <button className={`flexCenter gap-3 border ${variant}`} type={type}>
      {icon && <Image src={icon} alt={title} width={24} height={24}/>}
        <Link href={href}>
          <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
        </Link>
    </button>
  )
}

export default Button