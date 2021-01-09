import { createPool } from 'mysql2/promise';
import { config } from 'dotenv';
config();

export async function connect() {
    const connection = await createPool({
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        connectionLimit: 10
    });
}