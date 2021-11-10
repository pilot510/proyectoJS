// // JAVASCRIPT

//-------------------- seleccionar botones--------------------------

const clickBoton = document.querySelectorAll(".botonAnadir");
const modalCarrito = document.querySelector(".modal-body");
let productos = [];
clickBoton.forEach((btn) => {
    btn.addEventListener("click", addCarritoItem);
});

// -------------------- armando el objeto---------------------------

function addCarritoItem(e) {
    const button = e.target;
    const item = button.closest(".card");
    const itemTitle = item.querySelector(".fw-bolder").textContent;
    const itemPrecio = item.querySelector(".precio").textContent;
    const itemImg = item.querySelector(".card-img-top").src;

    const miProducto = {
        title: itemTitle,
        precio: itemPrecio,
        img: itemImg,
        cantidad: 1,
    };
    anadirAlCarrito(miProducto);
    console.log(miProducto);
}

// ---------------- cargando el array-----------------------------

function anadirAlCarrito(miProducto) {
    // ----- el for aumenta la cantidad sin duplicar los items--
    const inputElemento = modalCarrito.getElementsByClassName("input__elemento");

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].title.trim() === miProducto.title.trim()) {
            productos[i].cantidad++;
            const cantidadProductos = inputElemento[i];
            cantidadProductos.value++;
            sumarTotal();
            console.log(productos);
            return null;
        }
    }

    productos.push(miProducto);
    cargarCarrito();
}

// --------------------- item del carrito----------------------------

function cargarCarrito() {
    modalCarrito.innerHTML = "";
    productos.map((item) => {
        const tablaItem = document.createElement("tr");
        tablaItem.classList.add("itemCarrito");
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

        tablaItem.querySelector(".delete").addEventListener("click", eliminarItem);
        tablaItem
            .querySelector(".input__elemento")
            .addEventListener("change", sumarCantidad);
    });
    sumarTotal();
}

// --------------- sumar precio total acumulado------------------------
function sumarTotal() {
    let total = 0;
    const itemCartTotal = document.querySelector(".itemCartTotal");
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
    const item = botonEliminar.closest(".itemCarrito");
    const itemTitle = item.querySelector(".title").textContent;
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
    const item = inputElemento.closest(".itemCarrito");
    const itemTitle = item.querySelector(".title").textContent;
    productos.forEach((item) => {
        if (item.title.trim() === itemTitle.trim()) {
            inputElemento.value < 1 ? (inputElemento.value = 1) : inputElemento.value;
            item.cantidad = inputElemento.value;
            sumarTotal();
        }
    });
    console.log(productos);
}

// ----------------- local storage --------------------------------------

function guardarLocalStorage() {
    localStorage.setItem("productos", JSON.stringify(productos));
}

window.onload = function () {
    const storage = JSON.parse(localStorage.getItem("productos"));
    if (storage) {
        productos = storage;
        cargarCarrito();
    }
};

// ----------------- modo oscuro con jquery -------------------------

const modoOscuro = $(".modoOscuro");
$(".modoOscuro").on("click", () => {
    $("body").toggleClass("dark");
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("modoOscuro", true);
    } else {
        localStorage.setItem("modoOscuro", false);
    }
});

if (localStorage.getItem("modoOscuro") === "true") {
    document.body.classList.add("dark");
} else {
    document.body.classList.remove("dark");
}

// ----------------------- json ----------------------------------------------

const URLJSON = "./js/productos.json";

$("footer").prepend(
    `<button type="button" class="json btn btn-outline-light">JSON</button>`
);
$(".json").on("click", function () {
    $.getJSON(URLJSON, function (data, estado) {
        console.log(data);
        console.log(estado);
    });
});

// -------------------- mercado pago --------------------------------
const botonComprar = document.querySelector("#btn-pagar");
botonComprar.addEventListener("click", comprar);
async function comprar() {
    const productosMercadoPago = productos.map(item => {
        return {
            title: item.title,
            description: "",
            picture_url: "",
            category_id: "",
            quantity: item.cantidad,
            currency_id: "ARS",
            unit_price: item.precio,
            
        };
        
    });;
    console.log(productosMercadoPago);

    const mercadoPagoPagar = await fetch(
        "https://api.mercadopago.com/checkout/preferences", {
        method: 'POST',
        headers: {
            Auhorization: 'Bearer TEST-702623294928968-111020-1d8fd9c93e95061eaf5f3e8c8a64631b-603432288',
        },
        body: JSON.stringify({
            items: productosMercadoPago,
        })
    });
    const data = await mercadoPagoPagar.json();
    console.log(data);
};

// curl -X POST \
//     'https://api.mercadopago.com/v1/payments' \
//     -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
//     -H 'Content-Type: application/json' \
//     -d '{
//   "additional_info": {
//     "items": [
//       {
//         "id": "PR0001",
//         "title": "Point Mini",
//         "description": "Producto Point para cobros con tarjetas mediante bluetooth",
//         "picture_url": "https://http2.mlstatic.com/resources/frontend/statics/growth-sellers-landings/device-mlb-point-i_medium@2x.png",
//         "category_id": "electronics",
//         "quantity": 1,
//         "unit_price": 58.8
//       }
//     ],
//     "payer": {
//       "first_name": "Test",
//       "last_name": "Test",
//       "phone": {
//         "area_code": 11,
//         "number": "987654321"
//       },
//       "address": {}
//     },
//     "shipments": {
//       "receiver_address": {
//         "zip_code": "12312-123",
//         "state_name": "Rio de Janeiro",
//         "city_name": "Buzios",
//         "street_name": "Av das Nacoes Unidas",
//         "street_number": 3003
//       }
//     },
//     "barcode": {}
//   },
//   "description": "Payment for product",
//   "external_reference": "MP0001",
//   "installments": 1,
//   "metadata": {},
//   "order": {
//     "type": "mercadolibre"
//   },
//   "payer": {
//     "entity_type": "individual",
//     "type": "customer",
//     "identification": {}
//   },
//   "payment_method_id": "visa",
//   "transaction_amount": 58.8
// }'