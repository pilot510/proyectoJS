// // JAVASCRIPT

const producto = [{
    nombre: "Mouse",
    precio: 5000,
    id: 1
}, {
    nombre: "Teclado",
    precio: 25000,
    id: 2
}, {
    nombre: "Auriculares",
    precio: 15000,
    id: 3
}, {
    nombre: "Microfono",
    precio: 8000,
    id: 4
}, {
    nombre: "Monitor",
    precio: 35000,
    id: 5
}, {
    nombre: "CPU",
    precio: 45000,
    id: 6
}, {
    nombre: "GPU",
    precio: 75000,
    id: 7
}, {
    nombre: "Gabinete",
    precio: 10000,
    id: 8
}, ]

document.getElementById("botonAdd1").onclick = function () {
    let parrafo1 = document.createElement("div", "h2");
    console.log(producto[0]);
    parrafo1.innerHTML = `<div><h2>${producto[0].nombre}</h2><h2>${producto[0].precio}</h2></div>`;

    document.body.append(parrafo1)
    parrafo1.style.textAlign = "center";
    parrafo1.style.color = "#459958";
    parrafo1.style.backgroundColor = "#212529";
    parrafo1.style.display = "flex";
    parrafo1.style.justifyContent = "center";
}

document.getElementById("botonAdd2").onclick = function () {
    let parrafo2 = document.createElement("div", "h2");
    console.log(producto[1])
    parrafo2.innerHTML = `<div><h2>${producto[1].nombre}</h2><h2>${producto[1].precio}</h2></div>`;

    document.body.append(parrafo2)

    parrafo2.style.textAlign = "center";
    parrafo2.style.color = "#459958";
    parrafo2.style.backgroundColor = "#212529";
    parrafo2.style.display = "flex";
    parrafo2.style.justifyContent = "center";
}

document.getElementById("botonAdd3").onclick = function () {
    let parrafo3 = document.createElement("div", "h2");
    console.log(producto[2])
    parrafo3.innerHTML = `<div><h2>${producto[2].nombre}</h2><h2>${producto[2].precio}</h2></div>`;

    document.body.append(parrafo3)

    parrafo3.style.textAlign = "center";
    parrafo3.style.color = "#459958";
    parrafo3.style.backgroundColor = "#212529";
    parrafo3.style.display = "flex";
    parrafo3.style.justifyContent = "center";
    4
}

document.getElementById("botonAdd4").onclick = function () {
    let parrafo4 = document.createElement("div", "h2");
    console.log(producto[3])
    parrafo4.innerHTML = `<div><h2>${producto[3].nombre}</h2><h2>${producto[3].precio}</h2></div>`;

    document.body.append(parrafo4)

    parrafo4.style.textAlign = "center";
    parrafo4.style.color = "#459958";
    parrafo4.style.backgroundColor = "#212529";
    parrafo4.style.display = "flex";
    parrafo4.style.justifyContent = "center";
}

document.getElementById("botonAdd5").onclick = function () {
    let parrafo5 = document.createElement("div", "h2");
    console.log(producto[4])
    parrafo5.innerHTML = `<div><h2>${producto[4].nombre}</h2><h2>${producto[4].precio}</h2></div>`;

    document.body.append(parrafo5)

    parrafo5.style.textAlign = "center";
    parrafo5.style.color = "#459958";
    parrafo5.style.backgroundColor = "#212529";
    parrafo5.style.display = "flex";
    parrafo5.style.justifyContent = "center";
}

document.getElementById("botonAdd6").onclick = function () {
    let parrafo6 = document.createElement("div", "h2");
    console.log(producto[5])
    parrafo6.innerHTML = `<div><h2>${producto[5].nombre}</h2><h2>${producto[5].precio}</h2></div>`;

    document.body.append(parrafo6)

    parrafo6.style.textAlign = "center";
    parrafo6.style.color = "#459958";
    parrafo6.style.backgroundColor = "#212529";
    parrafo6.style.display = "flex";
    parrafo6.style.justifyContent = "center";
}

document.getElementById("botonAdd7").onclick = function () {
    let parrafo7 = document.createElement("div", "h2");
    console.log(producto[6])
    parrafo7.innerHTML = `<div><h2>${producto[6].nombre}</h2><h2>${producto[6].precio}</h2></div>`;

    document.body.append(parrafo7)

    parrafo7.style.textAlign = "center";
    parrafo7.style.color = "#459958";
    parrafo7.style.backgroundColor = "#212529";
    parrafo7.style.display = "flex";
    parrafo7.style.justifyContent = "center";
}

document.getElementById("botonAdd8").onclick = function () {
    let parrafo8 = document.createElement("div", "h2");
    console.log(producto[7])
    parrafo8.innerHTML = `<div><h2>${producto[7].nombre}</h2><h2>${producto[7].precio}</h2></div>`;

    document.body.append(parrafo8)

    parrafo8.style.textAlign = "center";
    parrafo8.style.color = "#459958";
    parrafo8.style.backgroundColor = "#212529";
    parrafo8.style.display = "flex";
    parrafo8.style.justifyContent = "center";
}
