import React from 'react'

type NDateProps={
    name: string;
    dateN: string;
}

function NextDate({name,dateN}: NDateProps) {
  return (
    <div className="bg-blue-15 text-center mb-2 flexCenter gap-6 ml-2 mt-2 border border-green-5 shadow-lg rounded-[8px] p-4 flex-col">
        <h1 className="text-blue-20 regular-32">The Next Vaccine Is</h1>
        <div className="hidden border-2 w-12 lg:inline-block border-blue-20 mb-2"/>   
        <h3 className="text-white regular-24">{name}</h3>
       <p className="text-blue-20 regular-18">The next schedule is in :</p>
     <p className="text-blue-20  border border-green-5 shadow-md rounded-[10px] bg-white p-4">{dateN}</p>
    </div>
  )
}

export default NextDate