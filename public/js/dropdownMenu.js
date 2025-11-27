// public/js/dropdownMenu.js
class DropdownMenu {
  constructor() {
    this.dropdown = document.querySelector(".dropdown");
    this.dropdownContent = document.querySelector(".dropdown-content");
    this.timeoutId = null;
    this.isMenuOpen = false;
    this.init();
  }

  init() {
    if (!this.dropdown || !this.dropdownContent) {
      console.warn("Elementos del menú no encontrados");
      return;
    }

    this.bindEvents();

    // Asegurar que el menú esté oculto al inicio
    this.hideMenu();
  }

  bindEvents() {
    // Mostrar menú al hacer hover en el botón
    this.dropdown.addEventListener("mouseenter", () => {
      this.showMenu();
    });

    // Ocultar menú con retraso al salir del botón
    this.dropdown.addEventListener("mouseleave", (e) => {
      // Verificar si el mouse fue al contenido del menú
      if (!e.relatedTarget || !this.dropdownContent.contains(e.relatedTarget)) {
        this.hideMenuWithDelay();
      }
    });

    // Mantener menú visible cuando el mouse está en el contenido
    this.dropdownContent.addEventListener("mouseenter", () => {
      this.cancelHide();
    });

    // Ocultar menú con retraso al salir del contenido
    this.dropdownContent.addEventListener("mouseleave", (e) => {
      // Verificar si el mouse fue al botón del menú
      if (!e.relatedTarget || !this.dropdown.contains(e.relatedTarget)) {
        this.hideMenuWithDelay();
      }
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener("click", (e) => {
      if (
        !this.dropdown.contains(e.target) &&
        !this.dropdownContent.contains(e.target)
      ) {
        this.hideMenu();
      }
    });
  }

  showMenu() {
    this.cancelHide();
    this.isMenuOpen = true;
    this.dropdownContent.style.display = "block";

    // Pequeño delay para que la animación funcione
    setTimeout(() => {
      this.dropdownContent.style.opacity = "1";
      this.dropdownContent.style.transform = "translateY(0)";
      this.dropdownContent.style.pointerEvents = "all";
    }, 10);
  }

  hideMenuWithDelay() {
    this.timeoutId = setTimeout(() => {
      this.hideMenu();
    }, 300); // 300ms de retraso
  }

  hideMenu() {
    this.isMenuOpen = false;
    this.dropdownContent.style.opacity = "0";
    this.dropdownContent.style.transform = "translateY(-10px)";
    this.dropdownContent.style.pointerEvents = "none";

    // Ocultar completamente después de la animación
    setTimeout(() => {
      if (!this.isMenuOpen) {
        this.dropdownContent.style.display = "none";
      }
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
