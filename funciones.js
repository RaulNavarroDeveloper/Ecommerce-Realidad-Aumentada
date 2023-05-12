"use strict";

// Espacios HTML donde se quiere visualizar los elementos creados con JS.

let seccionProductos = document.querySelector("#productos");

let divFlex = document.createElement("div");
divFlex.className = "card-contain row";

let seccionProductos2 = document.querySelector("#productos-metaverso");

let divFlex2 = document.createElement("div");
divFlex2.className = "card-contain row";

let seccionProductos3 = document.querySelector("#accesorios");

let divFlex3 = document.createElement("div");
divFlex3.className = "card-contain row";

// Caracteristicas del producto

let productos = [
  {
    id: 1,
    nombre: "Lentes VR RX1000 Pro",
    descripcion:
      "Lentes virtuales VR RX1000 super ligero, cómodos y HD. Diseño especifico para gamers.",
    precio: 12000,
    Oferta: 10800,
    imagen: "img/productos/VR_headsets/oculus1.png",
    categoria: "1",
  },
  {
    id: 2,
    nombre: "Lentes VA F300 Basic",
    descripcion:
      "Lentes virtuales VA F300 básicos, excelente diseño para el uso en casa.",
    precio: 9000,
    Oferta: 8100,
    imagen: "img/productos/VR_headsets/oculus2.png",
    categoria: "1",
  },
  {
    id: 3,
    nombre: "Lentes VR RX800 Basic",
    descripcion:
      "Lentes virtuales VR RX800 básicos, diseño apto y recomendado para niños.",
    precio: 6800,
    Oferta: 6120,
    imagen: "img/productos/VR_headsets/oculus3.png",
    categoria: "1",
  },
  {
    id: 4,
    nombre: "Tierra Virtual Oceánica",
    descripcion:
      "Tierra virtual oceánica, generada en el mundo de Zeus. Permite la entrada al paraiso acuático",
    precio: 10000,
    Oferta: 9000,
    imagen: "img/productos/tierras_virtuales/tierra-opt1.png",
    categoria: "2",
  },
  {
    id: 5,
    nombre: "Tierra Virtual Feria",
    descripcion:
      "Tierra virtual entretenimiento, increible lugar para jugar y divertirte con tus amigos. Más de 15 juegos de realidad virtual para jugar",
    precio: 15000,
    Oferta: 13500,
    imagen: "img/productos/tierras_virtuales/tierra-opt2.png",
    categoria: "2",
  },
  {
    id: 6,
    nombre: "Tierra Virtual Espacial",
    descripcion:
      "Tierra virtual espacial. Si tu sueño es explorar el universo, esta tierra virtual es para tí. Puedes visitar civilizaciones y planetas extraños",
    precio: 16000,
    Oferta: 14400,
    imagen: "img/productos/tierras_virtuales/tierra-opt3.png",
    categoria: "2",
  },
  {
    id: 7,
    nombre: "Tierra Virtual Espacial",
    descripcion:
      "Tierra virtual espacial. Si tu sueño es explorar el universo, esta tierra virtual es para tí. Puedes visitar civilizaciones y planetas extraños",
    precio: 16000,
    Oferta: 14400,
    imagen: "img/productos/tierras_virtuales/tierra-opt4.png",
    categoria: "2",
  },
  {
    id: 8,
    nombre: "Tierra Virtual Espacial",
    descripcion:
      "Tierra virtual espacial. Si tu sueño es explorar el universo, esta tierra virtual es para tí. Puedes visitar civilizaciones y planetas extraños",
    precio: 16000,
    Oferta: 14400,
    imagen: "img/productos/tierras_virtuales/tierra-opt6.png",
    categoria: "2",
  },
  {
    id: 9,
    nombre: "Funda Lentes VR/VA",
    descripcion:
      "Tierra virtual espacial. Si tu sueño es explorar el universo, esta tierra virtual es para tí. Puedes visitar civilizaciones y planetas extraños",
    precio: 16000,
    Oferta: 14400,
    imagen: "img/productos/accesorios/accesorio_funda.png",
    categoria: "3",
  },
  {
    id: 10,
    nombre: "Cargador Lentes VR/VA",
    descripcion:
      "Tierra virtual espacial. Si tu sueño es explorar el universo, esta tierra virtual es para tí. Puedes visitar civilizaciones y planetas extraños",
    precio: 16000,
    Oferta: 14400,
    imagen: "img/productos/accesorios/accesorio_cargador.png",
    categoria: "3",
  },
  {
    id: 11,
    nombre: "Kit de Repuesto VR/VA",
    descripcion:
      "Tierra virtual espacial. Si tu sueño es explorar el universo, esta tierra virtual es para tí. Puedes visitar civilizaciones y planetas extraños",
    precio: 16000,
    Oferta: 14400,
    imagen: "img/productos/accesorios/accesorio_kit_repuesto.png",
    categoria: "3",
  },
  {
    id: 12,
    nombre: "Protector Facial",
    descripcion:
      "Tierra virtual espacial. Si tu sueño es explorar el universo, esta tierra virtual es para tí. Puedes visitar civilizaciones y planetas extraños",
    precio: 16000,
    Oferta: 14400,
    imagen: "img/productos/accesorios/accesorio_protector_facial.png",
    categoria: "3",
  },
];

// Informacion básica del carrito para obtener el resto de información de cada producto
let carrito = {
  productosIds: [],
  cantidades: [],
  total: 0,
  subtotal: 0,
};
// Recorrida de cada producto particular para crear la sección de compra en el HTML

