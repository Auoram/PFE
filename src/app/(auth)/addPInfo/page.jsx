import React from 'react'
import Button from '../../../components/Button/Button'

function addPInfo() {
  return (
    <div className="flex flex-col items-center justify-center h-100vh py-20">
      <div className="border rounded-md shadow-xl lg:w-2/3 w-2/3 items-center justify-center flex flex-col py-10">
        <div className="text-center mb-8">
          <h1 className="text-blue-60 regular-30 mb-1">Add your personal information</h1>
          <div className="border-2 w-12 inline-block border-blue-60 mb-2"/>
        </div>
        <form action="#">
        <div className="lg:grid lg:grid-cols-2 gap-5">
        <div className="flex flex-col mb-2">
          <label htmlFor="name" className="mb-1 items-start text-green-60 bold-14">First Name</label>
          <div className="pb-2 w-72">
            <input type="text" name="name" placeholder="Your first name" className="border border-blue-60 w-full py-2 px-3 focus:outline-none focus:border-green-60"/>
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="Lname" className="mb-1 items-start text-green-60 bold-14">Last Name</label>
          <div className="pb-2 w-72">
            <input type="text" name="Lname" placeholder="Your last name" className="border border-blue-60 w-full py-2 px-3 focus:outline-none focus:border-green-60"/>
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="tel" className="mb-1 items-start text-green-60 bold-14">Phone Number</label>
          <div className="pb-2 w-72">
            <input type="tel" name="tel" pattern="[0-9]{10}" placeholder="Your phone number" className="border border-blue-60 w-full py-2 px-3 focus:outline-none focus:border-green-60"/>
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="address" className="mb-1 items-start text-green-60 bold-14">Address</label>
          <div className="pb-2 w-72">
            <input type="text" name="address" placeholder="Your address" className="border border-blue-60 w-full py-2 px-3 focus:outline-none focus:border-green-60"/>
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="address" className="mb-1 items-start text-green-60 bold-14">Gender</label>
          <div className="pb-2 w-72">
             <input type="radio" id="W" name="gender" value="Woman"/>
               <label htmlFor="Woman" className='text-blue-60'>Woman<br/></label>
             <input type="radio" id="M" name="gender" value="Man"/>
               <label htmlFor="Man" className='text-blue-60'>Man<br/></label>
          </div>
        </div>
        <div className="flex flex-col mb-8">
          <label htmlFor="address" className="mb-1 items-start text-green-60 bold-14">Relationship to child</label>
          <div className="pb-2 w-72">
             <input type="radio" id="m" name="rs" value="Mother"/>
               <label htmlFor="Mother" className='text-blue-60'>Mother<br/></label>
             <input type="radio" id="f" name="rs" value="Father"/>
               <label htmlFor="Father" className='text-blue-60'>Father<br/></label>
              <input type="radio" id="g" name="rs" value="Guardian"/>
               <label htmlFor="Guardian" className='text-blue-60'>Guardian<br/></label>
          </div>
        </div>
        </div>
        </form>
        <Button type="submit" title="Submit" variant="btn_dark_green_shadow" href="/MoreInfo">
          <input type="submit" value="Submit"/>
        </Button>
      </div>
    </div>
  )
}

export default addPInfo