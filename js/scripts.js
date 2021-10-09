// JAVASCRIPT

class Producto {

    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}
const producto1 = new Producto("mouse", 5000, 1);
const producto2 = new Producto("teclado", 25000, 1);
const producto3 = new Producto("auriculares", 15000, 1);
const producto4 = new Producto("microfono", 8000, 1);
const producto5 = new Producto("monitor", 35000, 1);
const producto6 = new Producto("cpu", 45000, 1);
const producto7 = new Producto("gpu", 75000, 1);
const producto8 = new Producto("gabinete", 10000, 1);

let boton1 = document.getElementById("botonAdd1");
boton1.onclick = () => console.log(producto1);

let boton2 = document.getElementById("botonAdd2");
boton2.onclick = () => console.log(producto2);

let boton3 = document.getElementById("botonAdd3");
boton3.onclick = () => console.log(producto3);

let boton4 = document.getElementById("botonAdd4");
boton4.onclick = () => console.log(producto4);

let boton5 = document.getElementById("botonAdd5");
boton5.onclick = () => console.log(producto5);

let boton6 = document.getElementById("botonAdd6");
boton6.onclick = () => console.log(producto6);

let boton7 = document.getElementById("botonAdd7");
boton7.onclick = () => console.log(producto7);

let boton8 = document.getElementById("botonAdd8");
boton8.onclick = () => console.log(producto8);


// function elegirProducto() {

//     let articulo1 = parseInt(prompt("Elija el producto \n 1-mouse \n 2-teclado \n 3-auriculares\n 4-microfono\n 5-monitor\n 6-cpu\n 7-gpu\n 8-gabinete \n ingrese otro numero para salir"));

//     while (articulo1 <= 8) {
//         switch (articulo1) {
//             case 1:
//                 console.log(producto1);
//                 break;
//             case 2:
//                 console.log(producto2);
//                 break;
//             case 3:
//                 console.log(producto3);
//                 break;
//             case 4:
//                 console.log(producto4);
//                 break;
//             case 5:
//                 console.log(producto5);
//                 break;
//             case 6:
//                 console.log(producto6);
//                 break;
//             case 7:
//                 console.log(producto7);
//                 break;
//             case 8:
//                 console.log(producto8);
//                 break;
//             default:
//                 alert("ingrese un numero valido");
//                 break;
//         }

//         articulo1 = parseInt(prompt("Elija el producto \n 1-mouse \n 2-teclado \n 3-auriculares\n 4-microfono\n 5-monitor\n 6-cpu\n 7-gpu\n 8-gabinete \n ingrese otro numero para salir"));
//         console.log(articulo1)

//     }

// }

// elegirProducto();

// const miCarrito = [];

// miCarrito.push(producto1);
// miCarrito.push(producto2);
// miCarrito.push(producto3);
// miCarrito.push(producto4);
// miCarrito.push(producto5);
// miCarrito.push(producto6);
// miCarrito.push(producto7);
// miCarrito.push(producto8);
// console.log(miCarrito);




// let parrafo = document.createElement("h1", "div");

// parrafo.innerHTML = `<h1>probando ingresar html desde js </h1><div><h2>con estilos</h2></div>`;

// document.body.append(parrafo);

// parrafo.style.textAlign = "center";

// parrafo.style.color = "#459958";

// parrafo.style.backgroundColor = "#212529";