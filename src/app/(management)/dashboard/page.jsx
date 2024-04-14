import React from 'react'
import Profil from '../../../components/Profil/Profil'
import Image from 'next/image'
import NextDate from '../../../components/NextDate/NextDate'
import ChildProfile from '../../../components/ChildProfile/ChildProfile'

function dashboard() {
  return (
  <div className="flex justify-between">
    <div className='lg:w-1/4'>
      <Profil avatar='M' firstN='Full' lastN='Name' email='fullname@gmail.com'/>
      <Image src="/calender.jpg" alt="dashboard" height={500} width={450} className="flexCenter gap-2 ml-2 mt-2 border border-gray-40 shadow-lg rounded-[8px] flex-col"/>
      <NextDate name='the name of the vaccine' dateN='03/04/2024 10:30 AM'/>
    </div>
    <div className='lg:w-3/4'>
      <ChildProfile name='Full Name' age='1 year' bType='+A' center='clinic Chamal'/>
    </div>
  </div>
  )
}

export default dashboard