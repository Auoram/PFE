import './globals.css'
import React from 'react';
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const inter = Inter ({ subsets: ['latin'] })

export const metadata = {
  title: 'Vaccination',
  description: 'create a children vaccination website',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={inter.className}> 
      <Navbar/>
      <main className='relative overflow-hidden'>
        {children}
      </main>
      <Footer/>
      </body>
    </html>
  )
}
