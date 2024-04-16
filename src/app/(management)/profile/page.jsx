import React from 'react'
import ChildProfile from '../../../components/ChildProfile/ChildProfile'
import Button from '../../../components/Button/Button'
import VaxHistory from '../../../components/VaxHistory/VaxHistory'
import Analytics from '../../../components/Analytics/Analytics'
import Quote from '../../../components/Quotes/Quote'

function profil() {
  return (
    <div className="bg-blue-25">
      <section className='bg-white'>
        <ChildProfile name='Full Name' age='1 year' center='Clinic tetouan' bType='+A' dateB='2021-07-20' gender='girl' parentN='Parent name' bgC='bg-blue-15 bg-opacity-35' imgP='/child-visiting-the-pediatrician.png'/>
      </section>
      <section>
        <VaxHistory/>
      </section>
      <section>
       <div className="flex flex-col items-center">
        <h1 className="text-green-60 regular-36 text-center mt-6">Health records</h1>
        <div className="border w-3/4 border-blue-40 mx-auto py-48 my-8">
          <h1 className="text-green-70 regular-30 text-center">Here is the health records based on the data given</h1>
        </div>
       </div>
      </section>
      <section className="grid place-items-center mb-10 bg-gradient-to-b from-blue-25 to-white">
        <h1 className="text-green-60 regular-36 text-center mt-6 mb-6">Analytics & Reports</h1>
        <div className="flexCenter gap-2 ml-2 mt-2 p-4 flex-col">
        <div className="grid lg:grid-cols-2 grid-cols-1 text-center mb-3 gap-x-20 lg:px-32">
            <Analytics name='Vaccination Analytics' />
            <Analytics name='Vaccination Reports' />
        </div>
        </div>
      </section>
      <section>
      <Quote image="/computer.png" quote="Vaccines save lives; fear endangers them. it's a simple message parents need to keep hearing." owner="Jeffrey Kluger" />
      </section>
    </div>
  )
}

export default profil