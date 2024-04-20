import Image from 'next/image';
import React from 'react'

type QuoteProps={
    image: string;
    owner: string;
    quote: string;
}
function Quote({image,owner,quote}: QuoteProps) {
  return (
    <div className="container flex flex-1 items-center gap-8 lg:pr-12">
      <div className="relative flex flex-col mr-20">
        <Image src={image} alt='quote-img' height={250} width={300} />
      </div>
      <div className="relative flexEnd flex-1 flex-col gap-8">
        <h3 className="text-blue-30 bold-18">"{quote}"</h3>
        <p className="text-blue-30">{owner}</p>
      </div>
    </div>
  )
}

export default Quote