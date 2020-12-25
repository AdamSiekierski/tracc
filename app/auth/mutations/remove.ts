import { Ctx } from "blitz"
import db from "db"

export default async function remove(input: never, ctx: Ctx) {
  ctx.session.authorize()

  await db.user.delete({ where: { id: ctx.session.userId } })
  await ctx.session.revoke()
}
