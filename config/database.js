import pkg from "pg";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const { Pool } = pkg;
const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

//Cargar variables desde el .env externo
dotenv.config({ path: path.resolve(_dirname, "../../.env") });

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: "todolist",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

pool.on("error", (err) => {
  console.error("Error de conexión a PostgreSQL", err);
});

export default pool;
