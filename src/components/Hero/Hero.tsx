import React from 'react'
import Button from '../Button/Button'
import Image from 'next/image'

function Hero() {
  return (
    <section className="max-container padding-container flex items-center gap-25 py-16 pb-32 md:gap-28 lg:py-28">
        <div className="relative z-20 flex flex-1 flex-col gap-7 xl:-1/2">
            <h1 className="bold-40 text-blue-60 lg:bold-64">Build Your child's Immunity System</h1>
            <p className="regular-16 mt-6 text-grey-60 xl:maw-w-[520]">
              Your trusted vaccination companion, KidVax is here to help you manage your child's vaccination effortlessly.
            </p>
            <div className="border-none sm:flex-row">
              <Button type={'button'} title={'How it works >'} variant={'btn_gray'} href={'/howitworks'} />
            </div>
          
        </div>
        <div className="relative flex flex-1 flex-col gap-7">
          <Image src="/child-visiting-the-pediatrician.png" alt='hero-img' height={592} width={457}/>
        </div>
    </section>
  )
}

export default Hero