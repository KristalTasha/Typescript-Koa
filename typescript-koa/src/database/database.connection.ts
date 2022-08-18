import 'reflect-metadata';
import { createConnection, Connection, ConnectionOptions } from 'typeorm';
import { join } from 'path';
const parentDir = join(__dirname, '..');

const connectionOpts: ConnectionOptions = {
    type: 'postgres',
    host: process.env.DB_HOST || 'locallhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || 'postgres'
}