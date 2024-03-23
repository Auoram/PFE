import Image from 'next/image';
import React from 'react'
type ButtonProps={
    type: 'button' |'submit';
    title: string;
    icon?:string;
    variant: 'btn_dark_green' | 'btn_dark_blue';
}
function Button({type,title,icon,variant}: ButtonProps) {
  return (
    <button className={`flexCenter gap-3 border ${variant}`} type={type}>
        <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button