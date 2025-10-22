"use client";
import { useState } from "react";
import Table from "./table";
import DetailModal from "./modal";

interface SearchProps {
  data: { [key: string]: string | number }[];
  columns: string[];
  tableName: string; 
}

export default function Search({ data, columns, tableName }: SearchProps) {
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState<{ [key: string]: string | number } | null>(null);
  const [showModal, setShowModal] = useState(false);

  const filteredData = data.filter(row =>
    columns.some(col =>
      row[col].toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  const handleRowClick = async (id: string | number, tableName: string) => {
    const res = await fetch(`/api/${tableName}/${id}`);
    const item = await res.json();
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <>
      {/* Sökfält */}
      <div className="flex flex-col items-center mb-10">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border p-2 mb-4 w-2/5 rounded-lg"
        />
      </div>

      {/* Tabell */}
      <Table
        columns={columns}
        data={search === "" ? data : filteredData}
        tableName={tableName}
        onRowClick={handleRowClick}
      />

      {/* Modal med detaljer */}
      {showModal && selectedItem && (
        <DetailModal item={selectedItem} onClose={handleCloseModal} />
      )}
    </>
  );
}
