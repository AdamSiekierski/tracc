import React from "react"
import { parseTableData } from "utils/parseTableData"

type TableProps = {
  data: object[]
}

const Table = ({ data }: TableProps) => {
  const [keys, rows] = parseTableData(data)

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          {keys.map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.join()}>
            {row.map((value) => (
              <td key={value}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