for (let producto of productos) {
  let divP = document.createElement("div");
  divP.className = "producto card col-md-3 mb-5 mx-auto";

  let figureP = document.createElement("figure");
  figureP.style.textAlign = "center";

  let imgP = document.createElement("img");
  imgP.style.height = "200px";
  imgP.style.width = "200px";

  let divTitulo = document.createElement("div");

  let pTitulo = document.createElement("p");
  pTitulo.className = "text-center mx-auto";
  pTitulo.style.cssText = "width: 90%";

  let divPrecio = document.createElement("div");
  divPrecio.className = "d-flex justify-content-center";

  let precio = document.createElement("p");
  precio.className = "text-decoration-line-through pe-5";

  let precioOferta = document.createElement("p");
  precioOferta.className = "fw-bold h5";
  precioOferta.style.color = "#17a08b";

  let divBtn = document.createElement("div");
  divBtn.style.display = "flex";
  divBtn.style.justifyContent = "space-evenly";
  divBtn.className = "div-compra";

  let btncompra = document.createElement("button");
  btncompra.className = "add";
  btncompra.dataset.id = producto.id;
  btncompra.dataset.val = producto.Oferta;
  btncompra.dataset.precio = producto.precio;
  btncompra.dataset.cat = producto.categoria;

  let pAdd = document.createElement("p");
  pAdd.innerHTML = "Comprar";
  pAdd.className = "h4 m-0";
  pAdd.style.fontWeight = "bold";
  pAdd.style.fontSize = "20px";

  // let btnver = document.createElement('button')
  // btnver.style.width = '120px';
  // btnver.style.height = '40px';
  // btnver.className = 'ver';
  // btnver.dataset.id = producto.id;
  // btnver.dataset.val = producto.Oferta;
  // btnver.dataset.cat = producto.categoria;
  // btnver.style.borderRadius = '50px';

  // let h3ver = document.createElement('h4');
  // h3ver.innerHTML = 'Ver';
  // h3ver.style.fontWeight = 'bold';
  // h3ver.style.fontSize = '20px';

  imgP.src = producto.imagen;
  pTitulo.innerHTML = producto.nombre;
  precio.innerHTML = `$${producto.precio}`;
  precioOferta.innerHTML = `$${producto.Oferta}`;

  seccionProductos.append(divFlex);
  seccionProductos2.append(divFlex2);
  seccionProductos3.append(divFlex3);

  if (producto.id <= 4) {
    divFlex.append(divP);
  }
  if (producto.id > 4 && producto.id <= 8) {
    divFlex2.append(divP);
  }
  if (producto.id > 8) {
    divFlex3.append(divP);
  }

  divP.append(figureP, divTitulo, divPrecio, divBtn);
  figureP.append(imgP);
  divTitulo.append(pTitulo);
  divPrecio.append(precio, precioOferta);
  divBtn.append(btncompra);
  btncompra.append(pAdd);
  // btnver.append(h3ver);
}

// Etiquetas ya establecidas en el HTML a detectar con JS para su manipulación.
let verCarrito = document.querySelector(".carrito-navbar");
let cantidadCarrito = document.querySelector(".nro-qty > span");
let totalCarrito = document.querySelector(".total-carrito > span");

// Etiquetas a manipular generadas con JS.
let btnAdd = document.querySelectorAll(".add");
let btnDel = document.querySelectorAll(".del");

// Imprimimos la información del JS en el HTML para mostrar el carrito.

const mostrarCarrito = () => {
  let cantidadTotal = carrito.cantidades.reduce((a, b) => a + b, 0);
  cantidadCarrito.innerHTML = `${cantidadTotal}`;
  totalCarrito.innerHTML = `$${carrito.total}`;
  console.log(carrito.subtotal);
  infoProductosCarrito();
};

const infoProductosCarrito = () => {
  carrito.productosIds.forEach((productoID, indice) => {
    let infoProducto = productos.filter(
      (producto) => producto.id == productoID
    )[0];
    console.log(infoProducto);
  });
};

