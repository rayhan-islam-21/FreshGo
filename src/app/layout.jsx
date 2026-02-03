import '../styles/globals.css'
import Navbar from '../components/navitems/Navbar'
import Footer from '../components/Footer'
import { Poppins } from 'next/font/google'

export const poppinsFont = Poppins({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-popins',
})

export const metadata = {
  title: 'Grocery E-commerce',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppinsFont.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
