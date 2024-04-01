import Image from 'next/image'
import React from 'react'

function VaxScedule() {
  return (
    <div className="bg-blue-10 text-center mx-auto my-auto px-4 sm:py-12  lg:px-8 pb-32 lg:py-16">
        <h1 className="regular-32 text-blue-60">Vaccination schedule</h1>
        <div className="flex justify-center items-center mt-7">
            <Image src="/vaccine-schedule.png" alt='schedule' height={400} width={700} />
        </div>
    </div>
  )
}

export default VaxScedule