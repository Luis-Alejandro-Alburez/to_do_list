import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import pool from "./config/database.js";

const app = express();
const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

//Middleware para form data y Json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Configuración
app.set("view engine", "ejs");
app.set("views", path.join(_dirname, "views"));
app.use(express.static(path.join(_dirname, "public")));

//Ruta principal
app.get("/", async (req, res) => {
  try {
    //Consultar todas las tareas
    const result = await pool.query("SELECT * FROM list;");
    const tasks = result.rows;

    res.render("index", {
      title: "Mi lista de tareas",
      tasks: tasks,
      error: null,
    });
  } catch (error) {
    console.error("Error al obtener tareas: ", error);
    res.render("index", {
      title: "Mi lista de tareas",
      tasks: [],
      error: "Error al cargar tareas",
    });
  }
});

// Ruta para ELIMINAR tarea
app.post("/tasks/:id/delete", async (req, res) => {
  const taskId = req.params.id;

  try {
    await pool.query("DELETE FROM list WHERE id = $1", [taskId]);
    console.log(`Tarea ${taskId} Eliminada`);
    res.redirect("/");
  } catch (error) {
    console.error("Error al eliminar tarea: ", error);
    res.redirect("/");
  }
});

// Ruta para CREAR nueva tarea - POST
app.post("/tasks", async (req, res) => {
  const { task } = req.body; // "task" viene del name="task" en el input

  if (!task || task.trim() === "") {
    console.log("❌ Intento de agregar tarea vacía");
    return res.redirect("/");
  }

  try {
    await pool.query("INSERT INTO list (item) VALUES ($1)", [task.trim()]);
    console.log(`✅ Nueva tarea agregada: "${task}"`);
    res.redirect("/");
  } catch (error) {
    console.error("Error al agregar tarea:", error);
    res.redirect("/");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`servidor corriendo en http://localhost: ${PORT}`);
});
