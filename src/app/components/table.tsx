"use client";

interface TableProps {
  columns: string[];
  data: Array<Record<string, string | number>>;
  tableName: string;
  onRowClick?: (id: string | number, tableName: string) => void;
}

export default function Table({ columns, data, tableName, onRowClick }: TableProps) {
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
            <tr
              key={i}
              className="hover:bg-gray-100 cursor-pointer"
              onClick={() => onRowClick && onRowClick(row.id, tableName)} // när man klickar visar detaljer för den raden
            >
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
