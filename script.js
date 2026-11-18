// ==========================================
// MENU MOBILE
// ==========================================

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});


// Fecha o menu quando clicar em algum link

const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});


// ==========================================
// HEADER AO ROLAR A PÁGINA
// ==========================================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// ==========================================
// DEPOIMENTOS
// ==========================================

const testimonials = document.querySelectorAll(".testimonial");

const prevButton = document.getElementById("prevTestimonial");
const nextButton = document.getElementById("nextTestimonial");

const dotsContainer = document.getElementById("testimonialDots");

let currentTestimonial = 0;


// Cria os indicadores

testimonials.forEach((_, index) => {

    const dot = document.createElement("span");

    dot.classList.add("dot");

    if (index === 0) {
        dot.classList.add("active");
    }

    dot.addEventListener("click", () => {
        showTestimonial(index);
    });

    dotsContainer.appendChild(dot);

});


const dots = document.querySelectorAll(".dot");


function showTestimonial(index) {

    testimonials.forEach(testimonial => {
        testimonial.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    testimonials[index].classList.add("active");
    dots[index].classList.add("active");

    currentTestimonial = index;
}


nextButton.addEventListener("click", () => {

    let next = currentTestimonial + 1;

    if (next >= testimonials.length) {
        next = 0;
    }

    showTestimonial(next);

});


prevButton.addEventListener("click", () => {

    let previous = currentTestimonial - 1;

    if (previous < 0) {
        previous = testimonials.length - 1;
    }

    showTestimonial(previous);

});


// Troca automaticamente a cada 6 segundos

setInterval(() => {

    let next = currentTestimonial + 1;

    if (next >= testimonials.length) {
        next = 0;
    }

    showTestimonial(next);

}, 6000);


// ==========================================
// ANIMAÇÃO DE APARECIMENTO
// ==========================================

const animatedElements = document.querySelectorAll(
    ".feature, .service-card, .about-content, .about-images, .gallery-item, .contact-card"
);


const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


animatedElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});


// Adiciona a classe visual através de uma regra dinâmica

const style = document.createElement("style");

style.textContent = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;

document.head.appendChild(style);


// ==========================================
// WHATSAPP
// ==========================================

// O número da clínica fica centralizado aqui.
// Para trocar o número, altere somente esta variável.

const whatsappNumber = "5511999999999";


// Links que precisam usar o WhatsApp

const whatsappLinks = document.querySelectorAll(
    'a[href*="wa.me"]'
);


whatsappLinks.forEach(link => {

    link.addEventListener("click", () => {

        console.log(
            `Abrindo atendimento pelo WhatsApp: ${whatsappNumber}`
        );

    });

});


// ==========================================
// PROTEÇÃO SIMPLES CONTRA LINKS VAZIOS
// ==========================================

const emptyLinks = document.querySelectorAll('a[href="#"]');

emptyLinks.forEach(link => {

    link.addEventListener("click", event => {
        event.preventDefault();
    });

});