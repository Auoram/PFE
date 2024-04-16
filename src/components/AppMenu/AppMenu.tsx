'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { MENU_LINKS } from '../../../constants'
import Button from '../Button/Button'

function AppMenu() {
    const [open, setOpen] = useState(false);
    const handleLinkClick = () => {
        setOpen(false);
    };
  return (
    <div className="bg-blue-80 flexBetween padding-container relative z-20 py-4">
      <Link href="/">
        <Image src="/whiteLogo.png" alt="logo" width={130} height={60}/>
      </Link>
      <div>
        {!open ? (<Image src="/menu-white.svg" alt='menu' width={32} height={32} className="hover:cursor-pointer" onClick={()=>setOpen(true)} /> 
        ) : (
        <Image src="/closeWhite.svg" alt='close' width={32} height={32} className="hover:cursor-pointer" onClick={()=> setOpen(false)} />
        ) }
        {open && ( 
        <div className="bg-blue-80 text-white absolute right-0 top-16 lg:w-1/3 w-auto h-[calc(100vh-4rem)] flex flex-col gap-9 items-center justify-center text-3xl p-5">
        {MENU_LINKS.map((link)=>(
            <Link href={link.href} key={link.key} className="hover:text-blue-20" onClick={handleLinkClick}>
              {link.label}
            </Link>
          ))} 
          <Button type="button" title="Settings" variant="btn_no_background" icon="/settings.svg" href='/'/>
          <Button type="button" title="Check an other kid" variant="btn_no_background" icon="/settings.svg" href='/'/>
          <Button type="button" title="Log Out" variant="btn_white" href='/' />  
        </div>
        )}
    </div>
    </div>
  )
}

export default AppMenu