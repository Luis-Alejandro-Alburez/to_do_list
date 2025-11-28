// public/js/taskForm.js - VERSIÓN CORREGIDA
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

  showForm() {
    console.log("📝 Mostrando formulario");
    this.taskForm.classList.remove("hidden");

    // Ocultar botón del footer
    if (this.toggleBtn) {
      this.toggleBtn.classList.add("hidden");
    }

    // El botón del header se oculta automáticamente porque el menú se cierra
  }

  hideForm() {
    console.log("👋 Ocultando formulario");
    this.taskForm.classList.add("hidden");

    // Mostrar botón del footer
    if (this.toggleBtn) {
      this.toggleBtn.classList.remove("hidden");
    }

    this.taskForm.reset();
  }

  handleSubmit() {
    console.log("✅ Manejando envío del formulario");
    setTimeout(() => {
      this.hideForm();
    }, 100);
  }
}

export default TaskForm;
