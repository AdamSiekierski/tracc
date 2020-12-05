import * as z from "zod"

export const SignupInput = z.object({
  email: z.string().email(),
  password: z.string().min(7).max(30),
  name: z.string().min(2).max(100),
})
export type SignupInputType = z.infer<typeof SignupInput>

export const LoginInput = z.object({
  email: z.string().email(),
  password: z.string(),
})
export type LoginInputType = z.infer<typeof LoginInput>
