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
