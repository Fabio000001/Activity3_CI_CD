import { config } from 'dotenv';
config();

export const PORT = process.env.PORT || 3000;
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_USER = process.env.DB_USER || '${{ secrets.MYSQL_USER }}';
export const DB_PASSWORD = process.env.DB_PASSWORD || '${{ secrets.MYSQL_PASSWORD }}';
export const DB_DATABASE = process.env.DB_DATABASE || '${{ secrets.MYSQL_DATABASE }}';
export const DB_PORT = process.env.DB_PORT || 3307;
