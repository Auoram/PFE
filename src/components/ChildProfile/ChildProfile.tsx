import Image from 'next/image';
import React from 'react'
type CProfilProps={
    name: string;
    age: string;
    center:string;
    bType: string;
}
function ChildProfile({name,age,center,bType}: CProfilProps) {
  return (
    <div className="flexCenter gap-x-20 ml-2 mt-2 border border-gray-40 shadow-lg rounded-[8px] p-4"> 
    <div className="lg:ml-20 relative flex flex-1 flex-col gap-4">
       <p className="text-blue-40 regular-32">{name}</p>  
       <p className="bold-16 text-grey-60"><span className="text-blue-40">Age :</span> {age}</p>
       <p className="bold-16 text-grey-60"><span className="text-blue-40">Healthcare Center :</span> {center}</p>
       <p className="bold-16 text-grey-60"><span className="text-blue-40">Blood Type :</span> {bType}</p>
     </div>
     <div className="relative flex flex-1 flex-col gap-4">
        <Image src="/bg-mom&baby.jpg" alt='profile-img' height={55} width={200}/>
     </div>
    </div>
  )
}

export default ChildProfile