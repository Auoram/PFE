import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter ({ subsets: ['latin'] })

export const metadata = {
  title: 'My pfe',
  description: 'create a children vaccination website',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={inter.className}> 
      <h1 className="underline">hello world!</h1>
      {children}
      </body>
    </html>
  )
}
