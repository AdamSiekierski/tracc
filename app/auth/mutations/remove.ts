import { Ctx } from "blitz"
import db from "db"

export default async function remove(input, ctx: Ctx) {
  ctx.session.authorize()

  const user = await db.user.delete({ where: { id: ctx.session.userId } })

  console.log(user)

  // ctx.session.revoke()
}
