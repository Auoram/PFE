import React from 'react'
import Slidebutton from '../Slidebutton/Slidebutton'

function Notification() {
  return (
    <div className="my-6 lg:gap-48 ml-2 border border-gray-40 shadow-lg rounded-[8px] py-4">
        <div className="grid gap-4">
        <h1 className="text-gray-500 regular-26 mt-5 ml-8 lg:ml-20">Notifications</h1>
        <p className="text-gray-500 regular-16 ml-8 lg:ml-20">We'll always let you notified about you schedules. Pick how to notify you.</p>
        <div className="border border-gray-300"></div>
        <div className="flex flex-row gap-x-96">
            <h2 className="text-gray-500 bold-16 my-6 ml-8 lg:ml-20">By email</h2>
            <Slidebutton/>
        </div>
        <div className="border border-gray-300"></div>
        <div className="flex flex-row gap-x-96">
            <h2 className="text-gray-500 bold-16 my-6 ml-8 lg:ml-20">By SMS</h2>
            <Slidebutton/>
        </div>
        </div>
    </div>
  )
}

export default Notification