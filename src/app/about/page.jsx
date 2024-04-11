import React from 'react'
import Image from 'next/image'

function about() {
  return (
    <div>
    <section className="max-container padding-container flex items-center gap-25 py-16 pb-32 md:gap-28 lg:py-28">
        <div className="relative z-20 flex flex-1 flex-col gap-7 xl:mb-28">
            <h1 className="bold-32 text-blue-60 lg:bold-52">The purpose of <span className="text-blue-40">KidVax</span></h1>
            <p className="regular-16 mt-6 xl:text-center text-grey-60 xl:maw-w-[520]">
              In our commitment to Children's health, KidVax provide a comprehensive vaccination management services, ensuring every child received the care and protection they need to have.
            </p>
        </div>
        <div className="relative flex flex-1 flex-col gap-7">
          <Image src="/computer.png" alt='about-img' height={592} width={457}/>
        </div>
    </section>

    <section className="bg-blue-10 text-center mx-auto my-auto px-5 sm:py-12 lg:px-24 pb-32 lg:py-16">
        <h1 className="regular-32 text-green-60 mb-20">About Us</h1>
        <p className="regular-20 flex justify-center items-center mt-7 mb-10 text-blue-20">Welcome to KidVax, your trusted partner in managing your child's vaccination journey. I'm Maroua Boumchich, the developer behind this platform. I created this website to provide a user-friendly solution for parents like you to streamline the vaccination process and ensure your child's health and well-being.At KidVax, we prioritize safety, accuracy, and convenience. Our mission is to empower parents with the knowledge and tools they need to make informed decisions about their child's health.</p>
    </section>

    <section className="grid xl:mx-28 my-auto px-4 justify-center gap-y-20 sm:py-12 lg:px-8 pb-32 lg:py-16">
    <h1 className="text-center regular-32 text-green-60 mb-18">Our Objectives</h1>
      
    <div className="flex items-center justify-center">
        <div className="border-2 border-grey-40 py-7 px-7 flex flex-1 flex-col gap-6 w-2/3">
            <h2 className="regular-32 text-blue-60">Promote Vaccination Awareness</h2>
            <p className="regular-16 text-grey-60">Increase awareness about the importance of childhood immunization among parents.</p>
        </div>
        <div className="flex flex-col items-center justify-center w-1/3">
            <Image src="/Vaccine.jpg" alt='about-obj1-img' height={200} width={300}/>
        </div>
    </div>

    <div className="flex items-center justify-center flex-row-reverse">
        <div className="border-2 border-grey-40 py-7 px-7 flex flex-1 flex-col gap-6 w-2/3">
            <h2 className="regular-32 text-blue-60">Streamline Appointment Scheduling</h2>
            <p className="regular-16 text-grey-60">Provide a platform for scheduling vaccination appointments, making it convenient for parents to keep track of the vaccination process.</p>
        </div>
        <div className="flex flex-col items-center justify-center w-1/3">
            <Image src="/picnic.jpg" alt='about-obj2-img' height={200} width={300}/>
        </div>
    </div>

    <div className="flex items-center justify-center">
        <div className="border-2 border-grey-40 py-7 px-7 flex flex-1 flex-col gap-6 w-2/3">
            <h2 className="regular-32 text-blue-60">Education and Information</h2>
            <p className="regular-16 text-grey-60">Offer reliable information about different vaccines, their benefits, and potential side effects, empowering parents to make informed decisions.</p>
        </div>
        <div className="flex flex-col items-center justify-center w-1/3">
            <Image src="/family-smile.jpg" alt='about-obj3-img' height={200} width={300}/>
        </div>
    </div>
</section>


    </div>
  )
}

export default about