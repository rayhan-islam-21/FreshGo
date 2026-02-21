"use client"

import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "next-themes"
import ReduxProvider from "@/store/Providers"

export default function Providers({ children }) {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class" defaultTheme="system">
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </ThemeProvider>
    </SessionProvider>
  )
}