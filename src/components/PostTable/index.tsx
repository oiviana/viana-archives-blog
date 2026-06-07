import { PostTableBlock } from "@/types/post-content"

type PostTableProps = {
  value: PostTableBlock
}

export default function PostTable({ value }: PostTableProps) {
  const rows = value.rows?.filter((row) => row.cells?.length) ?? []
  const [headerRow, ...bodyRows] = rows

  if (!headerRow) {
    return null
  }

  return (
    <figure className="my-8">
      <div className="overflow-x-auto rounded border border-background-extralight">
        <table className="min-w-[720px] w-full border-collapse bg-background-light/40 font-bitter text-base text-white-main">
          <thead>
            <tr>
              {headerRow.cells.map((cell, index) => (
                <th
                  key={`${cell}-${index}`}
                  scope="col"
                  className="border border-background-extralight bg-background-light px-4 py-3 text-left font-jetbrains text-sm font-semibold text-green-main"
                >
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bodyRows.map((row, rowIndex) => (
              <tr key={row._key ?? rowIndex} className="odd:bg-background/30">
                {row.cells.map((cell, cellIndex) => (
                  <td
                    key={`${cell}-${cellIndex}`}
                    className="whitespace-pre-line border border-background-extralight px-4 py-4 align-top leading-7 text-white-secondary"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {value.caption && (
        <figcaption className="mt-3 font-lora text-sm text-white-secondary">
          {value.caption}
        </figcaption>
      )}
    </figure>
  )
}
