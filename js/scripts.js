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

let articulo1 = prompt("Elija el producto \n 1-mouse \n 2-teclado \n 3-auriculares\n ingrese otro numero para salir");
while (articulo1 <= "3" ) {
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
        default:
            alert("ingrese un numero valido");
            
            break;
    }
    articulo1 = prompt("Elija el producto \n 1-mouse \n 2-teclado \n 3-auriculares");
}




// console.log(producto1);
// console.log(producto2);
// console.log(producto3);


// if (articulo1 == 1) {
//     console.log(producto1);
// } else if (articulo1 == 2) {
//     console.log(producto2);
// } else if (articulo1 == 3) {
//     console.log(producto3);
// } else {
//     alert("ingrese un valor valido");
// }