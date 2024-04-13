import React from 'react';
import { Inter } from 'next/font/google'
import PhotoCenter from '../../components/PhotoCenter/PhotoCenter';
import Footer from '../../components/Footer/Footer';
import '../globals.css';

const inter = Inter ({ subsets: ['latin'] })

export const metadata = {
  title: 'Vaccination authentication',
  description: 'create a children vaccination website',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={inter.className}> 
      <PhotoCenter/>
      <main className="relative overflow-hidden">
        {children}
      </main>
      </body>
    </html>
  )
}