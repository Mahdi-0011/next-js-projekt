"use client";
import { useEffect, useState } from "react";
import { BilAgare } from "../types/bilAgare";

export default function BilAgareList() {
  const [data, setData] = useState<BilAgare[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/bilAgare", { cache: "no-store" });

        if (!res.ok) {
          throw new Error("Fel vid hämtning av data");
        }

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
  if (error) return <p style={{ color: "red" }}>Fel: {error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Bilägare lista</h2>

      <ul className="space-y-2">
        {data.map((item) => (
          <li
            key={item.id}
            className="border p-2 rounded shadow-sm hover:bg-gray-50 transition"
          >
            <p>
              <strong>ID:</strong> {item.id}
            </p>
            <p>
              <strong>Förnamn:</strong> {item.förnamn}
            </p>
            <p>
              <strong>Efternamn:</strong> {item.efternamn}
            </p>
            <p>
              <strong>Telefonnummer:</strong> {item.telefonnummer}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
