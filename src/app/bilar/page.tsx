"use client";
import { useEffect, useState } from "react";
import Table from "../components/table";

export default function BilarList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/bilar");
        if (!res.ok) throw new Error("Fel vid hämtning");
        const result = await res.json();
        setData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p>Laddar data...</p>;
  if (error) return <p className="text-red-600">Fel: {error}</p>;

  const columns = ["reg(pk)", "", "bil ägare id(fk)", "märke", "modell", "Årsmodell", "pris"];

  return (
    <div className="p-4 mt-12">
      <Table columns={columns} data={data} />
    </div>
  );
}
