import React from 'react';
import { Inter } from 'next/font/google'
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter ({ subsets: ['latin'] })

export const metadata = {
  title: 'Vaccination authentication',
  description: 'create a children vaccination website',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={inter.className}> 
      <main className="relative overflow-hidden">
        <div className="flexCenter">
          <Link href="/">
            <Image src="/logo-img.png" alt="logo" width={130} height={60}/>
          </Link>
        </div>
        {children}
      </main>
      </body>
    </html>
  )
}