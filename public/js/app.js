import TaskForm from "./taskForm.js";
import DropdownMenu from "./dropdownMenu.js";

document.addEventListener("DOMContentLoaded", function () {
  new TaskForm();
  new DropdownMenu();
});

// Agregar esta ruta después de tus rutas existentes
// app.get("/about", (req, res) => {
//   res.send(`
//         <!DOCTYPE html>
//         <html>
//         <head>
//             <title>Más Información - Lista de Tareas</title>
//             <style>
//                 body { font-family: Arial, sans-serif; padding: 2rem; }
//                 h1 { color: #2c3e50; }
//             </style>
//         </head>
//         <body>
//             <h1>ℹ️ Más Información</h1>
//             <p>Esta es una aplicación de lista de tareas creada con:</p>
//             <ul>
//                 <li>Node.js + Express</li>
//                 <li>EJS como motor de templates</li>
//                 <li>PostgreSQL como base de datos</li>
//                 <li>HTML5, CSS3 y JavaScript ES6+</li>
//             </ul>
//             <p><a href="/">← Volver a la aplicación</a></p>
//         </body>
//         </html>
//     `);
// });
