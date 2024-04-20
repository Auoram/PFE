import React from 'react'
import Button from '../../../components/Button/Button'

function ModifyPass() {
  return (
    <div className="flex flex-col items-center justify-center h-100vh py-20">
    <div className="border rounded-md shadow-xl lg:w-2/3 w-2/3 items-center justify-center flex flex-col py-10">
      <div className="text-center mb-8">
        <h1 className="text-blue-60 regular-30 mb-1">Create an account</h1>
        <div className="border-2 w-12 inline-block border-blue-60 mb-2"/>
      </div>
      <form action="#">
      <div className="lg:grid lg:grid-cols-2 gap-5">
      <div className="flex flex-col mb-2">
        <label htmlFor="password" className="mb-1 items-start text-green-60 bold-14">New Password</label>
        <div className="pb-2 w-72">
          <input type="password" name="password" placeholder="Your password" className="border border-blue-60 w-full py-2 px-3 focus:outline-none focus:border-green-60"/>
        </div>
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="password" className="mb-1 items-start text-green-60 bold-14">Confirm Password</label>
        <div className="pb-2 w-72">
          <input type="password" name="password" placeholder="Password" className="border border-blue-60 w-full py-2 px-3 focus:outline-none focus:border-green-60"/>
        </div>
      </div>
      </div>
      </form>
      <Button type="submit" title="Submit" variant="btn_dark_green_shadow" href="/settings">
        <input type="submit" value="Submit"/>
      </Button>
    </div>
  </div>
  )
}

export default ModifyPass