"use client"
import Image from 'next/image';
import React from 'react'
import { useState } from 'react';
import { MORE_INFO } from '../../../../constants';


function information() {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setDescriptionVisible(!isDescriptionVisible);
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
      {MORE_INFO.map((link)=>(
        <div className="border border-gray-300 shadow-lg mb-7 p-4 rounded-md">
          <div className="flex justify-between items-center px">
            <h3 className="regular-30 text-blue-20 ">{link.title}</h3>
            <button onClick={toggleDescription} className="text-blue-20">
              <Image src='/close.svg' alt='plus' height={40} width={39}/>
            </button>
          </div>
          {isDescriptionVisible && (
            <div className="mt-4">
              <p className="text-gray-600 regular-20">{link.label}</p>
            </div>
          )}
        </div>
        ))}
      </section>
    </div>
  );
}

export default information