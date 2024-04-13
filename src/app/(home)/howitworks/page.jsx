'use client'
import React from 'react'
import ScrollableImageAndText from '../../../components/ScrollableImageAndText/ScrollableImageAndText'

function howitworks() {
  return (
    <div>
      <section className="h-[500px] relative grid text-center mx-auto my-auto px-20 sm:py-12 pb-32 lg:py-16">
        <h1 className="regular-46 text-blue-20">Connect to <span className="text-blue-40">KidVax</span><br/>in 3 steps</h1>
        <p className="regular-18 text-grey-60">Our website is here to help you manage your children's<br/> vaccination schedule</p>
      </section>
        <ScrollableImageAndText />
    </div>
  )
}

export default howitworks