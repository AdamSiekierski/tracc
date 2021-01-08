import { Column, useTable } from "react-table"

type TableProps<T extends object> = {
  data: T[]
  columns: Column<T>[]
}

const Table = <T extends object>({ data, columns }: TableProps<T>) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    data,
    columns,
  })

  return (
    <table className="table-auto w-full" {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr className="border-t border-b border-gray-200" {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th className="p-2 text-gray-500 font-normal" {...column.getHeaderProps()}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <tr className="border-b border-gray-200 hover:bg-gray-100" {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td className="p-4 text-gray-700" {...cell.getCellProps()}>
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
