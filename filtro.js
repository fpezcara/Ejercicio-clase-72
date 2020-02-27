// A partir de la siguiente lista de productos,
// hacer una web siguiendo el maquetado de ejemplo.

// Al escribir en el input el color o el tipo de un producto,
// se deben filtrar los productos.
// Funciona tanto apretando enter como haciendo clic en el boton.

const productos = [
  {
    nombre: "Zapato negro",
    tipo: "zapato",
    color: "negro",
    img: "./img/taco-negro.jpg"
  },
  {
    nombre: "Zapato azul",
    tipo: "zapato",
    color: "azul",
    img: "./img/taco-azul.jpg"
  },
  {
    nombre: "Bota negra",
    tipo: "bota",
    color: "negro",
    img: "./img/bota-negra.jpg"
  },
  {
    nombre: "Bota azul",
    tipo: "bota",
    color: "azul",
    img: "./img/bota-azul.jpg"
  },
  {
    nombre: "Zapato rojo",
    tipo: "zapato",
    color: "rojo",
    img: "./img/zapato-rojo.jpg"
  }
];

const containerTarjetas = document.getElementById("containerTarjetas");

let tarjetas = productos.reduce((acc, curr) => {
  return (acc += `<div class="cards">
         <div class="img-cards">
         <img src="${curr.img}" class="img-productos" alt="${curr.nombre}"></img>
         </div>
         <div class="nombre-producto"><p>${curr.nombre}</p></div>
         </div>
  `);
}, "");

const form = document.querySelector("form");

containerTarjetas.innerHTML = tarjetas;

 

form.onsubmit = e => {
  e.preventDefault();
  containerTarjetas.innerHTML = '';
  let arrayProductosFiltrados = '';
  let productosFiltrados= '';
    const filtrarTipo = productos.filter(producto => {
    return productosFiltrados = producto.tipo === "zapato";


    const tarjetasFiltradas = productosFiltrados.map(producto => {
      const accTarjetasFiltradas = producto.reduce((acc, curr) => {
      arrayProductosFiltrados = acc + `<div class="cards">
      <div class="img-cards">
      <img src="${curr.img}" class="img-productos" alt="${curr.nombre}"></img>
      </div>
      <div class="nombre-producto"><p>${curr.nombre}</p></div>
      </div>
  `;
  
  return arrayProductosFiltrados  
  console.log(arrayProductosFiltrados)
})
return producto
  // });
  containerTarjetas.innerHTML = accTarjetasFiltradas; 
    });
  });
  
};

// console.log(productosFiltrados)
// form.onsubmit = e => {
//   e.preventDefault();
//   const filtrar = productos.filter(producto => {
//     producto.tipo === "zapato"
// let arrayNuevo =  `<div class="cards">
//     <div class="img-cards">
//     <img src="${producto.img}" class="img-productos" alt="${producto.nombre}"></img>
//     </div>
//     <div class="nombre-producto"><p>${producto.nombre}</p></div>
//     </div>
//  `
//  return arrayNuevo
//   }
//   )

// }

// la idea es que cuando aprieto onsubmit se aplique reduce, no em está saliendo por ahora
