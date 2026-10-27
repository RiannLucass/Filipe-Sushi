
const menuToggle = document.querySelector("#menu-toggle");
const navMenu = document.querySelector("#nav-menu");
const navLinks = document.querySelectorAll("#nav-menu a");
const yearElement = document.querySelector("#year");

// Atualiza o ano automaticamente no rodapé.
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Abre e fecha o menu mobile.
function closeMenu() {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    document.body.classList.remove("menu-open");
}

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

        if (isOpen) {
            closeMenu();
        } else {
            navMenu.classList.add("open");
            menuToggle.setAttribute("aria-expanded", "true");
            menuToggle.setAttribute("aria-label", "Fechar menu");
            document.body.classList.add("menu-open");
        }
    });

    // Fecha o menu depois que uma seção é selecionada.
    navLinks.forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    // Fecha o menu ao pressionar Escape.
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    // Garante o fechamento do menu ao voltar para telas maiores.
    window.addEventListener("resize", () => {
        if (window.innerWidth > 700) {
            closeMenu();
        }
    });
}
