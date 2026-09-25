/* =========================================================
   ANIMACIÓN SUAVE AL HACER SCROLL
========================================================= */

const elements = document.querySelectorAll(
    ".risk-card, .prevention-card, .video-card, .gallery-item"
);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


elements.forEach((element) => {

    element.classList.add("animate");

    observer.observe(element);

});


/* =========================================================
   EFECTO DE SCROLL EN HEADER
========================================================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});
