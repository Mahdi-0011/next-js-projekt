// Fil: app/api/bil-agare/[id]/route.ts
import { NextResponse } from 'next/server';
import db from '../../../db/db';
import type { BilAgare } from '../../../types/bilAgare';
import type { RowDataPacket } from 'mysql2';

interface Params {
  id: string;
}

// Hämta en bilägare med ID
export async function GET(_request: Request, { params }: { params: Params }) {
  const { id } = await params;

  try {
    // Fråga databasen
    const [rows] = await db.query<RowDataPacket[]>(
      "SELECT * FROM `bil ägare` WHERE id = ?",
      [id]
    );

    if (rows.length === 0) {
      return NextResponse.json({ message: 'Ingen bilägare hittades' }, { status: 404 });
    }

    // Returnera bilägaren
    return NextResponse.json(rows[0] as BilAgare);
  } catch (err: any) {
    console.error('Databasfel:', err);
    return NextResponse.json({ message: 'Databasfel', error: err.message }, { status: 500 });
  }
}
