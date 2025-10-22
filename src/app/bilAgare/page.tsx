/** @format */

"use client";
import { useEffect, useState } from "react";
import Search from "../components/search";

export default function BilAgareList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/bilAgare");
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
  if (error) return <p className='text-red-600'>Fel: {error}</p>;

  const columns = ["id", "förnamn", "efternamn", "telefonnummer"];

  return (
    <div className='p-4 mt-12'>
      <Search
        data={data}
        columns={["id", "förnamn", "efternamn", "telefonnummer"]}
        tableName="bilAgare"
      />
      {/* <Table columns={columns} data={data} /> */}
    </div>
  );
}
