const menuToggle = document.querySelector("#menu-toggle");
const nav = document.querySelector("#nav");
const navLinks = document.querySelectorAll(".nav a");

// Função para fechar o menu
function fecharMenu() {
    nav.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
}

// Abre e fecha o menu
menuToggle.addEventListener("click", () => {
    const menuAberto = nav.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", String(menuAberto));
    menuToggle.setAttribute(
        "aria-label",
        menuAberto ? "Fechar menu" : "Abrir menu"
    );
});

// Fecha ao clicar em um link
navLinks.forEach((link) => {
    link.addEventListener("click", fecharMenu);
});

// Fecha ao pressionar ESC
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        fecharMenu();
    }
});

// Fecha ao voltar para a versão desktop
window.addEventListener("resize", () => {
    if (window.innerWidth > 700) {
        fecharMenu();
    }
});

// MENSAGENS AUTOMÁTICAS DO WHATSAPP

const numeroWhatsApp = "5519996166549";

const mensagensWhatsApp = {
    "whatsapp-contato": 
        "Olá! Conheci o Filipe Sushi pelo site e gostaria de saber mais informações. Poderia me ajudar?",

    "whatsapp-pedido": 
        "Olá! Gostaria de fazer um pedido no Filipe Sushi. Poderia me atender?",

    "whatsapp-mensagem": 
        "Olá! Encontrei a página do Filipe Sushi e gostaria de tirar uma dúvida."
};

Object.entries(mensagensWhatsApp).forEach(([id, mensagem]) => {
    const botao = document.getElementById(id);

    if (botao) {
        botao.href = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    }
});

// MODAL POLÍTICA DE PRIVACIDADE

const abrirPolitica = document.querySelector("#abrir-politica");
const fecharPolitica = document.querySelector("#fechar-politica");
const modalPolitica = document.querySelector("#privacy-modal");

function abrirModal() {
    modalPolitica.classList.add("active");
    modalPolitica.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function fecharModal() {
    modalPolitica.classList.remove("active");
    modalPolitica.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

abrirPolitica.addEventListener("click", (event) => {
    event.preventDefault();
    abrirModal();
});

fecharPolitica.addEventListener("click", fecharModal);

// Fecha ao clicar fora da janela
modalPolitica.addEventListener("click", (event) => {
    if (event.target === modalPolitica) {
        fecharModal();
    }
});

// Fecha ao pressionar ESC
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modalPolitica.classList.contains("active")) {
        fecharModal();
    }
});