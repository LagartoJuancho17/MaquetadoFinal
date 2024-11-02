const bannerSection = document.querySelector('.banner');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target); // Dejar de observar después de la primera vez
        }
    });
}, {
    threshold: 0.5
});

observer.observe(bannerSection);


/*NAVBAR DESAPARECEE!!! */

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > lastScrollY) {
        // Si el usuario hace scroll hacia abajo, oculta el navbar
        navbar.classList.add("hidden");
    } else {
        // Si el usuario hace scroll hacia arriba, muestra el navbar y cambia su color a negro
        navbar.classList.remove("hidden");
        navbar.classList.add("black");
    }

    // Actualiza la posición del último scroll
    lastScrollY = window.scrollY;

    // Si está en la parte superior de la página, vuelve al color original
    if (window.scrollY == 0) {
        navbar.classList.remove("black");
    }

});


