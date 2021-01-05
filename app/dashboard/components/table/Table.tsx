type TableProps<T> = {
  data: T[]
  keys: Partial<Record<keyof T, string>>
}

const Table = <T extends object>({ data, keys }: TableProps<T>) => {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr className="border-t border-b border-gray-200">
          {Object.values(keys).map((name: string) => (
            <th className="p-2 text-gray-500 font-normal" key={name}>
              {name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i + row.toString()} className="border-b border-gray-200 hover:bg-gray-100">
            {Object.keys(keys).map((key) => (
              <td className="p-4 text-gray-700" key={key + row.toString()}>
                {row[key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
