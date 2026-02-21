import { PrismaAdapter } from "@auth/prisma-adapter"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import prisma from "@/lib/prisma"

export const authConfig = {
  adapter: PrismaAdapter(prisma),

  session: {
    strategy: "jwt",
  },

  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        console.log("LOGIN ATTEMPT:", credentials)

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        })

        console.log("USER FOUND:", user)

        if (!user) {
          console.log("USER NOT FOUND")
          return null
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        )

        console.log("PASSWORD MATCH:", isValid)

        if (!isValid) {
          console.log("PASSWORD INVALID")
          return null
        }

        return user
      }
    }),
  ],

  pages: {
    signIn: "/login",
  },

  secret: process.env.AUTH_SECRET,
}