const modalCarrito = () => {
  let cantidadTotal = carrito.cantidades.reduce((a, b) => a + b, 0);

  // Seccion del carrito
  let hojaCarrito = document.createElement("div");
  hojaCarrito.style.cssText =
    "width: 450px; height: 100vh; background-color: white; position:fixed; top: 0; right: 0; overflow-y: scroll; z-index: 21;";
  hojaCarrito.setAttribute("transition-style", "in:wipe:left");

  document.body.after(hojaCarrito);

  //Eliminar hoja carrito si se aprieta el escape:
  window.addEventListener("keydown", (e) => {
    console.log(e.key);
    if (e.key == "Escape" && hojaCarrito) {
      hojaCarrito.remove();
    }
  });

  // Titulo del carrito

  let divTit = document.createElement("div");
  let h2Tit = document.createElement("h4");
  let pTit = document.createElement("p");
  let spanTit = document.createElement("span");

  divTit.style.cssText = "display: flex; margin-left: 1rem; margin-top: 1rem;";

  h2Tit.innerHTML = "Mi carrito";
  h2Tit.style.cssText = "margin-right: 1rem;";

  pTit.innerHTML = " Items)";
  spanTit.innerHTML = `(${cantidadTotal}`;

  if (spanTit.innerHTML == "(1") {
    pTit.innerHTML = " Item)";
  }

  hojaCarrito.append(divTit);
  divTit.append(h2Tit);
  divTit.append(pTit);
  pTit.prepend(spanTit);

  // Icono de cerrar
  let divA = document.createElement("div");
  let aCerrar = document.createElement("a");
  let iCerrar = document.createElement("i");

  divA.style.cssText =
    "width: 60px; height: 60px; position: absolute; right: 0; top: 0;";
  aCerrar.href = "#";
  aCerrar.innerHTML = "";
  aCerrar.style.cssText =
    "display: flex; justify-content: flex-end; margin-right: 1rem";

  iCerrar.className = "uil uil-times-circle";
  iCerrar.style.fontSize = "40px";

  hojaCarrito.append(divA);
  divA.append(aCerrar);
  aCerrar.append(iCerrar);

  aCerrar.addEventListener("click", (e) => {
    e.preventDefault();
    hojaCarrito.remove();
  });
  let contenedorPrecios = document.createElement("div");
  contenedorPrecios.style.cssText =
    "width:85%; margin: auto; margin-top: 1.5rem;";

  // Si el carrito está vacío:
  const carritoVacio = () => {
    let divCarritoVacio = document.createElement("div");
    let figureCarritoVacio = document.createElement("figure");
    let imgCarritoVacio = document.createElement("img");
    let divTitCarritoVacio = document.createElement("div");
    let h3TitCarritoVacio = document.createElement("h3");
    let pCarritoVacio = document.createElement("p");
    let spanCarritoVacio = document.createElement("span");
    let divBotonCarritoVacio = document.createElement("div");
    let aBotonCarritoVacio = document.createElement("a");
    let h4BotonCarritoVacio = document.createElement("h4");

    divCarritoVacio.style.cssText =
      "width: 300px; margin: auto;";

    figureCarritoVacio.style.cssText =
      "display: flex; justify-content: center; margin: 0;";

    imgCarritoVacio.src = "img/empty-cart.png";
    imgCarritoVacio.alt = "Carrito de compras vacío";
    imgCarritoVacio.style.width = "200px";
    imgCarritoVacio.style.height = "200px";

    divTitCarritoVacio.style.cssText = "margin-auto;";

    h3TitCarritoVacio.style.cssText = "text-align: center;";
    h3TitCarritoVacio.innerHTML = "Tu carrito está vacío";

    pCarritoVacio.style.cssText = "text-align: center;";
    pCarritoVacio.innerHTML =
      "Parece que aún no agregaste ningún producto a tu Carrito,";

    spanCarritoVacio.innerHTML = " ¿Querés agregar uno?";
    spanCarritoVacio.style.cssText = "font-weight: 600;";

    h4BotonCarritoVacio.style.cssText = "margin:0;";
    h4BotonCarritoVacio.innerHTML = "Ir a productos";

    divBotonCarritoVacio.className = "div-carrito-vacio";
    aBotonCarritoVacio.href = "#productos";
    aBotonCarritoVacio.style.cssText =
      "display:flex; justify-content: center; align-items: center; color:white;";

    aBotonCarritoVacio.addEventListener("click", (e) => {
      hojaCarrito.remove();
    });

    hojaCarrito.append(divCarritoVacio, divBotonCarritoVacio);
    divCarritoVacio.append(
      figureCarritoVacio,
      divTitCarritoVacio,
      pCarritoVacio
    );
    figureCarritoVacio.append(imgCarritoVacio);
    divTitCarritoVacio.append(h3TitCarritoVacio);
    pCarritoVacio.append(spanCarritoVacio);
    divBotonCarritoVacio.append(aBotonCarritoVacio);
    aBotonCarritoVacio.append(h4BotonCarritoVacio);
    if (carrito.productosIds.length == 0 && contenedorPrecios) {
      contenedorPrecios.remove();
    }
        borrarBotonesCheckOut();
  };

  if (carrito.productosIds.length == 0) {
    carritoVacio();
  }

  // Informacion de subtotal y total
  let divSubtotal = document.createElement("div");
  divSubtotal.style.cssText =
    "display: flex; justify-content: space-between; width: 80%; margin: auto;";
  let pSubTotal = document.createElement("p");
  pSubTotal.innerHTML = "Subtotal";
  pSubTotal.style.margin = 0;
  let spanSubtotal = document.createElement("span");
  // spanSubtotal.innerHTML = `$${subtotalProd}`;
  // spanTotal.innerHTML = `$${carrito.total}`;

  let divTotal = document.createElement("div");
  divTotal.style.cssText =
    "display: flex; justify-content: space-between; width: 80%; margin: auto; margin-top: 0.5rem;";
  let pTotal = document.createElement("p");
  pTotal.innerHTML = "Total";
  pTotal.style.cssText =
    "color: #7d4eaa; font-size: 25px; margin: 0; font-weight: bold;";
  let spanTotal = document.createElement("span");
  spanTotal.style.cssText =
    "color: #7d4eaa; font-size: 25px; font-weight: bold;";

  // Recorrer informacion del array productos
  carrito.productosIds.forEach((productoID, indice) => {
    let cantidadPs = +carrito.cantidades[indice];
    let infoProducto = productos.filter(
      (producto) => producto.id == productoID
    )[0];
    let ofertaProducto = infoProducto.Oferta;
    let precioProducto = infoProducto.precio;

    let divContenedorCarrito = document.createElement("div");
    let divAcarrito = document.createElement("div");
    let Acarrito = document.createElement("a");
    let iCarrito = document.createElement("i");
    let figureCarrito = document.createElement("figure");
    let imgCarrito = document.createElement("img");
    let divNombreCarrito = document.createElement("div");
    let pNombreCarrito = document.createElement("p");
    let flexTotalyCantidad = document.createElement("div");
    let divTotalCarrito = document.createElement("div");
    let ofertaTotalCarrito = document.createElement("p");
    let precioTotalCarrito = document.createElement("p");
    let divCantidadesCarrito = document.createElement("div");
    let aRestaCantidadesCarrito = document.createElement("a");
    let iRestaCantidadesCarrito = document.createElement("i");
    let numCantidadesCarrito = document.createElement("span");
    let aSumaCantidadesCarrito = document.createElement("a");
    let iSumaCantidadesCarrito = document.createElement("i");

    divContenedorCarrito.style.cssText =
      "width: 350px; height: 150px; margin: auto; margin-top:1.5rem; border-radius:15px; background-color: #c4e6e1; box-shadow: 8px 8px 5px 0px rgba(0,0,0,0.1);";
    
      divContenedorCarrito.className = "carrito-contenedor-producto"
    divAcarrito.style.cssText =
      "width: 25px; height: 25px; position: relative; left: 320px; bottom: 80px;";

    Acarrito.href = "#";
    Acarrito.style.cssText = "text-decoration: none;";
    Acarrito.dataset.id = +`${productoID}`;
    Acarrito.dataset.val = +`${ofertaProducto}`;
    Acarrito.dataset.precio = +`${precioProducto}`;

    iCarrito.className = "uil uil-trash-alt";
    iCarrito.style.cssText = "font-size: 20px;";

    figureCarrito.style.cssText = "width: 100px; max-width: 100%; margin: 0;";
    imgCarrito.src = `${infoProducto.imagen}`;
    imgCarrito.alt = "Producto eccomerce";
    imgCarrito.style.cssText = "width: 80px; height: 80px;";

    divNombreCarrito.style.cssText =
      "max-width:200px; position: relative; left: 80px; bottom: 90px;";
    pNombreCarrito.style.cssText = "text-align: center; margin: 0;";
    pNombreCarrito.innerHTML = `${infoProducto.nombre}`;

    divTotalCarrito.style.cssText =
      "position: relative; left: 160px; bottom: 45px;";
    ofertaTotalCarrito.style.cssText =
      "margin: 0; font-weight: 600; font-size: 18px;";
    ofertaTotalCarrito.innerHTML = `$${infoProducto.Oferta * cantidadPs}`;
    precioTotalCarrito.style.cssText =
      " margin: 0; text-decoration: line-through; font-size: 18px;";
    precioTotalCarrito.innerHTML = `$${infoProducto.precio * cantidadPs}`;

    divCantidadesCarrito.style.cssText =
      "border: 1px solid black; border-radius: 20px; width: 110px; height: 40px; display: flex; justify-content: space-around; align-items: center; position: relative; left: 80px; bottom: 40px;";

    aRestaCantidadesCarrito.href = "#";
    aRestaCantidadesCarrito.dataset.id = `${productoID}`;
    aRestaCantidadesCarrito.dataset.val = `${infoProducto.Oferta}`;
    aRestaCantidadesCarrito.dataset.valnormal = `${infoProducto.precio}`;
    iRestaCantidadesCarrito.className = "uil uil-minus";
    iRestaCantidadesCarrito.style.fontSize = "25px";

    numCantidadesCarrito.innerHTML = `${cantidadPs}`;
    // Cambiar icono '-' por un tacho de basura si la cantidad de cada producto == 1, (Si hay 1, no se resta sino se elimina);
    if (numCantidadesCarrito.innerHTML == 1) {
      iRestaCantidadesCarrito.className = "uil uil-trash-alt";
    }

    aSumaCantidadesCarrito.href = "#";
    aSumaCantidadesCarrito.dataset.id = `${productoID}`;
    aSumaCantidadesCarrito.dataset.val = `${infoProducto.Oferta}`;
    aSumaCantidadesCarrito.dataset.valnormal = `${infoProducto.precio}`;
    iSumaCantidadesCarrito.className = "uil uil-plus";
    iSumaCantidadesCarrito.style.fontSize = "25px";

    flexTotalyCantidad.style.cssText = "display: flex;";

    hojaCarrito.append(divContenedorCarrito);
    divContenedorCarrito.append(
      imgCarrito,
      divAcarrito,
      divNombreCarrito,
      divTotalCarrito,
      divCantidadesCarrito,
      flexTotalyCantidad
    );
    divAcarrito.append(Acarrito);
    Acarrito.append(iCarrito);
    divNombreCarrito.append(pNombreCarrito);
    flexTotalyCantidad.append(divCantidadesCarrito, divTotalCarrito);
    divCantidadesCarrito.append(
      aRestaCantidadesCarrito,
      numCantidadesCarrito,
      aSumaCantidadesCarrito
    );
    aRestaCantidadesCarrito.append(iRestaCantidadesCarrito);
    aSumaCantidadesCarrito.append(iSumaCantidadesCarrito);
    divTotalCarrito.append(precioTotalCarrito, ofertaTotalCarrito);

    // Funcion de borrar producto del carrito:

    Acarrito.addEventListener("click", (e) => {
      e.preventDefault();
      let idProducto = +e.currentTarget.dataset.id;
      let ofertaProducto = +e.currentTarget.dataset.val;
      let precioProducto = +e.currentTarget.dataset.precio;
      console.log(precioProducto);
      let indiceProducto = carrito.productosIds.indexOf(idProducto);
      let cantidadPs = carrito.cantidades[indiceProducto];

      if (indiceProducto != -1) {
        carrito.productosIds.splice(indiceProducto, 1);
        carrito.cantidades.splice(indiceProducto, 1);
        carrito.total -= ofertaProducto * cantidadPs;
        carrito.subtotal -= precioProducto * cantidadPs;
      }
      console.log(carrito.subtotal);
      cantidadTotal -= cantidadPs;
      spanTit.innerHTML = `(${cantidadTotal}`;
      spanSubtotal.innerHTML = `$${carrito.subtotal}`;
      spanTotal.innerHTML = `$${carrito.total}`;
      divContenedorCarrito.remove();
      if (cantidadTotal == 0) {
        carritoVacio();
      }
      mostrarCarrito();
    });

    // Funciones de los botones + y - de cada producto del carrito

    aRestaCantidadesCarrito.addEventListener("click", (e) => {
      e.preventDefault();
      let idProducto = +e.currentTarget.dataset.id;
      let ofertaProducto = +e.currentTarget.dataset.val;
      let precioProducto = +e.currentTarget.dataset.valnormal;
      let indiceProducto = carrito.productosIds.indexOf(idProducto);

      if (indiceProducto != -1) {
        if (carrito.cantidades[indiceProducto] > 1) {
          carrito.cantidades[indiceProducto]--;
          numCantidadesCarrito.innerHTML = `${carrito.cantidades[indiceProducto]}`;
          cantidadTotal--;
          spanTit.innerHTML = `(${cantidadTotal}`;
          carrito.total -= ofertaProducto;
          carrito.subtotal -= precioProducto;
          precioTotalCarrito.innerHTML = `$${
            precioProducto * carrito.cantidades[indiceProducto]
          }`;
          ofertaTotalCarrito.innerHTML = `$${
            ofertaProducto * carrito.cantidades[indiceProducto]
          }`;
          spanSubtotal.innerHTML = `$${carrito.subtotal}`;
          spanTotal.innerHTML = `$${carrito.total}`;
          console.log(cantidadTotal, indiceProducto);
          console.log(carrito.cantidades);
          console.log(carrito.cantidades[indiceProducto]);
          console.log("--------------------------");
          if (numCantidadesCarrito.innerHTML == 1) {
            iRestaCantidadesCarrito.className = "uil uil-trash-alt";
          }
        } else if (carrito.cantidades[indiceProducto] == 1) {
          cantidadTotal -= carrito.cantidades[indiceProducto];
          carrito.cantidades.splice(indiceProducto, 1);
          carrito.productosIds.splice(indiceProducto, 1);
          carrito.total -= ofertaProducto;
          carrito.subtotal -= precioProducto;
          // cantidadTotal--;
          spanTit.innerHTML = `(${cantidadTotal}`;
          spanSubtotal.innerHTML = `$${carrito.subtotal}`;
          spanTotal.innerHTML = `$${carrito.total}`;
          divContenedorCarrito.remove();
          console.log(cantidadTotal);
          console.log(carrito.cantidades);
          console.log(carrito.cantidades[indiceProducto]);
          console.log("--------------------------");
        }
      }
      if (carrito.productosIds.length == 0) {
        carritoVacio();
      }
      mostrarCarrito();
    });

    aSumaCantidadesCarrito.addEventListener("click", (e) => {
      e.preventDefault();

      let idProducto = +e.currentTarget.dataset.id;
      let ofertaProducto = +e.currentTarget.dataset.val;
      let precioProducto = +e.currentTarget.dataset.valnormal;
      let indiceProducto = carrito.productosIds.indexOf(idProducto);

      if (indiceProducto != -1) {
        if (carrito.cantidades[indiceProducto] > 0) {
          carrito.cantidades[indiceProducto]++;
          numCantidadesCarrito.innerHTML = `${carrito.cantidades[indiceProducto]}`;
          cantidadTotal++;
          spanTit.innerHTML = `(${cantidadTotal}`;
          precioTotalCarrito.innerHTML = `$${
            precioProducto * carrito.cantidades[indiceProducto]
          }`;
          ofertaTotalCarrito.innerHTML = `$${
            ofertaProducto * carrito.cantidades[indiceProducto]
          }`;
          carrito.total += ofertaProducto;
          carrito.subtotal += precioProducto;
          spanSubtotal.innerHTML = `$${carrito.subtotal}`;
          spanTotal.innerHTML = `$${carrito.total}`;

          if (numCantidadesCarrito.innerHTML == 2) {
            iRestaCantidadesCarrito.className = "uil uil-minus";
          }
        }
      }
      mostrarCarrito();
    });
    mostrarCarrito();
  });
  spanSubtotal.innerHTML = `$${carrito.subtotal}`;
  spanTotal.innerHTML = `$${carrito.total}`;

  //Boton checkout y informacion de precios
  let divCheckOut = document.createElement("div");
  let pCheckOut = document.createElement("p");
  divCheckOut.style.cssText =
    "";
  divCheckOut.className = "div-checkout";
  pCheckOut.className = "h5 m-0"
  pCheckOut.innerHTML = "Finalizar Compra";
  hojaCarrito.append(contenedorPrecios, divCheckOut);
  contenedorPrecios.append(divSubtotal, divTotal);
  divSubtotal.append(pSubTotal, spanSubtotal),
    divTotal.append(pTotal, spanTotal);
  divCheckOut.append(pCheckOut);

  //Boton vaciar carrito
  let divVaciarCarrito = document.createElement("div");
  divVaciarCarrito.className = "vaciar-carrito mb-4";
  let pVaciarCarrito = document.createElement("p");
  pVaciarCarrito.className = "h5 m-0"
  pVaciarCarrito.innerHTML = "Vaciar Carrito";
  hojaCarrito.append(divVaciarCarrito);
  divVaciarCarrito.append(pVaciarCarrito);

    // FUNCION VACIAR carrito
    const VaciarCarrito = () => {
    carrito.cantidades = [];
    carrito.productosIds = [];
    carrito.total = 0;
    carrito.subtotal = 0;
    mostrarCarrito();
    carritoVacio();
    spanTit.innerHTML = `(0`;
    let Arraycontenedores = document.querySelectorAll('.carrito-contenedor-producto');
    Arraycontenedores.forEach((etq => {
        etq.remove();
    }))
    
}

  // Funcion borrar botones del checkout
  function borrarBotonesCheckOut() {
    if (carrito.productosIds.length == 0 && divCheckOut && divVaciarCarrito) {
      divCheckOut.remove();
      divVaciarCarrito.remove();
    }
  };

  if (carrito.productosIds.length == 0 && contenedorPrecios) {
    contenedorPrecios.remove();
  }
  borrarBotonesCheckOut();

  //Funcion crear checkout
  divCheckOut.addEventListener("click", checkOut);
  divVaciarCarrito.addEventListener("click", VaciarCarrito)
  divCheckOut.addEventListener("click", (e) => {
    hojaCarrito.remove();
  });
  mostrarCarrito();

};

