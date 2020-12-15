import React from "react"
import { unCamel } from "utils/unCamel"
import { parseTableKeys } from "utils/parseTableKeys"

type TableProps<T> = {
  data: T[]
}

const Table = <T extends object>({ data }: TableProps<T>) => {
  const keys = parseTableKeys(data)

  return (
    <table className="table-auto w-full">
      <thead>
        <tr className="border-t border-b border-gray-200">
          {keys.map((key) => (
            <th className="p-2 text-gray-500 font-normal" key={key}>
              {unCamel(key)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i + row.toString()} className="border-b border-gray-200 hover:bg-gray-100">
            {keys.map((key) => (
              <td className="p-4 text-gray-700" key={key + row.toString()}>
                {row[key].toString()}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
