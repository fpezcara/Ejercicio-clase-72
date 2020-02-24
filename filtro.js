// A partir de la siguiente lista de productos, 
// hacer una web siguiendo el maquetado de ejemplo. 

// Al escribir en el input el color o el tipo de un producto, 
// se deben filtrar los productos. 
// Funciona tanto apretando enter como haciendo clic en el boton. 


const productos = [
  {
    nombre: 'Zapato negro',
    tipo: 'zapato',
    color: 'negro',
    img: './img/taco-negro.jpg',
  },
  {
    nombre: 'Zapato azul',
    tipo: 'zapato',
    color: 'azul',
    img: './img/taco-azul.jpg',
  },
  {
    nombre: 'Bota negra',
    tipo: 'bota',
    color: 'negro',
    img: './img/bota-negra.jpg',
  },
  { nombre: 'Bota azul', tipo: 'bota', color: 'azul', img: './img/bota-azul.jpg' },
  {
    nombre: 'Zapato rojo',
    tipo: 'zapato',
    color: 'rojo',
    img: './img/zapato-rojo.jpg',
  },
];

const containerTarjetas = document.getElementById("containerTarjetas")

let tarjetas = productos.reduce((acc, curr) => {
  return acc += `<div class="cards">
         <div class="img-cards">
         <img src="${curr.img}" class="img-productos" alt="${curr.nombre}"></img>
         </div>
         <div class="nombre-producto"><p>${curr.nombre}</p></div>
         </div>
  `
}, "")

containerTarjetas.innerHTML = tarjetas;

// me falta hacer otro div debajo de la foto donde pongo lo que es el zapato
// tengo que ver como hacer para que la foto se vea mejor que lo que se ve

