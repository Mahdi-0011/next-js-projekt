import { NextResponse } from 'next/server';
import db from '../../db/db';
import type { Bilar } from '../../types/Bilar';
import type { RowDataPacket } from 'mysql2';

export async function GET() {
  try {
    // Hämta alla rader från tabellen bil ägare
    const [rows] = await db.query<RowDataPacket[]>("SELECT * FROM `bilar`");
    return NextResponse.json(rows as Bilar[]);
  } catch (err :any) {
    console.error('Databasfel:', err);
    return NextResponse.json({ message: 'Databasfel', error: err.message }, { status: 500 });
  }
}
