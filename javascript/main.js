class producto {
    constructor(nombre, precio, imagen) {
        this.nombre = nombre
        this.precio = precio
        this.imagen = imagen
    }
}

function obtenerProductosLS() {
    const productosCarritoLS = JSON.parse(localStorage.getItem("productos"))

    if (productosCarritoLS) {
        carrito = productosCarritoLS
    }

    renderizaCarrito(carrito)
}

function guardarProductosLS(params) {
    const json = JSON.stringify(carrito)
    localStorage.setItem("productos", json)
}

function renderizaCarrito(carrito) {
    tbodyCarrito.innerHTML = ""

    for(const productoCarrito of carrito) {
        const tr = document.createElement("tr")
        tr.innerHTML =`
        <td>${productoCarrito.nombre}</td>
        <td>$${productoCarrito.precio}</td>
        <td>${productoCarrito.cantidad}</td>
        <td>$${productoCarrito.precio * productoCarrito.cantidad}</td>`;

        tbodyCarrito.append(tr)
    }
}

function agregarAlCarrito(producto, cantidad) {
    
    const indiceProductoCarrito = carrito.findIndex((el) => {
        return el.nombre === producto.nombre
    })

    if (indiceProductoCarrito === -1) {
        carrito.push({
            nombre : producto.nombre,
            precio : producto.precio,
            cantidad : cantidad
        })
    } else {
        carrito[indiceProductoCarrito].cantidad += cantidad
    }

    renderizaCarrito(carrito)
    guardarProductosLS()
}

function renderizarProductos(productos) {
    contenedor.innerHTML = "";

    for (const producto of productos) {
        const div = document.createElement("div")
        div.className = "producto";
        div.innerHTML = `<h3>${producto.nombre}</h3>
        <img class="imagen" src="${producto.imagen}" alt="">
        <h3>$${producto.precio}</h3>`

        const input = document.createElement("input")
        input.placeholder = "cantidad"
        input.type = "number";

        const button = document.createElement("button")
        button.innerText = "agregar"

        button.addEventListener("click", () => {
            const cantidad = parseInt(input.value)
            
            agregarAlCarrito(producto, cantidad)
        })

        div.append(input, button)

        contenedor.append(div)
    }
}


let contenedor = document.getElementById("contenedor")
let tbodyCarrito = document.getElementById("carrito")
let productos = [
    new producto("Torta de vainilla", 50000, "../imagenes/torta de vainilla.png"),
    new producto("Torta de chocolate", 40000, "../imagenes/torta de chocolate.jpg"),
    new producto("Torta de las tres leches", 70000, "../imagenes/torta tres leches.png")
]

let carrito = []
obtenerProductosLS()
renderizarProductos(productos)