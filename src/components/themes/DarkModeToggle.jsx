"use client"

import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "@/store/slices/themeSlice"

export default function DarkModeToggle() {
  const dispatch = useDispatch()
  const mode = useSelector((state) => state.theme.mode)

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      aria-label="Toggle dark mode"
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        mode === "dark" ? "bg-zinc-800" : "bg-zinc-300"
      }`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
          mode === "dark" ? "translate-x-5" : "translate-x-1"
        }`}
      />
    </button>
  )
}
