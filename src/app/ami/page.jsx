"use client"

import { useSession, signOut } from "next-auth/react"
import Link from "next/link"

export default function Navbar() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <p>Loading...</p>
  }

  return (
    <nav className="flex justify-between p-4 border-b">
      <Link href="/">Logo</Link>

      {session ? (
        <div className="flex gap-4 items-center">
          <p>Hi, {session.user.name}</p>
          <button
            onClick={() => signOut()}
            className="bg-red-500 text-white px-3 py-1"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex gap-4">
          <Link href="/auth/login">Login</Link>
          <Link href="/auth/register">Register</Link>
        </div>
      )}
    </nav>
  )
}