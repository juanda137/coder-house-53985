class producto {
    constructor(nombre, precio, imagen) {
        this.nombre = nombre
        this.precio = precio
        this.imagen = imagen
    }
}
function separadorDeMiles(numero) {
    return numero.toLocaleString('es-ES');
}

function obtenerProductosLS() {
    const productosCarritoLS = JSON.parse(localStorage.getItem("productos"))

    if (productosCarritoLS) {
        carrito = productosCarritoLS
    }

    renderizaCarrito(carrito)
}

function guardarProductosLS() {
    const json = JSON.stringify(carrito)
    localStorage.setItem("productos", json)
}

function eliminarDelCarrito(productoCarrito) {
    const indiceProductoCarrito = carrito.findIndex((el) => {
        return el.nombre === productoCarrito.nombre
    })
    carrito.splice(indiceProductoCarrito, 1)
    renderizaCarrito(carrito)
    guardarProductosLS()
}

function renderizaCarrito(carrito) {
    tbodyCarrito.innerHTML = ""

    for(const productoCarrito of carrito) {
        const tr = document.createElement("tr")
        tr.innerHTML =`
        <td>${productoCarrito.nombre}</td>
        <td>$${separadorDeMiles(productoCarrito.precio)}</td>
        <td>${productoCarrito.cantidad}</td>
        <td>$${separadorDeMiles(productoCarrito.precio * productoCarrito.cantidad)}</td>`;

        const botonBorrar = document.createElement("button")
        botonBorrar.innerHTML = "Borrar";
        botonBorrar.addEventListener("click", () => {
            eliminarDelCarrito(productoCarrito)
        })
        tr.append(botonBorrar)

        tbodyCarrito.append(tr)
    }
}

function botonDinamicoComprar() {
    Swal.fire({
        title: "Se agrego al carrito correctamente",
        icon: "success",
        confirmButtonColor: "#A62177",
        iconColor: "#A62177",
        buttonsStyling: false
    });
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
        botonDinamicoComprar()
    } else {
        carrito[indiceProductoCarrito].cantidad += cantidad
        botonDinamicoComprar()
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
        <h3>$${separadorDeMiles(producto.precio)}</h3>`

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

function proximamente() {
    alert("proximamente")
}

let botonComprar = document.getElementById("comprarBoton")
let botonBorrar = document.getElementById("borrarBoton")

let contenedor = document.getElementById("contenedor")
let tbodyCarrito = document.getElementById("carrito")
let productos = [
    new producto("Torta de vainilla", 50000, "./imagenes/torta de vainilla.jpg"),
    new producto("Torta de chocolate", 40000, "./imagenes/torta de chocolate.jpg"),
    new producto("Torta de las tres leches", 70000, "./imagenes/torta tres leches.jpg")
]

let carrito = []
obtenerProductosLS()
renderizarProductos(productos)

botonComprar.addEventListener("click", proximamente)
botonBorrar.addEventListener("click", proximamente)