import '../styles/globals.css'
import { Poppins } from 'next/font/google'
import ReduxProvider from '@/store/Providers'

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
       <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}
