import { Ctx } from "blitz"
import db from "db"
import * as zod from "zod"

export const AddTransactionInput = zod.object({
  name: zod.string().nonempty(),
  value: zod.number(),
  description: zod.string().optional(),
})

type AddTransactionInputType = zod.infer<typeof AddTransactionInput>

export default async function addTransaction(data: AddTransactionInputType, ctx: Ctx) {
  await ctx.session.authorize()

  return await db.transaction.create({
    data: { ...data, user: { connect: { id: ctx.session.userId || undefined } } },
  })
}
