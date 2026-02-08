"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle dark mode"
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        isDark ? "bg-zinc-800" : "bg-zinc-100"
      }`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
          isDark ? "translate-x-5" : "translate-x-1"
        }`}
      />
    </button>
  )
}
