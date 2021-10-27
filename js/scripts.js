// // JAVASCRIPT


//---------------- seleccionar botones--------------------------

const clickBoton = document.querySelectorAll('.botonAnadir');
const modalCarrito = document.querySelector('.modal-body');
let productos = [];
clickBoton.forEach(btn => {
    btn.addEventListener('click', addCarritoItem)
});


// --------------- armando el objeto---------------------------

function addCarritoItem(e) {
    const button = e.target;
    const item = button.closest('.card');
    const itemTitle = item.querySelector('.fw-bolder').textContent;
    const itemPrecio = item.querySelector('.precio').textContent;
    const itemImg = item.querySelector('.card-img-top').src;

    const miProducto = {
        title: itemTitle,
        precio: itemPrecio,
        img: itemImg,
        cantidad: 1

    };
    anadirAlCarrito(miProducto);
    console.log(miProducto);
};


// ---------------- cargando el array-----------------------------

function anadirAlCarrito(miProducto) {

    // ----- el for aumenta la cantidad sin duplicar los items--
    const inputElemento = modalCarrito.getElementsByClassName('input__elemento')

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].title.trim() === miProducto.title.trim()) {
            productos[i].cantidad++;
            const cantidadProductos = inputElemento[i];
            cantidadProductos.value++;
            sumarTotal()
            console.log(productos);
            return null;
        }
    }

    productos.push(miProducto);
    cargarCarrito();
}


// ----------------- item del carrito----------------------------

function cargarCarrito() {
    modalCarrito.innerHTML = ''
    productos.map(item => {
        const tablaItem = document.createElement('tr');
        tablaItem.classList.add('itemCarrito');
        const contenedor = `
            <td class="table__productos">
                <img width="100px" src=${item.img}  alt="">
                <h6 class="title">${item.title}</h6>
            </td>
            <td class="table__price"><p>${item.precio}</p></td>
            <td class="table__cantidad">
                <input type="number" min="1" value=${item.cantidad} class="input__elemento">
                <button class="delete btn btn-danger">x</button>
            </td>`;
        tablaItem.innerHTML = contenedor;
        modalCarrito.append(tablaItem);

        tablaItem.querySelector('.delete').addEventListener('click', eliminarItem);
        tablaItem.querySelector('.input__elemento').addEventListener('change', sumarCantidad);
    })
    sumarTotal()
};


// --------------- sumar precio total acumulado------------------------
function sumarTotal() {
    let total = 0;
    const itemCartTotal = document.querySelector('.itemCartTotal')
    productos.forEach((item) => {
        const precio = Number(item.precio.replace("$", ""));
        total = total + precio * item.cantidad;
    });
    itemCartTotal.innerHTML = `<h6 style="color: #000000;">Total: $${total}</h6>`;
    guardarLocalStorage();
}

// --------------- eliminar item --------------------------------------

function eliminarItem(e) {
    const botonEliminar = e.target;
    const item = botonEliminar.closest('.itemCarrito');
    const itemTitle = item.querySelector('.title').textContent;
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].title.trim() === itemTitle.trim()) {
            productos.splice(i, 1);
        }
    }
    item.remove();
    sumarTotal();
}

// --------------- sumar cantidad --------------------------------------- 

function sumarCantidad(e) {
    const inputElemento = e.target;
    const item = inputElemento.closest('.itemCarrito');
    const itemTitle = item.querySelector('.title').textContent;
    productos.forEach((item) => {
        if (item.title.trim() === itemTitle.trim()) {
            inputElemento.value < 1 ? inputElemento.value = 1 : inputElemento.value;
            item.cantidad = inputElemento.value;
            sumarTotal();
        }
    })
    console.log(productos);
};

// --------------- local storage ------------------------

function guardarLocalStorage() {
    localStorage.setItem('productos', JSON.stringify(productos));
}


window.onload = function () {
    const storage = JSON.parse(localStorage.getItem('productos'));
    if (storage) {
        productos = storage;
        cargarCarrito();
    }
};


// --------------- modo oscuro con jquery ------------------------


const modoOscuro = $('.modoOscuro');
$('.modoOscuro').on('click', () => {
    $('body').toggleClass('dark')
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('modoOscuro', true);
    } else {
        localStorage.setItem('modoOscuro', false);
    }
});

if (localStorage.getItem('modoOscuro') === 'true') {
    document.body.classList.add('dark');
} else {
    document.body.classList.remove('dark');
}