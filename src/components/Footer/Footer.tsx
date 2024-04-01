import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FOOTER_CONTACT_LINKS, FOOTER_LINKS, SOCIALS } from '../../../constants'

function Footer() {
  return (
    <footer className="flexCenter bg-blue-10 p-8">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row" >
          <Link href="/" className="mb-10">
            <Image src="/logo-img.png" alt="logo" width={124} height={44}/>
          </Link>
          <div className="flex flex-wrap gap-10 text-blue-20 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) =>(
              <FooterColumns title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-400">
                  {columns.links.map((link)=>(
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumns>
            ))}
            <div className="flex flex-col gap-5">
                <FooterColumns title={FOOTER_CONTACT_LINKS.title}>
                    {FOOTER_CONTACT_LINKS.links.map((link) =>(
                      <Link href="/" key={link.label} className="flex gap-4 md:flex-col lg:flex-row">
                        <p className="whitespace-nowrap">
                          {link.label} :
                        </p>
                        <p className="medium-14 whitespace-nowrap text-gray-400">
                          {link.value}
                        </p>
                      </Link>
                    ))}
                </FooterColumns>
            </div>
            <div className="flex flex-col gap-5">
              <FooterColumns title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-400">
                  {SOCIALS.links.map((link) => (
                    <Link href="/" key={link}>
                      <Image src={link} alt='logo' width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumns>
            </div>
          </div>
        </div>
        <div className="border bg-blue-30" />
        <p className="regular-14 w-full text-center text-gray-400">2024 KidVax | Privacy Statement</p>
      </div>
      
    </footer>
  )
}
type FooterColumnsProps = {
  title : string;
  children : React.ReactNode;
}
const FooterColumns = ({title, children} : FooterColumnsProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap" >{title}</h4>
      {children}
    </div>
  )
}

export default Footer