"use client"

import { useEffect } from "react"
import { useSelector } from "react-redux"

export default function ThemeSync() {
  const mode = useSelector((state) => state.theme.mode)

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [mode])

  return null
}
