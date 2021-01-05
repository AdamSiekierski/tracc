import { Ctx } from "blitz"
import db from "db"

export default async function getTransactions(_: null, ctx: Ctx) {
  await ctx.session.authorize()

  return await db.transaction.findMany({ where: { user: { id: ctx.session.userId as string } } })
}
