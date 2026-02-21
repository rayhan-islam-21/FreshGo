import { getServerSession } from "next-auth"
import NextAuth from "next-auth"
import { authConfig } from "@/auth"

export const auth = () => {
  return getServerSession(authConfig)
}