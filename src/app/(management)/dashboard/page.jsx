import React from 'react'
import Profil from '../../../components/Profil/Profil'
import Image from 'next/image'
import NextDate from '../../../components/NextDate/NextDate'
import ChildProfile from '../../../components/ChildProfile/ChildProfile'
import MoreInfo from '../../../components/MoreInfo/MoreInfo'
import Button from '../../../components/Button/Button'

function dashboard() {
  return (
  <div className="flex justify-between">
    <div className='lg:w-1/4 w-1/3'>
      <Profil avatar='M' firstN='Full' lastN='Name' email='fullname@gmail.com'/>
      <Image src="/calender.jpg" alt="dashboard" height={500} width={450} className="flexCenter gap-2 mt-2 rounded-[8px] flex-col"/>
      <NextDate name='the name of the vaccine' dateN='03/04/2024 10:30 AM'/>
    </div>
    <div className='lg:w-3/4 w-2/3'>
      <ChildProfile name='Full Name' age='1 year' bType='+A' center='clinic Chamal' imgP="/bg-mom&baby.jpg" btn='see more'/>
      <MoreInfo name='Vaccine 1'/>
      <div className="flexCenter gap-3 ml-2 mt-2 mb-4 border border-gray-40 shadow-lg rounded-[8px] p-4 lg:flex-col"> 
      <h1 className="text-blue-40 regular-24">Download Records</h1>
      <Button title='Download' type='submit' variant='btn_dark_green_shadow' href='' />     
      </div>
    </div>
  </div>
  )
}

export default dashboard