import React from 'react'
import Button from '../Button/Button';

type SettingProps={
    firstN: string;
    lastN:string;
    email: string;
    tel: string;
    role: string;
}

function SettingProfile({firstN,lastN,email,tel,role}: SettingProps) {
  return (
  <div className="ml-2 mt-2 border border-gray-40 shadow-lg rounded-[8px]">
    <h1 className="text-gray-500 regular-26 mt-5 ml-8 lg:ml-20">Profile</h1>
    <div className="border border-gray-300 mt-5"></div>
    <div className="gap-16 lg:gap-48 p-4 ml-4 flex items-center">
      <div className="relative flex flex-1 flex-col gap-4"> 
        <div className='flex items-center'>
          <p className="lg:bold-18 bold-16 text-blue-40" style={{ minWidth: '200px' }}>Full name :</p>
          <p className="regular-16 text-gray-600"> {firstN}<span> {lastN}</span></p>
        </div>
        <div className='flex items-center'>
          <p className="lg:bold-18 bold-16 text-blue-40" style={{ minWidth: '200px' }}>Email :</p>
          <p className="regular-16 text-gray-600"> {email}</p>
        </div>
        <div className='flex items-center'>
          <p className="lg:bold-18 bold-16 text-blue-40" style={{ minWidth: '200px' }}>Phone Number :</p>
          <p className="regular-16 text-gray-600"> {tel}</p>
        </div>
        <div className='flex items-center'>
          <p className="lg:bold-18 bold-16 text-blue-40" style={{ minWidth: '200px' }}>Relationship :</p>
          <p className="regular-16 text-gray-600"> {role}</p>
        </div>
      </div> 
      <div className="relative flex flex-1">
        <Button title='Modify' href='/Modification' type='button' variant='btn_light_blue'/>
      </div>
    </div>
  </div>
  )
}

export default SettingProfile