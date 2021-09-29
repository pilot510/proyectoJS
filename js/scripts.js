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

let articulo1 = prompt("Elija el producto \n 1-mouse \n 2-teclado \n 3-auriculares\n 4-microfono\n 5-monitor\n 6-cpu\n 7-gpu\n 8-gabinete \n ingrese otro numero para salir");
while (articulo1 <= "8") {
    switch (articulo1) {
        case "1":
            console.log(producto1);
            break;
        case "2":
            console.log(producto2);
            break;
        case "3":
            console.log(producto3);
            break;
        case "4":
            console.log(producto4);
            break;
        case "5":
            console.log(producto5);
            break;
        case "6":
            console.log(producto6);
            break;
        case "7":
            console.log(producto7);
            break;
        case "8":
            console.log(producto8);
            break;
        default:
            alert("ingrese un numero valido");

            break;
    }
    articulo1 = prompt("Elija el producto \n 1-mouse \n 2-teclado \n 3-auriculares\n 4-microfono\n 5-monitor\n 6-cpu\n 7-gpu\n 8-gabinete \n ingrese otro numero para salir");
}

const miCarrito = []

miCarrito.push(producto1);
miCarrito.push(producto2);
miCarrito.push(producto3);
miCarrito.push(producto4);
miCarrito.push(producto5);
miCarrito.push(producto6);
miCarrito.push(producto7);
miCarrito.push(producto8);
console.log(miCarrito);