import { NextResponse } from 'next/server';
import db from '../../db/db';
import type { servisArende } from '../../types/servis-arende';
import type { RowDataPacket } from 'mysql2';

export async function GET() {
  try {
    // Hämta alla rader från tabellen
    const [rows] = await db.query<RowDataPacket[]>("SELECT * FROM `servis ärende`");

    // ändrq datumen format sv-SE  (2022-10-07)
    const formattedRows = rows.map(row => ({
      ...row,
      "inlämnad datum": new Date(row["inlämnad datum"]).toLocaleDateString("sv-SE"),
      "hämtad datum": new Date(row["hämtad datum"]).toLocaleDateString("sv-SE"),
    }));

    return NextResponse.json(formattedRows as servisArende[]);
  } catch (err: any) {
    console.error('Databasfel:', err);
    return NextResponse.json({ message: 'Databasfel', error: err.message }, { status: 500 });
  }
}
