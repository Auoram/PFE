import React from 'react'
import SettingProfile from '../../../components/SettingProfile/SettingProfile'

function settings() {
  return (
    <div>
      <h1 className="text-gray-500 regular-32 my-5 ml-8 lg:ml-20">Account Settings</h1>
      <div className="border border-gray-400"></div>
      <section className="">
      <SettingProfile firstN='Your full' lastN='name' email='youremail@gmail.com' tel='0256945637' role='parents/guardian'/>
      </section>
    </div>
  )
}

export default settings