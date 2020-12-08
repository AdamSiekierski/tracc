import { Ctx } from "blitz"
import db from "db"
import crypto from "crypto"
import { hashPassword } from "app/auth/auth-utils"
import { SignupInput, SignupInputType } from "app/auth/validations"

export default async function signup(input: SignupInputType, { session }: Ctx) {
  const { email, password, name } = SignupInput.parse(input)

  const hashedPassword = await hashPassword(password)
  const emailHash = crypto.createHash("md5").update(email).digest("hex")

  const user = await db.user.create({
    data: { email: email.toLowerCase(), hashedPassword, role: "user", name, emailHash },
    select: { id: true, name: true, email: true, role: true },
  })

  await session.create({ userId: user.id, roles: [user.role] })

  return user
}
