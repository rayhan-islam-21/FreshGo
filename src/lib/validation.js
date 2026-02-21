import { z } from "zod"

export const registerSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),

  email: z.string().email("Invalid email"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
})

export const loginSchema = z.object({
  email: z.string().email("Invalid email"),

  password: z.string().min(6, "Password required"),
})