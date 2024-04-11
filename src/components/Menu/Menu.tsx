"use client";

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { NAV_LINKS } from '../../../constants'
import Button from '../Button/Button'

function Menu() {
    const [open, setOpen] = useState(false);
    const handleLinkClick = () => {
        setOpen(false);
    };
  return (
    <div>
        {!open ? (<Image src="/menu.svg" alt='menu' width={32} height={32} onClick={()=>setOpen(true)} /> 
        ) : (
        <Image src="/close.svg" alt='close' width={32} height={32} onClick={()=> setOpen(false)} />
        ) }
        {open && ( 
        <div className="bg-blue-20 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-9 items-center justify-center text-3xl">
        {NAV_LINKS.map((link)=>(
            <Link href={link.href} key={link.key} onClick={handleLinkClick}>
              {link.label}
            </Link>
          ))}
        <Button type="button" title="Sign In" variant="btn_white_text" href='/signin'/>
        <Button type="button"title="Log In" variant="btn_white_text" href='/login' />  
        </div>
        )}
    </div>
  )
}

export default Menu
