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
    { nombre: "Chrono Camuflado Black", imagen: "/assets/images/GalleryImagenes/RelojGallery2.0.webp",imagenHover: "/assets/images/GalleryImagenes/RelojGallery2.jpg", precio: "$150", color: "black" },
    { nombre: "Chrono Black", imagen: "/assets/images/GalleryImagenes/RelojGallery1.0.webp",imagenHover: "/assets/images/GalleryImagenes/RelojGallery1.webp", precio: "$180", color: "black" },
    { nombre: "Chrono Rose Gold", imagen: "/assets/images/GalleryImagenes/RelojGallery3.0.jpg",imagenHover: "/assets/images/GalleryImagenes/RelojGallery3.jpg", precio: "$180", color: "rosegold" },
    { nombre: "Gunmetal Black Tan", imagen: "/assets/images/GalleryImagenes/RelojGallery4.0.webp",imagenHover: "/assets/images/GalleryImagenes/RelojGallery4.webp", precio: "$180", color: "golden" },
    { nombre: "Leather Gray Belt", imagen: "/assets/images/GalleryImagenes/RelojGallery5.0.jpg",imagenHover: "/assets/images/GalleryImagenes/RelojGallery5.jpg", precio: "$180", color: "silver" },
    { nombre: "Bristol Silver Link", imagen: "/assets/images/GalleryImagenes/RelojGallery6.0.webp",imagenHover: "/assets/images/GalleryImagenes/RelojGallery6.webp", precio: "$180", color: "silver" },
    { nombre: "Bourbon 360 Gold", imagen: "/assets/images/GalleryImagenes/RelojGallery7.0.jpg",imagenHover: "/assets/images/GalleryImagenes/RelojGallery7.jpg", precio: "$180", color: "green" },
    { nombre: "Bristol Rose Gold", imagen: "/assets/images/GalleryImagenes/RelojGallery8.0.jpg",imagenHover: "/assets/images/GalleryImagenes/RelojGallery8.jpg", precio: "$180", color: "rosegold" },
    { nombre: "Bristol Gold Link", imagen: "/assets/images/GalleryImagenes/RelojGallery9.0.jpg",imagenHover: "/assets/images/GalleryImagenes/RelojGallery9.jpg", precio: "$180", color: "green" },
    { nombre: "Blue Sky", imagen: "/assets/images/GalleryImagenes/RelojGallery10.0.jpg",imagenHover: "/assets/images/GalleryImagenes/RelojGallery10.jpg", precio: "$180", color: "blue" },
    { nombre: "Bourbon Silver", imagen: "/assets/images/GalleryImagenes/RelojGallery11.0.webp",imagenHover: "/assets/images/GalleryImagenes/RelojGallery11.webp", precio: "$180", color: "brown" },
    { nombre: "Chrono Rouse Gold", imagen: "/assets/images/GalleryImagenes/RelojGallery1.0.webp",imagenHover: "/assets/images/GalleryImagenes/RelojGallery1.webp", precio: "$180", color: "brown" },
    
];

// Seleccionar el contenedor donde se agregarán los productos
const contenedorGalleryShop = document.getElementById('productGrid');

function mostrarProductos(colorSeleccionado = null) {
    contenedorGalleryShop.innerHTML = '';

    productosGallery.forEach(producto => {
        if (colorSeleccionado === null || producto.color == colorSeleccionado) {
            const articulo = document.createElement('div');
            articulo.classList.add('product-item');

            articulo.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">                        
                <h4 class="myriad em08">${producto.nombre}</h4>
                <div class="product-price myriad em08 color-gris">
                    ${producto.precio}
                </div>
            `;

            const imgElement = articulo.querySelector('.product-image');

            // Eventos para cambiar la imagen al pasar el mouse
            imgElement.addEventListener('mouseenter', () => {
                imgElement.src = producto.imagenHover;
            });

            imgElement.addEventListener('mouseleave', () => {
                imgElement.src = producto.imagen;
            });

            contenedorGalleryShop.appendChild(articulo);
        }
    });
}

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


document.querySelectorAll('.tab-link').forEach(link => {
            link.addEventListener('click', function() {
                document.querySelectorAll('.tab-link').forEach(item => item.classList.remove('active'));
                document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
                this.classList.add('active');
                document.getElementById(this.getAttribute('data-tab')).classList.add('active');
                
                if (this.getAttribute('data-tab') === 'additional-info') {
                    document.querySelector('.image-content').style.display = 'none';
                } else {
                    document.querySelector('.image-content').style.display = 'flex';
                }
            });
        });