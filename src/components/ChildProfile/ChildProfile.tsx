import Image from 'next/image';
import React from 'react'
import Button from '../Button/Button';

type CProfilProps={
    name: string;
    age: string;
    center:string;
    bType: string;
    dateB?:string;
    gender?:string;
    parentN?:string;
    bgC:string;
    imgP:string;
    btn:string;
}
function ChildProfile({name,age,center,bType,dateB,gender,parentN,bgC,imgP,btn}: CProfilProps) {
  return (
    <div className={`flexCenter ${bgC} gap-x-20  ml-2 mt-2 border border-gray-40 shadow-lg rounded-[8px] p-4`}> 
    <div className="lg:ml-20 relative flex flex-1 flex-col gap-4">
       <p className="text-blue-40 regular-36 mb-10">{name}</p>  
       <p className="bold-18 text-gray-400"><span className="text-blue-40">Age :</span> {age}</p>
       <p className="bold-18 text-gray-400"><span className="text-blue-40">Healthcare center :</span> {center}</p>
       <p className="bold-18 text-gray-400"><span className="text-blue-40">Blood type :</span> {bType}</p>
        {dateB && <p className="bold-18 text-gray-400"><span className="text-blue-40">Date of birth:</span> {dateB}</p>}
        {gender && <p className="bold-18 text-gray-400"><span className="text-blue-40">Gender:</span> {gender}</p>}
        {parentN && <p className="bold-18 text-gray-400"><span className="text-blue-40">Parent/Guardian:</span> {parentN}</p>}
        <div className="my-6">
          {btn && <Button title={btn} type='button' variant='btn_dark_green_shadow' href='/profile' />}
        </div>
     </div>
     <div className="relative flex flex-1 flex-col gap-4">
        <Image src={imgP} alt='profile-img' height={250} width={450}/>
     </div>
    </div>
  )
}

export default ChildProfile