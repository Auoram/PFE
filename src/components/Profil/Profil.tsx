import React from 'react'

type ProfilProps={
    avatar: string;
    firstN: string;
    lastN:string;
    email: string;
}
function Profil({avatar,firstN,lastN,email}: ProfilProps) {
  return (
    <div className="flexCenter gap-2 ml-2 mt-2 border border-gray-40 shadow-lg rounded-[8px] p-4 flex-col">
      <div className="avatar rounded-full min-h-10 min-w-10 bg-green-5 text-white bold-18 flexCenter">
        <p>{avatar}</p>
      </div>   
       <p className="bold-16 text-blue-40">Welcome, {firstN}<span> {lastN}</span></p>
     <p className="regular-14 text-gray-700">{email}</p>
    </div>
  )
}

export default Profil