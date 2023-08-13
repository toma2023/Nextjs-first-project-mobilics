import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import NavbarTop from '@/components/NavbarTop/NavbarTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="md:flex w-[100%]  relative">
          <div className="hidden md:block w-[15%] p-8">
            <Navbar></Navbar>
          </div>
          <div className='md:hidden w-[100%] fixed left-0 top-0 bg-white z-[9900] h-[110px]  '>
            <NavbarTop></NavbarTop>
          </div>

          <div className="w-full md:flex-1 h-screen overflow-y-auto bg-gray-100">
          {children}
          </div>
        </div>


     
      </body>
    </html>
  )
}
