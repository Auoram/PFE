import React from 'react'
import Image from 'next/image'

function about() {
  return (
    <div>
    <section className="max-container padding-container flex items-center gap-25 py-16 pb-32 md:gap-28 lg:py-28">
        <div className="relative z-20 flex flex-1 flex-col gap-7 xl:mb-28">
            <h1 className="bold-32 text-blue-60 lg:bold-52">The purpose of <span className="text-blue-40">KidVax</span></h1>
            <p className="regular-16 mt-6 xl:text-center text-grey-60 xl:maw-w-[520]">
              Here is the reason we created KidVax.And its Features which helps the user's experience in this kind of application or websites.
            </p>
        </div>
        <div className="relative flex flex-1 flex-col gap-7">
          <Image src="/computer.png" alt='about-img' height={592} width={457}/>
        </div>
    </section>
    <section className="bg-blue-10 text-center mx-auto my-auto px-4 sm:py-12  lg:px-8 pb-32 lg:py-16">
        <h1 className="regular-32 text-green-30 mb-20">About Us</h1>
        <p className="flex justify-center items-center mt-7 mb-20 text-blue-20">Introduce the developer or the team behind creating the Children's vaccination management website.</p>
    </section>
    <section className=" grid mx-auto my-auto px-4 justify-center gap-y-20 sm:py-12 lg:px-8 pb-32 lg:py-16">
    <h1 className="text-center regular-32 text-green-30 mb-18">Our Objectives</h1>
      <div className="gap-x-7 flex items-center">
      <div className="border-2 border-grey-40 py-8 pl-8 pr-48 flex flex-1 flex-col gap-7">
        <h2 className=" regular-32 text-blue-60">The first objective</h2>
        <p className="regular-16 text-grey-60">The description of the objective</p>
      </div>
      <div className="flex flex-1 flex-col">
      <Image src="/bg-babyMom.jpg" alt='about-obj1-img' height={50} width={300}/>
      </div>
      </div>
      <div className="gap-x-4 flex items-center flex-row-reverse ">
      <div className="border-2 border-grey-40 py-8 pl-8 pr-48 flex flex-col gap-7">
        <h2 className=" regular-32 text-blue-60">The second objective</h2>
        <p className="regular-16 text-grey-60">The description of the objective</p>
      </div>
      <div className="flex flex-1 flex-col">
      <Image src="/bg-babyMom.jpg" alt='about-obj1-img' height={50} width={300}/>
      </div>
      </div>
      <div className="gap-x-7 flex items-center">
      <div className="border-2 border-grey-40 py-8 pl-8 pr-48 flex flex-1 flex-col gap-7">
        <h2 className=" regular-32 text-blue-60">The third objective</h2>
        <p className="regular-16 text-grey-60">The description of the objective</p>
      </div>
      <div className="flex flex-1 flex-col">
      <Image src="/bg-babyMom.jpg" alt='about-obj1-img' height={50} width={300}/>
      </div>
      </div>
    </section>
    </div>
  )
}

export default about