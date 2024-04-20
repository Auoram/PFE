import React from 'react'
import SettingProfile from '../../../components/SettingProfile/SettingProfile'
import Notification from '../../../components/Notification/Notification'
import Button from '../../../components/Button/Button'

function settings() {
  return (
    <div>
      <h1 className="text-gray-500 regular-32 my-5 ml-8 lg:ml-20">Account Settings</h1>
      <div className="border border-gray-400"></div>
      <section>
      <SettingProfile firstN='Your full' lastN='name' email='youremail@gmail.com' tel='0256945637' role='parents/guardian'/>
      </section>
      <section>
        <Notification/>
      </section>
      <section>
        <div className="ml-2 mt-2 mb-8 border border-gray-40 shadow-lg rounded-[8px]">
          <h1 className="text-gray-500 regular-26 mt-5 ml-8 lg:ml-20">Password</h1>
          <div className="border border-gray-300 mt-5"></div>
          <div className="gap-40 lg:gap-28 py-4 flex items-center">
            <p className="relative flex flex-1 text-gray-500 regular-16 ml-8 lg:ml-20 my-10">Do you want to change your password ?</p>
            <div className="relative flex flex-1">
            <Button title='Change Password' href='/ModifyPass' type='button' variant='btn_light_blue'/>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="ml-2 mt-2 mb-8 border border-gray-40 shadow-lg rounded-[8px]">
          <h1 className="text-gray-500 regular-26 mt-5 ml-8 lg:ml-20">Delete Account</h1>
          <div className="border border-gray-300 mt-5"></div>
          <div className="gap-40 lg:gap-28 py-4 flex items-center">
            <p className="relative flex flex-1 text-gray-500 regular-16 ml-8 lg:ml-20 my-10">Do you want to change your password ?</p>
            <div className="relative flex flex-1">
            <Button title='Delete' href='/Delete' type='button' variant='btn_red'/>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default settings