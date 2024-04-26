"use client"
import Image from 'next/image';
import React from 'react'
import { useState } from 'react';
import { MORE_INFO, RESOURCES, TYPE_INFO } from '../../../../constants';

function information() {
  const [descriptionVisibility, setDescriptionVisibility] = useState({});

  const toggleDescription = (index) => {
    setDescriptionVisibility({
      ...descriptionVisibility,
      [index]: !descriptionVisibility[index],
    });
  };

  return (
    <div>
      <section className="bg-blue-25 padding-container flex items-center gap-25 py-16 pb-28 md:gap-28 lg:py-28">
        <div className="relative z-20 flex flex-1 flex-col gap-8 xl:-1/2">
          <h1 className="bold-34 text-blue-40 lg:bold-46">More information about children's vaccination</h1>
        </div>
        <div className="relative flex flex-1 flex-col gap-7">
          <img src="/child-visiting-the-pediatrician.png" alt='hero-img' height={592} width={457}/>
        </div>
      </section>
      <section className='padding-container py-7'>
      {MORE_INFO.map((link, index)=>(
        <div className="border border-gray-300 shadow-lg mb-6 p-4 rounded-md">
          <div className="flex justify-between items-center px">
            <h3 className="regular-24 text-blue-20 ">{link.title}</h3>
            <div onClick={() => toggleDescription(index)} className="hover:cursor-pointer">
              <Image src='/close.svg' alt='plus' height={40} width={39}/>
            </div>
          </div>
          {descriptionVisibility[index] && (
            <div className="mt-4">
              <p className="text-gray-600 regular-20">{link.label}</p>
            </div>
          )}
        </div>
        ))}
      </section>
      <section>
      <div className="flexCenter gap-2 ml-2 mt-2 p-4 flex-col">
      <h1 className="text-blue-40 regular-36 text-center mb-4">Other type of vaccine information</h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 text-center mb-6 gap-x-20 lg:px-32">
            {TYPE_INFO.map((link)=>(
              <div className="flexCenter gap-8 ml-2 mt-2 border border-gray-40 shadow-md p-4 flex-col">
                <Image src='/bg-mom&baby.jpg' alt='profile-img' height={250} width={350}/>
                <h1 className=" text-blue-40 regular-24">{link.title}</h1>
                <p className=" text-gray-600 regular-18">{link.desc} </p>
              </div>
            ))}
        </div>
      </div>
      </section>
      <section>
        <h1 className="text-blue-40 regular-36 text-center mb-10">Additional Resources</h1>
        <div className="max-container grid gap-3 my-7">
        {RESOURCES.map((link)=>(
          <div className="flex items-center">
                <h2 className=" text-blue-20 bold-20">{link.title}</h2>
                <h3 className=" text-blue-20 regular-18">,{link.label} </h3>
          </div>
        ))}

        </div>
      </section>
    </div>
  );
}

export default information