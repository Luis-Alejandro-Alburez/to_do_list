// public/js/taskForm.js - VERSIÓN CON EDICIÓN
class TaskForm {
  constructor() {
    this.toggleBtn = document.getElementById("toggle-form-btn");
    this.headerToggleBtn = document.getElementById("header-add-btn");
    this.taskForm = document.getElementById("add-task-form");
    this.cancelBtn = document.getElementById("cancel-btn");

    console.log("🔍 Elementos encontrados:", {
      toggleBtn: this.toggleBtn,
      headerToggleBtn: this.headerToggleBtn,
      taskForm: this.taskForm,
      cancelBtn: this.cancelBtn,
    });

    this.init();
  }

  init() {
    if (!this.taskForm) {
      console.warn("Formulario no encontrado");
      return;
    }

    this.bindEvents();
    this.bindEditEvents(); // Nueva función para edición
  }

  bindEvents() {
    // Botón original (footer)
    if (this.toggleBtn) {
      this.toggleBtn.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("🖱️ Botón footer clickeado");
        this.showForm();
      });
    } else {
      console.warn("❌ Botón footer no encontrado");
    }

    // Botón del header (en el menú desplegable)
    if (this.headerToggleBtn) {
      this.headerToggleBtn.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("🖱️ Botón header clickeado");
        this.showForm();
      });
    } else {
      console.warn("❌ Botón header no encontrado");
    }

    // Cancelar
    if (this.cancelBtn) {
      this.cancelBtn.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("❌ Botón cancelar clickeado");
        this.hideForm();
      });
    } else {
      console.warn("❌ Botón cancelar no encontrado");
    }

    // Submit del formulario
    this.taskForm.addEventListener("submit", (e) => {
      console.log("📤 Formulario enviado");
      this.handleSubmit();
    });
  }

  // NUEVA FUNCIÓN: Manejar eventos de edición
  bindEditEvents() {
    console.log("🔧 Configurando eventos de edición...");

    // Hacer clic en el texto de la tarea para editar
    document.querySelectorAll(".task-text").forEach((taskText) => {
      taskText.addEventListener("click", (e) => {
        console.log("📝 Click en texto de tarea");
        this.showEditForm(e.target);
      });
    });

    // Cancelar edición
    document.querySelectorAll(".cancel-edit-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("❌ Cancelando edición");
        this.hideEditForm(e.target);
      });
    });

    console.log(
      `✅ Eventos de edición configurados: ${
        document.querySelectorAll(".task-text").length
      } tareas encontradas`
    );
  }

  // NUEVA FUNCIÓN: Mostrar formulario de edición
  showEditForm(taskTextElement) {
    const taskItem = taskTextElement.closest(".task-item");
    const taskId = taskTextElement.getAttribute("data-task-id");

    console.log(`✏️ Editando tarea ID: ${taskId}`);

    if (!taskItem) {
      console.error("❌ No se pudo encontrar el elemento de la tarea");
      return;
    }

    // Ocultar vista normal, mostrar formulario de edición
    taskItem.classList.add("editing");

    // Enfocar el input de edición
    const editInput = taskItem.querySelector(".edit-task-input");
    if (editInput) {
      editInput.focus();
      editInput.select();
      console.log("🎯 Input de edición enfocado");
    } else {
      console.error("❌ No se pudo encontrar el input de edición");
    }
  }

  // NUEVA FUNCIÓN: Ocultar formulario de edición
  hideEditForm(cancelButton) {
    const editForm = cancelButton.closest(".edit-form");
    const taskItem = editForm.closest(".task-item");

    if (!taskItem) {
      console.error("❌ No se pudo encontrar el elemento de la tarea");
      return;
    }

    console.log("👋 Ocultando formulario de edición");

    // Ocultar formulario de edición, mostrar vista normal
    taskItem.classList.remove("editing");

    // Resetear el formulario
    const form = taskItem.querySelector(".edit-task-form");
    if (form) {
      form.reset();
    }
  }

  showForm() {
    console.log("📝 Mostrando formulario de agregar");
    this.taskForm.classList.remove("hidden");

    // Ocultar botón del footer
    if (this.toggleBtn) {
      this.toggleBtn.classList.add("hidden");
    }

    // El botón del header se oculta automáticamente porque el menú se cierra
  }

  hideForm() {
    console.log("👋 Ocultando formulario de agregar");
    this.taskForm.classList.add("hidden");

    // Mostrar botón del footer
    if (this.toggleBtn) {
      this.toggleBtn.classList.remove("hidden");
    }

    this.taskForm.reset();
  }

  handleSubmit() {
    console.log("✅ Manejando envío del formulario de agregar");
    setTimeout(() => {
      this.hideForm();
    }, 100);
  }
}

export default TaskForm;
