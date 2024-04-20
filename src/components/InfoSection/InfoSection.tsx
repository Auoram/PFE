import Image from 'next/image'
import React from 'react'

function InfoSection() {
  return (
    <div className=" text-center mx-auto my-auto max-w-2xl px-4 sm:py-auto lg:max-w-7xl lg:px-8 pb-32 lg:py-28">
        <h1 className="text-blue-60 regular-32 mt-5 mb-20">Why <span className="text-blue-40">Vaccinate</span> our children ?</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  <div className="flex flex-col items-center">
    <Image src="/baby_3.jpg" alt="Image 1" className="w-full mb-4" height={263} width={296} />
    <h1 className="regular-24 mb-2 text-blue-60">Disease Prevention</h1>
    <p className="text-grey-60">Vaccinations offer powerful protection against a range of diseases, ensuring our little ones can thrive and grow without the threat of preventable infections.</p>
  </div>
  <div className="flex flex-col items-center">
    <Image src="/bg-babyMom.jpg" alt="Image 2" className="w-full mb-4" height={263} width={296} />
    <h1 className="regular-24 mb-2 text-blue-60">Reduced Healthcare Costs</h1>
    <p className="text-grey-60">Vaccinations offer a cost-effective solution, helping to prevent illness and reduce the financial burden associated with treating preventable diseases.</p>
  </div>
  
  <div className="flex flex-col items-center">
    <Image src="/Kid_school.jpg" alt="Image 3" className="w-full mb-4" height={263} width={296} />
    <h1 className="regular-24 mb-2 text-blue-60">School Attendance</h1>
    <p className="text-grey-60">Most schools mandate proof of immunization as part of the enrollment process to create a safe and healthy learning environment for all students.</p>
  </div>

</div>
    </div>
  )
}

export default InfoSection