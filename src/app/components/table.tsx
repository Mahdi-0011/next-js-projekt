"use client";

interface TableProps {
  columns: string[]; // rubriker
  data: Array<Record<string, string | number>>; // listan med objekt
}

export default function Table({ columns, data }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-400 rounded-lg shadow-sm">
        <thead className="bg-gray-250">
          <tr>
            {columns.map((col) => (
              <th key={col} className="py-2 px-4 border-b text-left">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {columns.map((col) => (
                <td key={col} className="py-2 px-4 border-b">
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
