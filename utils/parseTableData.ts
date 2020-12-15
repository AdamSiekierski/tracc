import { parseTableKeys } from "./parseTableKeys"
import { parseTableValues } from "./parseTableValues"

export function parseTableData<T>(data: T[]): [string[], string[][]] {
  const keys = parseTableKeys<T>(data)
  const rows = parseTableValues<T>(data, keys)

  return [keys, rows]
}
