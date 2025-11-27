class TaskForm {
  constructor() {
    this.toggleBtn = document.getElementById("toggle-form-btn");
    this.headerToggleBtn = document.getElementById("header-add-btn");
    this.taskForm = document.getElementById("add-task-form");
    this.cancelBtn = document.getElementById("cancel-btn");

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
      this.toggleBtn.addEventListener("click", () => this.showForm());
    }

    // Botón del header
    if (this.headerToggleBtn) {
      this.headerToggleBtn.addEventListener("click", () => this.showForm());
    }

    // Cancelar
    if (this.cancelBtn) {
      this.cancelBtn.addEventListener("click", () => this.hideForm());
    }

    // Submit
    this.taskForm.addEventListener("submit", () => this.handleSubmit());
  }

  showForm() {
    this.taskForm.classList.remove("hidden");
    // Ocultar ambos botones de agregar
    if (this.toggleBtn) this.toggleBtn.classList.add("hidden");
    if (this.headerToggleBtn) this.headerToggleBtn.style.opacity = "0.5";
  }

  hideForm() {
    this.taskForm.classList.add("hidden");
    // Mostrar ambos botones de agregar
    if (this.toggleBtn) this.toggleBtn.classList.remove("hidden");
    if (this.headerToggleBtn) this.headerToggleBtn.style.opacity = "1";
    this.taskForm.reset();
  }

  handleSubmit() {
    setTimeout(() => {
      this.hideForm();
    }, 100);
  }
}

export default TaskForm;

class DropdownMenu {
    constructor() {
        this.dropdown = document.querySelector('.dropdown');
        this.dropdownContent = document.querySelector('.dropdown-content');
        this.timeoutId = null;
        this.init();
    }
    
    init() {
        if (!this.dropdown) return;
        
        this.bindEvents();
    }
    
    bindEvents() {
        // Mostrar menú al hacer hover
        this.dropdown.addEventListener('mouseenter', () => {
            this.showMenu();
        });
        
        // Ocultar menú al salir, con retraso
        this.dropdown.addEventListener('mouseleave', () => {
            this.hideMenuWithDelay();
        });
        
        // Mantener menú visible si el mouse está sobre el contenido
        this.dropdownContent.addEventListener('mouseenter', () => {
            this.cancelHide();
        });
        
        this.dropdownContent.addEventListener('mouseleave', () => {
            this.hideMenuWithDelay();
        });
    }
    
    showMenu() {
        this.cancelHide(); // Cancelar cualquier ocultamiento pendiente
        this.dropdownContent.style.display = 'block';
        this.dropdownContent.style.opacity = '1';
        this.dropdownContent.style.transform = 'translateY(0)';
        this.dropdownContent.style.pointerEvents = 'all';
    }
    
    hideMenuWithDelay() {
        // Esperar 500ms antes de ocultar
        this.timeoutId = setTimeout(() => {
            this.hideMenu();
        }, 500);
    }
    
    hideMenu() {
        this.dropdownContent.style.opacity = '0';
        this.dropdownContent.style.transform = 'translateY(-10px)';
        this.dropdownContent.style.pointerEvents = 'none';
        
        // Ocultar completamente después de la animación
        setTimeout(() => {
            this.dropdownContent.style.display = 'none';
        }, 300);
    }
    
    cancelHide() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }
    }
}

export default DropdownMenu;