// // JAVASCRIPT


//---------------- seleccionar botones--------------------------
const clickBoton = document.querySelectorAll('.botonAnadir')
const modalCarrito = document.querySelector('.modal-body')
let productos = []
clickBoton.forEach(btn => {
    btn.addEventListener('click', addCarritoItem)
})


// --------------- armando el objeto---------------------------
function addCarritoItem(e) {
    const button = e.target
    const item = button.closest('.card')
    const itemTitle = item.querySelector('.fw-bolder').textContent;
    const itemPrecio = item.querySelector('.precio').textContent;
    const itemImg = item.querySelector('.card-img-top').src;

    const miProducto = {
        title: itemTitle,
        precio: itemPrecio,
        img: itemImg,
        cantidad: 1
        
    }
    anadirAlCarrito(miProducto);
    console.log (miProducto)
}

// ---------------- cargando el array-----------------------------
function anadirAlCarrito(miProducto) {
    productos.push(miProducto);
    cargarCarrito();
}
// ----------------- item del carrito--------------------------
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
            </td>`
        tablaItem.innerHTML = contenedor;
        modalCarrito.append(tablaItem)
    })
}
// modo oscuro con jquery
const modoOscuro = $('.modoOscuro')
$('.modoOscuro').on('click', () => {
    $('body').toggleClass('modoOscuroBody')
})