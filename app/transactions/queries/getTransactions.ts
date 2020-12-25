import { Ctx } from "blitz"
import db from "db"

export async function getTransactions(input: never, ctx: Ctx) {
  await ctx.session.authorize()

  return await db.transaction.findMany({ where: { user: { id: ctx.session.userId as number } } })
}
