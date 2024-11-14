// Array de productos para la galeria!!!

const productos = [
    { nombre: "Classic Brown Leather", precio: 300, imagen: "assets/images/reloj_producto.jpeg" },
    { nombre: "Modern Black Metal", precio: 350, imagen: "assets/images/reloj_producto.jpeg" },
    { nombre: "Vintage Silver", precio: 400, imagen: "assets/images/reloj_producto.jpeg" },
    { nombre: "Luxury Gold", precio: 500, imagen: "assets/images/reloj_producto.jpeg" },
    { nombre: "Sporty Rubber", precio: 200, imagen: "assets/images/reloj_producto.jpeg" },
     { nombre: "Classic Brown Leather", precio: 300, imagen: "assets/images/reloj_producto.jpeg" },
    { nombre: "Modern Black Metal", precio: 350, imagen: "assets/images/reloj_producto.jpeg" },
    { nombre: "Vintage Silver", precio: 400, imagen: "assets/images/reloj_producto.jpeg" },
    { nombre: "Luxury Gold", precio: 500, imagen: "assets/images/reloj_producto.jpeg" },
    { nombre: "Sporty Rubber", precio: 200, imagen: "assets/images/reloj_producto.jpeg" },
     { nombre: "Classic Brown Leather", precio: 300, imagen: "assets/images/reloj_producto.jpeg" },
    { nombre: "Modern Black Metal", precio: 350, imagen: "assets/images/reloj_producto.jpeg" },
    { nombre: "Vintage Silver", precio: 400, imagen: "assets/images/reloj_producto.jpeg" },
    { nombre: "Luxury Gold", precio: 500, imagen: "assets/images/reloj_producto.jpeg" },
    { nombre: "Sporty Rubber", precio: 200, imagen: "assets/images/reloj_producto.jpeg" }
];

// Selecciona el contenedor de la galería

function cargarGaleriaDeFotos(){
    const contenedorGallery = document.querySelector('.contenedor-gallery');
    if(contenedorGallery){
document.addEventListener("DOMContentLoaded", function() {
    // Código para añadir productos
    productos.forEach(producto => {
        const articulo = document.createElement('article');
        articulo.classList.add('articulo');
        
        // Estructura de HTML para cada producto
        articulo.innerHTML = `
            <img src="${producto.imagen}" class="w100" alt="${producto.nombre}">
            <h3 class="myriad rem1">${producto.nombre}</h3>
            <p class="flex-center myriad rem1 color-gris">$${producto.precio}</p>
            <div class="add-text"><p>Añadir</p></div>
        `;
        
        // Añade el artículo al contenedor
        contenedorGallery.appendChild(articulo);
    });
});
    }

// Genera el HTML de cada producto y añádelo al contenedor
}
cargarGaleriaDeFotos();

function changeColumns(columns) {
    const productGrid = document.getElementById("productGrid");
    productGrid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
}



function bannerMovimiento() {
    const bannerSection = document.querySelector('.banner');

    // Verificar si existe el elemento con la clase .banner
    if (bannerSection) {
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
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const ulNavbar = document.querySelector('.ul-navbar');

    menuToggle.addEventListener('click', function () {
        ulNavbar.classList.toggle('responsive');
    });
});

// Llamar a la función para iniciar el proceso
bannerMovimiento();


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
    if (window.scrollY <= 0) {
        navbar.classList.remove("black");
    }
});





// Array de productos con valores de color para cada uno
// Array de productos con valores de color para cada uno
const productosGallery = [
    { nombre: "Chrono Rose Gold", imagen: "/assets/images/reloj_producto.jpeg", precio: "$150", color: "rosegold" },

    
    { nombre: "Chrono Black", imagen: "/assets/images/reloj_producto.jpeg", precio: "$180", color: "black" },
    { nombre: "Chrono Silver", imagen: "/assets/images/reloj_producto.jpeg", precio: "$200", color: "silver" },
    { nombre: "Chrono Black Matte", imagen: "/assets/images/reloj_producto.jpeg", precio: "$220", color: "black" },
    { nombre: "Classic Gold", imagen: "/assets/images/reloj_producto.jpeg", precio: "$170", color: "gold" },
    { nombre: "Classic Black", imagen: "/assets/images/reloj_producto.jpeg", precio: "$160", color: "black" },
    { nombre: "Sport Black", imagen: "/assets/images/reloj_producto.jpeg", precio: "$140", color: "black" },
    { nombre: "Sport Blue", imagen: "/assets/images/reloj_producto.jpeg", precio: "$130", color: "blue" },
    { nombre: "Smartwatch Silver", imagen: "/assets/images/reloj_producto.jpeg", precio: "$250", color: "silver" },
    { nombre: "Smartwatch Black", imagen: "/assets/images/reloj_producto.jpeg", precio: "$240", color: "black" },
    { nombre: "Minimalist White", imagen: "/assets/images/reloj_producto.jpeg", precio: "$120", color: "white" },
    { nombre: "Luxury Gold", imagen: "/assets/images/reloj_producto.jpeg", precio: "$300", color: "gold" },
];

// Seleccionar el contenedor donde se agregarán los productos
const contenedorGalleryShop = document.getElementById('productGrid');

// Función para filtrar y mostrar productos según el color seleccionado
function mostrarProductos(colorSeleccionado = null) {
    // Limpiar el contenedor antes de añadir los productos filtrados
    contenedorGalleryShop.innerHTML = '';

    productosGallery.forEach(producto => {
        // Mostrar el producto solo si su color coincide con el seleccionado
        if (colorSeleccionado === null || producto.color == colorSeleccionado) {
            const articulo = document.createElement('div');
            articulo.classList.add('product-item');

            // Estructura de HTML para cada producto
            articulo.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">                        
                <h4 class="myriad em08">${producto.nombre}</h4>
                <div class="product-price myriad em08 color-gris">
                    ${producto.precio}
                </div>
            `;

            // Añadir el artículo al contenedor
            contenedorGalleryShop.appendChild(articulo);
        }
    });
}

// Inicializar con todos los productos
mostrarProductos();

// Función para manejar los radio buttons de los colores
function actualizarFiltro() {
    const colorSeleccionado = document.querySelector('input[name="color"]:checked')?.value || null;

    // Mostrar productos con el color seleccionado
    mostrarProductos(colorSeleccionado);
}

// Añadir event listeners a los radio buttons
document.querySelectorAll('input[name="color"]').forEach(radio => {
    radio.addEventListener('change', actualizarFiltro);
});



function toggleSidebar() {
            var sidebar = document.getElementById('sidebar');
            var content = document.getElementById('content');
            sidebar.classList.toggle('open');
            content.classList.toggle('shifted');
        }