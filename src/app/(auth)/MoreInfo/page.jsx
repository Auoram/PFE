import React from 'react'
import Button from '../../../components/Button/Button'

function MoreInfo() {
    return (
        <div className="flex flex-col items-center justify-center h-100vh py-20">
          <div className="border rounded-md shadow-xl lg:w-2/3 w-2/3 items-center justify-center flex flex-col py-10">
            <div className="text-center mb-8">
              <h1 className="text-blue-60 regular-30 mb-1">Child Information</h1>
              <div className="border-2 w-12 inline-block border-blue-60 mb-2"/>
            </div>
            <form action="#">
            <div className="lg:grid lg:grid-cols-2 gap-5">
                <div className="flex flex-col mb-2">
              <label htmlFor="fullname" className="mb-1 items-start text-green-60 bold-14">Full Name</label>
              <div className="pb-2 w-72">
                <input type="text" name="fullname" placeholder="Full Name" className="border border-blue-60 w-full py-2 px-3 focus:outline-none focus:border-green-60"/>
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="address" className="mb-1 items-start text-green-60 bold-14">Address</label>
              <div className="pb-2 w-72">
                <input type="text" name="address" placeholder="Your address" className="border border-blue-60 w-full py-2 px-3 focus:outline-none focus:border-green-60"/>
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="dateB" className="mb-1 items-start text-green-60 bold-14">Date Of Birth</label>
              <div className="pb-2 w-72">
                <input type="date" name="dateB" placeholder="Date of birth" className="border border-blue-60 w-full text-gray-400 py-2 px-3 focus:outline-none focus:border-green-60"/>
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="smiN" className="mb-1 items-start text-green-60 bold-14">SMI Number</label>
              <div className="pb-2 w-72">
                <input type="text" name="smiN" placeholder="SMI number" className="border border-blue-60 w-full py-2 px-3 focus:outline-none focus:border-green-60"/>
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="center" className="mb-1 items-start text-green-60 bold-14">Healthcare Center</label>
              <div className="pb-2 w-72">
                <input type="text" name="center" placeholder="Healthcare center" className="border border-blue-60 w-full py-2 px-3 focus:outline-none focus:border-green-60"/>
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="Btype" className="mb-1 items-start text-green-60 bold-14">Blood Type</label>
              <div className="pb-2 w-72">
                <input type="text" name="Btype" placeholder="Blood type" className="border border-blue-60 w-full py-2 px-3 focus:outline-none focus:border-green-60"/>
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="city" className="mb-1 items-start text-green-60 bold-14">City</label>
              <div className="pb-2 w-72">
                <input type="text" name="city" placeholder="city" className="border border-blue-60 w-full py-2 px-3 focus:outline-none focus:border-green-60"/>
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="allergy" className="mb-1 items-start text-green-60 bold-14">Allergies</label>
              <div className="pb-2 w-72">
                <input type="text" name="allergy" placeholder="allergies" className="border border-blue-60 w-full py-2 px-3 focus:outline-none focus:border-green-60"/>
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="mc" className="mb-1 items-start text-green-60 bold-14">Medical Conditions</label>
              <div className="pb-2 w-72">
                <input type="text" name="mc" placeholder="Medical conditions" className="border border-blue-60 w-full py-2 px-3 focus:outline-none focus:border-green-60"/>
              </div>
            </div>
            <div className="flex flex-col mb-8">
              <label htmlFor="address" className="mb-1 items-start text-green-60 bold-14">Gender</label>
              <div className="pb-2 w-72">
                 <input type="radio" id="girl" name="gender" value="Girl"/>
                   <label for="Girl" className='text-blue-60'>Girl<br/></label>
                 <input type="radio" id="boy" name="gender" value="Boy"/>
                   <label for="Boy" className='text-blue-60'>Boy<br/></label>
              </div>
            </div>
            </div>
            </form>
            <Button type="submit" title="Sign Up" variant="btn_dark_green_shadow" href="about">
              <input type="submit" value="Submit"/>
            </Button>
          </div>
        </div>
      )
}

export default MoreInfo