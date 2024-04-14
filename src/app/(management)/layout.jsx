import React from 'react';
import { Inter } from 'next/font/google'
import '../globals.css';
import AppMenu from '../../components/AppMenu/AppMenu';

const inter = Inter ({ subsets: ['latin'] })

export const metadata = {
  title: 'Vaccination management',
  description: 'create a children vaccination website',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={inter.className}>
        <AppMenu/>
      <main className="relative overflow-hidden">
        {children}
      </main>
      </body>
    </html>
  )
}