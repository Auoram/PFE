import Image from 'next/image';
import React from 'react'
type ButtonProps={
    type: 'button' |'submit';
    title: string;
    icon?:string;
    variant: 'btn_dark_green'
}
function Button({type,title,icon,variant}: ButtonProps) {
  return (
    <button type={type}>
        <label>{title}</label>
    </button>
  )
}

export default Button