// Recorremos cada boton agregar para generar una parte de la lógica del carrito.

for (let add of btnAdd) {
  add.addEventListener("click", (e) => {
    let ofertaP = +e.currentTarget.dataset.val;
    let precioP = +e.currentTarget.dataset.precio;
    let idP = +e.currentTarget.dataset.id;

    let indiceP = carrito.productosIds.indexOf(idP);
    if (indiceP != -1) {
      carrito.cantidades[indiceP]++;
    } else {
      carrito.productosIds.push(idP);
      carrito.cantidades.push(1);
    }
    carrito.total += ofertaP;
    carrito.subtotal += precioP;

    mostrarCarrito();
  });
}

// CREAMOS LA FUNCION QUE CREA LA "PAGINA" DEL CHECK OUT
let estadoCheckout = false;
const checkOut = () => {
  let bodyFake = document.createElement("div");
  let divTransparente = document.createElement("div");
  divTransparente.style.cssText = "width:100%; height: 100%;";
  divTransparente.className = "d-none";
  let divVolverInicio = document.createElement("div");
  divVolverInicio.style.cssText = "position:absolute; top: 12px; left: 10px;";
  let aVolverInicio = document.createElement("a");
  aVolverInicio.style.cssText = "font-size: 40px;cursor:pointer;";
  aVolverInicio.className = "uil uil-arrow-left";

  aVolverInicio.addEventListener("click", (e) => {
    estadoCheckout = false;
    bodyFake.remove();
    // let divModal = document.createElement('div');
    // divModal.style.cssText = "width: 400px; height: 150px; position:absolute; top: 40%; left: 40%; background-color: white; border: 3px solid black; border-radius:15px;"
    // let divTexto = document.createElement('div');
    // divTexto.style.cssText = "max-width: 80%; margin: auto;"
    // let pTexto = document.createElement('p');
    // pTexto.innerHTML = "¿Estás seguro que deseas abandonar el proceso de compra actual?"
    // let divBotones = document.createElement('div');
    // divBotones.style.cssText = "display:flex; justify-content: space-around;"
    // let botonSucces = document.createElement('a');
    // botonSucces.className = "btn btn-success";
    // botonSucces.innerHTML = "Abandonar"
    // let botonDenegated = document.createElement('a');
    // botonDenegated.className = "btn btn-danger";
    // botonDenegated.innerHTML = "Continuar"
    // divModal.append(divTexto, divBotones);
    // divTexto.append(pTexto);
    // divBotones.append(botonSucces, botonDenegated);
    // bodyFake.after(divModal);

    // if(divModal){
    //
    //     // console.log('transparente');
    //     // divTransparente.className = 'd-block'
    //     // divTransparente.classList.add("efecto-transparente");
    // }
  });
  let contenedorForm = document.createElement("div");
  contenedorForm.style.cssText =
    "width: 60%; height: 900px; margin-top:1.5rem; border-right: 1px solid gray;";
  let divDestinatario = document.createElement("div");
  divDestinatario.style.cssText = "margin: auto;";
  let h3Destinatario = document.createElement("h3");
  h3Destinatario.style.cssText = "text-align: center;";
  h3Destinatario.innerHTML = "Datos del Destinatario";
  let formulario1 = document.createElement("form");
  formulario1.className = "formCheckOut";
  let formulario2 = document.createElement("form");
  formulario2.className = "formCheckOut";
  let emailFormDiv = document.createElement("div");
  emailFormDiv.style.cssText = "";
  emailFormDiv.className = "inputs";
  let emailFormValue = document.createElement("value");
  emailFormValue.for = "email";
  emailFormValue.innerHTML = "Direccion de correo electronico:";
  let emailFormInput = document.createElement("input");
  emailFormInput.type = "text";
  emailFormInput.id = "email";
  emailFormInput.name = "email";
  emailFormInput.placeholder = "Direccion de correo";
  emailFormInput.required = "required";
  emailFormInput.style.marginTop = "5px";

  let nombreFormDiv = document.createElement("div");
  nombreFormDiv.className = "inputs";
  let nombreFormValue = document.createElement("value");
  nombreFormValue.for = "nombre";
  nombreFormValue.innerHTML = "Nombre:";
  nombreFormValue.style.marginTop = "5px";
  let nombreFormInput = document.createElement("input");
  nombreFormInput.type = "text";
  nombreFormInput.id = "nombre";
  nombreFormInput.name = "nombre";
  nombreFormInput.placeholder = "Nombre";
  nombreFormInput.required = "required";
  let apellidoFormDiv = document.createElement("div");
  apellidoFormDiv.className = "inputs";
  let apellidoFormValue = document.createElement("value");
  apellidoFormValue.for = "apellido";
  apellidoFormValue.innerHTML = "Apellido:";
  apellidoFormValue.style.marginTop = "5px";
  let apellidoFormInput = document.createElement("input");
  apellidoFormInput.type = "text";
  apellidoFormInput.id = "apellido";
  apellidoFormInput.name = "apellido";
  apellidoFormInput.placeholder = "Apellido";
  apellidoFormInput.required = "required";
  let telFormDiv = document.createElement("div");
  telFormDiv.className = "inputs";
  let telFormValue = document.createElement("value");
  telFormValue.for = "telefono";
  telFormValue.innerHTML = "Teléfono:";
  telFormValue.style.marginTop = "5px";
  let telFormInput = document.createElement("input");
  telFormInput.type = "text";
  telFormInput.id = "telefono";
  telFormInput.name = "telefono";
  telFormInput.placeholder = "Teléfono";
  telFormInput.required = "required";
  let divTituloUbicacion = document.createElement("div");
  divTituloUbicacion.style.cssText = "margin: auto; margin-top: 2rem;";
  let h3TituloUbicacion = document.createElement("h3");
  h3TituloUbicacion.innerHTML = "Ubicación";
  h3TituloUbicacion.style.cssText = "text-align: center;";
  let calleFormDiv = document.createElement("div");
  calleFormDiv.className = "inputs";
  let calleFormValue = document.createElement("value");
  calleFormValue.for = "calle";
  calleFormValue.innerHTML = "Calle:";
  calleFormValue.style.marginTop = "5px";
  let calleFormInput = document.createElement("input");
  calleFormInput.type = "text";
  calleFormInput.id = "calle";
  calleFormInput.name = "calle";
  calleFormInput.placeholder = "Calle";
  calleFormInput.required = "required";
  let numFormDiv = document.createElement("div");
  numFormDiv.className = "inputs";
  let numFormValue = document.createElement("value");
  numFormValue.for = "numero";
  numFormValue.innerHTML = "Número:";
  numFormValue.style.marginTop = "5px";
  let numFormInput = document.createElement("input");
  numFormInput.type = "number";
  numFormInput.id = "numero";
  numFormInput.name = "numero";
  numFormInput.placeholder = "Número";
  numFormInput.required = "required";
  let ciudadFormDiv = document.createElement("div");
  ciudadFormDiv.className = "inputs";
  let ciudadFormValue = document.createElement("value");
  ciudadFormValue.for = "ciudad";
  ciudadFormValue.innerHTML = "Ciudad:";
  ciudadFormValue.style.marginTop = "5px";
  let ciudadFormInput = document.createElement("input");
  ciudadFormInput.type = "text";
  ciudadFormInput.id = "Ciudad";
  ciudadFormInput.name = "Ciudad";
  ciudadFormInput.placeholder = "Ciudad";
  ciudadFormInput.required = "required";
  // let provinciaFormDiv = document.createElement('div');
  // provinciaFormDiv.className = 'inputs';
  // let provinciaFormValue = document.createElement('div');
  // let provinciaFormInput = document.createElement('div');
  // PARTE DEL CARRITO
  let divContenedorCarrito = document.createElement("div");
  divContenedorCarrito.style.cssText =
    "display: flex; flex-direction: column; width: 35%;position:fixed; top:0;right:0;";

  let divCarrito = document.createElement("div");
  divCarrito.style.cssText =
    "height: 300px; box-shadow: 13px 13px 12px -3px rgba(0,0,0,0.1); margin-right: 2rem; margin-top: 1.5rem; overflow-y: scroll;";
  let subtotal = 0;
  carrito.productosIds.forEach((id, indice) => {
    let infoProducto = productos.filter((producto) => producto.id == id)[0];
    let cantidadPs = carrito.cantidades[indice];
    subtotal += +infoProducto.precio * cantidadPs;

    let divProducto = document.createElement("div");
    divProducto.style.cssText =
      "width: 90%; margin:auto; border-radius: 15px; margin-top: 1rem;  background-color: #c4e6e1; box-shadow: 8px 8px 5px 0px rgba(0,0,0,0.1);";
    divProducto.className = "d-flex justify-content-around";
    let figureImagen = document.createElement("figure");
    figureImagen.style.cssText = "width: 100px; max-width: 100%; margin: 0;";
    let imagen = document.createElement("img");
    imagen.src = `${infoProducto.imagen}`;
    imagen.alt = `${infoProducto.nombre}`;
    imagen.style.cssText = "width: 80px; height: 80px;";
    let pCantidad = document.createElement("p");
    pCantidad.innerHTML = `Cantidad: ${cantidadPs}`;

    let divTextoyCantidad = document.createElement("div");
    divTextoyCantidad.style.cssText =
      "display: flex; flex-direction: column; justify-content: center;";
    let divTexto = document.createElement("div");
    let pNombre = document.createElement("p");
    pNombre.className = "m-0";
    pNombre.innerHTML = `${infoProducto.nombre}`;
    let divPrecio = document.createElement("div");
    divPrecio.style.cssText =
      "display: flex; flex-direction: column; align-items: center;margin-top:1rem;";
    let spanPrecio = document.createElement("span");
    spanPrecio.innerHTML = `$${infoProducto.precio * cantidadPs}`;
    spanPrecio.style.cssText =
      "margin: 0; text-decoration: line-through; font-size: 18px;";
    let spanOferta = document.createElement("span");
    spanOferta.innerHTML = `$${infoProducto.Oferta * cantidadPs}`;
    spanOferta.style.cssText = " margin: 0; font-weight: 600; font-size: 18px;";

    divCarrito.append(divProducto);
    divProducto.append(figureImagen, divTextoyCantidad, divPrecio);
    divTextoyCantidad.append(divTexto, pCantidad);
    figureImagen.append(imagen);
    divTexto.append(pNombre);
    divPrecio.append(spanPrecio, spanOferta);
  });

  let contenedorPrecios = document.createElement("div");
  contenedorPrecios.style.cssText =
    "border:rgb(168, 168, 168) 1px solid; border-radius: 15px;box-shadow: 14px 12px 8px -3px rgba(0,0,0,0.1); margin-right: 2rem; margin-top: 2rem;";

  let divSubtotal = document.createElement("div");
  divSubtotal.style.cssText =
    "display: flex; justify-content: space-between; width: 80%; margin: auto; margin-top: 0.4rem;";
  let pSubTotal = document.createElement("p")
  pSubTotal.innerHTML = "Subtotal";
  pSubTotal.style.margin = 0;
  let spanSubtotal = document.createElement("span");
  spanSubtotal.innerHTML = `$${subtotal}`;

  let divTotal = document.createElement("div");
  divTotal.style.cssText =
    "display: flex; justify-content: space-between; width: 80%; margin: auto;";
  let pTotal = document.createElement("p");
  pTotal.innerHTML = "Total";
  pTotal.style.cssText =
    "color: #7d4eaa; font-size: 25px; margin: 0; font-weight: bold;";
  let spanTotal = document.createElement("span");
  spanTotal.innerHTML = `$${carrito.total}`;
  spanTotal.style.cssText =
    "color: #7d4eaa; font-size: 25px; font-weight: bold;";

  let divMetodoPago = document.createElement("div");
  divMetodoPago.style.cssText = "margin-top: 1.5rem;";
  let h3MetodoPago = document.createElement("h3");
  h3MetodoPago.innerHTML = "Seleccionar método de pago";
  h3MetodoPago.className = "h4";
  let divRadios = document.createElement("div");
  divRadios.style.cssText = "display: flex; flex-direction: column;";

  let divEfectivo = document.createElement("div");
  let labelEfectivo = document.createElement("label");
  labelEfectivo.for = "efectivo";
  labelEfectivo.innerHTML = "Efectivo";
  labelEfectivo.style.marginTop = "5px";
  labelEfectivo.style.marginLeft = "3px";
  let InputEfectivo = document.createElement("input");
  InputEfectivo.type = "radio";
  InputEfectivo.id = "efectivo";
  InputEfectivo.name = "pago";
  InputEfectivo.value = "efectivo";
  let imgEfectivo = document.createElement("img");
  imgEfectivo.src = "img/svg/money.svg";
  imgEfectivo.style.cssText = "width: 30px; height: 30px; margin-left: 0.6rem";

  let divTarjeta = document.createElement("div");
  divTarjeta.style.cssText = "display: flex; align-items: center; margin-top: 0.5rem";
  let labelTarjeta = document.createElement("label");
  labelTarjeta.for = "tarjeta";
  labelTarjeta.innerHTML = "Tarjeta";
  labelTarjeta.style.marginTop = "5px";
  labelTarjeta.style.marginLeft = "3px";
  let InputTarjeta = document.createElement("input");
  InputTarjeta.type = "radio";
  InputTarjeta.id = "tarjeta";
  InputTarjeta.name = "pago";
  InputTarjeta.value = "tarjeta";
  let imgTarjeta = document.createElement("img");
  imgTarjeta.src = "img/svg/credit-card.svg";
  imgTarjeta.style.cssText = "width: 30px; height: 30px; margin-left: 0.6rem";

  let divFinalizar = document.createElement('div');
  divFinalizar.style.cssText = "margin-top: 1rem;"
  let aFinalizar = document.createElement('a');
  aFinalizar.className = "btn btn-success";
  aFinalizar.innerHTML = "Finalizar Compra";
  aFinalizar.addEventListener('click', e => {
    bodyFake.remove();
    estadoCheckout = false;
    carrito.cantidades = [];
    carrito.productosIds = [];
    carrito.total = 0;
    carrito.subtotal = 0;
    mostrarCarrito();
  })

  contenedorPrecios.append(divSubtotal, divTotal);
  divSubtotal.append(pSubTotal, spanSubtotal);
  divTotal.append(pTotal, spanTotal);

  bodyFake.style.cssText =
    "width: 100%; background-color: white; position:fixed; top: 0;";

  document.body.append(bodyFake, divTransparente);
  bodyFake.append(contenedorForm, divContenedorCarrito);
  divContenedorCarrito.append(divCarrito, contenedorPrecios, divMetodoPago, divFinalizar);
  divMetodoPago.append(h3MetodoPago, divRadios);
  divRadios.append(divEfectivo, divTarjeta);
  divEfectivo.append(InputEfectivo, labelEfectivo, imgEfectivo);
  divTarjeta.append(InputTarjeta, labelTarjeta, imgTarjeta);
  divFinalizar.append(aFinalizar);
  bodyFake.prepend(divVolverInicio);
  contenedorForm.append(
    divDestinatario,
    formulario1,
    divTituloUbicacion,
    formulario2
  );
  divDestinatario.append(h3Destinatario);
  divVolverInicio.append(aVolverInicio);
  formulario1.append(emailFormDiv, nombreFormDiv, apellidoFormDiv, telFormDiv);
  formulario2.append(calleFormDiv, numFormDiv, ciudadFormDiv);
  divTituloUbicacion.append(h3TituloUbicacion);
  emailFormDiv.append(emailFormValue, emailFormInput);
  nombreFormDiv.append(nombreFormValue, nombreFormInput);
  apellidoFormDiv.append(apellidoFormValue, apellidoFormInput);
  telFormDiv.append(telFormValue, telFormInput);
  calleFormDiv.append(calleFormValue, calleFormInput);
  numFormDiv.append(numFormValue, numFormInput);
  ciudadFormDiv.append(ciudadFormValue, ciudadFormInput);

  window.addEventListener("keydown", (e) => {
    if (e.key == "Escape" && bodyFake) {
      bodyFake.remove();
    }
  });

  if (bodyFake) {
    estadoCheckout = true;
    // let navbar = document.querySelector(".navbar");
    // console.log(navbar);
    // navbar.className = "navbar navbar-expand-lg navbar-light bg-light w-100";
    // navbar.style.cssText = "z-index:0;"
  } else {
    estadoCheckout = false;
  }
  console.log(estadoCheckout);
};

// Apertura del carrito

verCarrito.addEventListener("click", modalCarrito);

mostrarCarrito();

// FIJAR BARRA NAVEGACION 

window.addEventListener("scroll", (e) => {
    console.log(estadoCheckout);
    if(estadoCheckout == false){
        let navbar = document.querySelector(".navbar");
        let pos = window.pageYOffset;
      
        if (pos < 80) {
          navbar.className = "navbar navbar-expand-lg navbar-light bg-light w-100";
          navbar.style.cssText = "z-index:20; display: flex;"
        } else {
          navbar.className = "navbar navbar-expand-lg navbar-light bg-light w-100 fixed-top";
          navbar.style.cssText = "z-index:20; display: flex;"
        }
    } else {
       let navbar = document.querySelector(".navbar");
        navbar.style.cssText += "display: none";
    }
  });
