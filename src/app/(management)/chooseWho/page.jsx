import React from 'react'
import Button from '../../../components/Button/Button'
import Image from 'next/image'
import { CHOICE } from '../../../../constants'

function chooseWho() {
  return (
      <div className="flexCenter gap-2 ml-2 mt-2 p-4 flex-col">
        <div className="grid lg:grid-cols-2 grid-cols-1 text-center mb-3 gap-x-20 lg:px-32">
            {CHOICE.map((link)=>(
              <div className="flexCenter gap-6 ml-2 mt-2 border border-gray-40 shadow-lg rounded-[8px] p-4 flex-col">
                <Image src='/bg-mom&baby.jpg' alt='profile-img' height={250} width={350}/>
                <h1 className=" text-blue-40 regular-24">{link.title}</h1>
                <Button type="button" title="Click Here" variant="btn_blue" href='/profile'/>
              </div>
            ))}
        </div>
      </div>
  )
}

export default chooseWho