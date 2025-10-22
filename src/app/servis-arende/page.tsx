"use client";

import { useEffect, useState } from "react";
import Search from "../components/search";

export default function servisArendeList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/servis-arende");
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

  const columns = ["id", "verkstad id (fk)", "reg(fk)", "inlämnad datum", "hämtad datum"];

  return (
    <div className="p-4 mt-12">
      <Search
        data={data}
        columns={["id", "verkstad id (fk)", "reg(fk)", "inlämnad datum", "hämtad datum"]}
        tableName="servis-arende"
      />
    </div>
  );
}
