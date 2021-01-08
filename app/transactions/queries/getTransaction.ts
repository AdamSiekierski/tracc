import { Ctx } from "blitz"
import db, { Transaction } from "db"

export default async function getTransactions(id: Transaction["id"], ctx: Ctx) {
  await ctx.session.authorize()

  return await db.transaction.findFirst({
    where: { id: id, userId: ctx.session.userId },
  })
}
