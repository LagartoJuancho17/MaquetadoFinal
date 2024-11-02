const productos = [
    { nombre: 'Classic Brown Leather', precio: 300, imagen: 'reloj_producto.jpeg' },
    { nombre: 'Classic Black Leather', precio: 320, imagen: 'reloj_producto.jpeg' },
    { nombre: 'Sport Steel', precio: 350, imagen: 'reloj_producto.jpeg' },
    { nombre: 'Gold Edition', precio: 400, imagen: 'reloj_producto.jpeg' },
    { nombre: 'Elegant Silver', precio: 330, imagen: 'reloj_producto.jpeg' },
    { nombre: 'Retro Classic', precio: 290, imagen: 'reloj_producto.jpeg' },
    { nombre: 'Luxury Black', precio: 450, imagen: 'reloj_producto.jpeg' },
    { nombre: 'Simple Elegance', precio: 310, imagen: 'reloj_producto.jpeg' },
    { nombre: 'Modern Leather', precio: 340, imagen: 'reloj_producto.jpeg' },
    { nombre: 'Vintage Edition', precio: 370, imagen: 'reloj_producto.jpeg' },
]

//usamos querySelector para seleccionar el elemento HTML que tiene la clase .contenedor-gallery
const contenedorGallery = document.querySelector('.contenedor-gallery');

/*
Aquí empezamos un bucle forEach para recorrer cada elemento 
dentro del array productos. Por cada producto, se ejecuta el siguiente bloque de código.
*/



productos.forEach(function (producto) {
    //Crea el articulo
    const articulo = document.createElement('article');
    articulo.classList.add('articulo');

    const img = document.createElement('img');
    img.src = producto.imagen;
    img.alt = producto.nombre;

    // Crear el h1
    const h1 = document.createElement('h1');
    h1.textContent = producto.nombre;
    h1.classList.add('myriad', 'rem1');

    // Crear el p (precio)
    const p = document.createElement('p');
    p.textContent = `$${producto.precio}`;
    p.classList.add('flex-center', 'myriad', 'rem1', 'color-gris');

    // Agregar los elementos al artículo
    articulo.appendChild(img);
    articulo.appendChild(h1);
    articulo.appendChild(p);

    // Añadir el artículo a la galería
    contenedorGallery.appendChild(articulo);
});
