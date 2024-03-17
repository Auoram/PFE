import Image from "next/image"
import Link from "next/link"
import styles from './Navbar.module.css'
import { NAV_LINKS } from "../../../constants"
import Button from "../Button/Button"

function Navbar() {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/logo-img.png" alt="logo" width={124} height={44}/>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link)=>(
            <Link href={link.href} key={link.key} className="regular-16 text-gray-500 cursor-pointer pb-1.5 transition-all hover:font-bold">
              {link.label}
            </Link>
          ))}
      </ul>
      <div className="lg:flexCenter hidden" >
     
      </div>
    </nav>
  )
}

export default Navbar
