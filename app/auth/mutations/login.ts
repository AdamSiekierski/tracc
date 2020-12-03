import { Ctx } from "blitz"
import { authenticateUser } from "app/auth/auth-utils"
import { LoginInput, LoginInputType } from "../validations"

export default async function login(input: LoginInputType, { session }: Ctx) {
  const { email, password } = LoginInput.parse(input)

  const user = await authenticateUser(email, password)

  await session.create({ userId: user.id, roles: [user.role] })

  return user
}
