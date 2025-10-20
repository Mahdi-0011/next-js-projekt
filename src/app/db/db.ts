import mysql, { Pool } from 'mysql2/promise';
import type { DatabaseSettings } from '../types/db';

// Skapa settings
const settings = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  name: process.env.DB_NAME,
} as DatabaseSettings; 

// Skapa en pool för att koplla till databasen
const db: Pool = mysql.createPool({
  host: settings.host,
  user: settings.user,
  password: settings.password,
  database: settings.name,
});


export default db;
