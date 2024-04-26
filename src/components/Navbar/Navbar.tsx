import React from "react"
import Image from "next/image"
import Link from "next/link"
import { NAV_LINKS } from "../../../constants"
import Button from "../Button/Button"
import Menu from "../Menu/Menu"

function Navbar() {
  return (
    <div className="flexBetween relative bg-gradient-to-r from-blue-90 via-blue-120 to-blue-110 padding-container  z-30 py-5">
      <Link href="/">
        <Image src="/whiteLogo.png" alt="logo" width={130} height={60}/>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link)=>(
            <Link href={link.href} key={link.key} className="regular-20 text-white cursor-pointer pb-1 px-8 transition-all hover:font-bold">
              {link.label}
            </Link>
          ))}
      </ul>
      <div className="hidden gap-7 cursor-pointer lg:flexCenter " >
      <Button 
        type="button"
        title="Sign Up"
        variant="btn_dark_blue"
        href={'/signup'}
        />
        <Button 
        type="button"
        title="Log In"
        variant="btn_dark_blue"
        href={'/login'}
        />
      </div>
      <div className="lg:hidden cursor-pointer">
        <Menu />
      </div>
    </div>
  )
}

export default Navbar
