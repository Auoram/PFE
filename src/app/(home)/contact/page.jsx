import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FOOTER_CONTACT_LINKS } from '../../../../constants'

function contact() {
  return (
    <div>
      <section className="max-container padding-container flex items-center gap-25 py-16 pb-32 md:gap-28 lg:py-28">
      <div className="relative z-20 flex flex-1 flex-col gap-7 xl:mb-28">
            <h1 className="bold-32 text-blue-30 lg:regular-64">Contact Us</h1>
            <p className="lg:regular-20 regular-18 mt-6 text-grey-60 xl:maw-w-[520]">
            If you are experiencing technical issues with our website or app, please contact us at:
            </p>
                    {FOOTER_CONTACT_LINKS.links.map((link) =>(
                      <Link href="/conatct" key={link.label} className="flex gap-4 md:flex-col lg:flex-row">
                        <p className="text-blue-45 regular-18">
                          {link.label}
                        </p>
                        <p className="regular-18 text-grey-60">
                          {link.value}
                        </p>
                      </Link>
                    ))}
        </div>
        <div className="relative flex flex-1 flex-col gap-7">
          <Image src="/undraw_mobile_content_xvgr.svg" alt='contact-img' height={592} width={457}/>
        </div>
      </section>
    </div>
  )
}

export default contact