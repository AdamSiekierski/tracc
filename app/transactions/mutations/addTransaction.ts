import { Ctx } from "blitz"
import db from "db"

type AddTransactionInput = {
  value: number
  name: string
  description?: string
}

export async function addTransaction(data: AddTransactionInput, ctx: Ctx) {
  await ctx.session.authorize()

  return await db.transaction.create({
    data: { ...data, user: { connect: { id: ctx.session.userId as number } } },
  })
}
