const movingBackground = document.querySelector('.moving-background');

document.addEventListener('mousemove', (event) => {
    const x = (event.clientX / window.innerWidth) * 50;
    const y = (event.clientY / window.innerHeight) * 50;

    // Mueve el fondo PNG en función del cursor
    movingBackground.style.transform = `translate(-${x}%, -${y}%)`;
});