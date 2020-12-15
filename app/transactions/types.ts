import { Transaction as DbTransaction } from "db"
import { Override } from "utils/override"

export type Transaction = Override<DbTransaction, { createdAt: string }>
