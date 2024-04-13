import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function PhotoCenter() {
  return (
    <div>
        <Link href="/">
          <div className="flex justify-center mt-20">
            <Image src="/logo-img.png" alt="logo" width={130} height={60}/>
          </div>
        </Link>
    </div>
  )
}

export default PhotoCenter