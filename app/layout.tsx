import type { Metadata } from 'next'

import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'



export const metadata: Metadata = {
  title: 'Travel',
  description: 'Travel UI/UX app for camping',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='w-[100%] h-[100%]'>
       <div className='w-full h-full overflow-x-hidden'>
       <Navbar/>
        <main>
        {children}
        </main>
        <Footer/>
       </div>
       
      </body>
    </html>
  )
}
