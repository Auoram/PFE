import React from 'react'
import Button from '../Button/Button'
import Image from 'next/image'

function Hero() {
  return (
    <section className="padding-container relative bg-bg bg-no-repeat bg-cover bg-center flex items-center gap-25 py-16 pb-32 md:gap-28" style={{ minHeight: `calc(100vh - 97px)` }}>
    <div className="absolute inset-0 bg-black bg-opacity-65"></div>
        <div className="relative z-20 flex flex-1 flex-col gap-7 xl:-1/2">
            <h1 className="bold-42 lg:bold-66"><span className="bg-gradient-to-r from-blue-45 to-blue-25 text-transparent bg-clip-text">Build Your child's Immunity System</span></h1>
            <p className="regular-20 mt-6 text-grey-40 xl:maw-w-[520]">
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