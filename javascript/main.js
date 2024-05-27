class producto {
    constructor(nombre, precio, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

function separadorDeMiles(numero) {
    return numero.toLocaleString('es-ES');
}

function simularCompra() {
    return new Promise((resolve, reject) => {
        // Simulación de compra asíncrona
        setTimeout(() => {
            const exito = Math.random() < 0.8; // Simula un 80% de éxito en la compra
            if (exito) {
                resolve(); // Resolvemos la promesa si la compra tiene éxito
            } else {
                reject("Error al procesar la compra. Por favor, inténtelo de nuevo."); // Rechazamos la promesa si hay un error en la compra
            }
        }, 2000); // Simulamos una demora de 2 segundos
    });
}

function obtenerProductosLS() {
    const productosCarritoLS = JSON.parse(localStorage.getItem("productos"));

    if (productosCarritoLS) {
        carrito = productosCarritoLS;
    }

    renderizaCarrito(carrito);
}

function guardarProductosLS() {
    const json = JSON.stringify(carrito);
    localStorage.setItem("productos", json);
}

function eliminarDelCarrito(productoCarrito) {
    const indiceProductoCarrito = carrito.findIndex((el) => {
        return el.nombre === productoCarrito.nombre;
    });
    carrito.splice(indiceProductoCarrito, 1);
    renderizaCarrito(carrito);
    guardarProductosLS();
    Swal.fire({
        title: "Se eliminó correctamente del carrito",
        icon: "error",
        confirmButtonColor: "#A62177",
        iconColor: "#A62177",
        buttonsStyling: false
    });
}

function vaciarCarrito() {
    carrito = [];
    renderizaCarrito(carrito);
    guardarProductosLS();
    Swal.fire({
        title: "Se ha vaciado el carrito",
        icon: "success",
        confirmButtonColor: "#A62177",
        iconColor: "#A62177",
        buttonsStyling: false
    });
}

function renderizaCarrito(carrito) {
    tbodyCarrito.innerHTML = "";

    for (const productoCarrito of carrito) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${productoCarrito.nombre}</td>
        <td>$${separadorDeMiles(productoCarrito.precio)}</td>
        <td>${productoCarrito.cantidad}</td>
        <td>$${separadorDeMiles(productoCarrito.precio * productoCarrito.cantidad)}</td>`;

        const botonBorrar = document.createElement("button");
        botonBorrar.innerHTML = "Borrar";
        botonBorrar.addEventListener("click", () => {
            eliminarDelCarrito(productoCarrito);
        });
        tr.appendChild(botonBorrar); 

        tbodyCarrito.appendChild(tr); 
    }
}

function botonDinamicoComprar() {
    Swal.fire({
        title: "Se agregó al carrito correctamente",
        icon: "success",
        confirmButtonColor: "#A62177",
        iconColor: "#A62177",
        buttonsStyling: false
    });
}

function agregarAlCarrito(producto, cantidad) {
    if (isNaN(cantidad) || cantidad <= 0) {
        Swal.fire({
            title: 'Cantidad inválida',
            text: 'Por favor ingrese un número válido y positivo.',
            icon: 'error',
            confirmButtonColor: "#A62177",
            iconColor: "#A62177",
            buttonsStyling: false
        });
        return;
    }

    const indiceProductoCarrito = carrito.findIndex((el) => {
        return el.nombre === producto.nombre;
    });
    if (indiceProductoCarrito === -1) {
        carrito.push({
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: cantidad
        });
        botonDinamicoComprar();
    } else {
        carrito[indiceProductoCarrito].cantidad += cantidad;
        botonDinamicoComprar();
    }
    renderizaCarrito(carrito);
    guardarProductosLS();
}

function renderizarProductos(productos) {
    contenedor.innerHTML = "";

    for (const producto of productos) {
        const div = document.createElement("div");
        div.className = "producto";
        div.innerHTML = `<h3>${producto.nombre}</h3>
        <img class="imagen" src="${producto.imagen}" alt="">
        <h3>$${separadorDeMiles(producto.precio)}</h3>`;

        const input = document.createElement("input");
        input.placeholder = "cantidad";
        input.type = "number";

        const button = document.createElement("button");
        button.innerText = "agregar";

        button.addEventListener("click", () => {
            const cantidad = parseInt(input.value);
            agregarAlCarrito(producto, cantidad);
        });

        div.appendChild(input); 
        div.appendChild(button); 
        contenedor.appendChild(div); 
    }
}

function comprarProductos() {
    if (carrito.length === 0) {
        Swal.fire({
            title: "El carrito está vacío",
            icon: "warning",
            confirmButtonColor: "#A62177",
            iconColor: "#A62177",
            buttonsStyling: false
        });
        return;
    }

    const precioTotal = carrito.reduce((total, productoCarrito) => total + (productoCarrito.precio * productoCarrito.cantidad), 0);
    const interes = precioTotal * 0.10;
    const precioFinal = precioTotal + interes;

    Swal.fire({
        title: `<p>Total productos: <strong>$${separadorDeMiles(precioTotal)}</strong></p>
        <p>Impuestos (10%): <strong>$${separadorDeMiles(interes)}</strong></p>
        <p>Total: <strong>$${separadorDeMiles(precioFinal
        )}</strong></p>`,
        icon: "info",
        showCancelButton: true,
        confirmButtonText: 'Comprar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: "#A62177",
        cancelButtonColor: "#d33",
        iconColor: "#A62177",
        buttonsStyling: false
    }).then((result) => {
        if (result.isConfirmed) {
            simularCompra()
                .then(() => {
                    Swal.fire({
                        title: '¡Compra realizada!',
                        text: `El precio total de su compra es $${separadorDeMiles(precioFinal)}.`,
                        icon: 'success',
                        confirmButtonColor: "#A62177",
                        iconColor: "#A62177",
                        buttonsStyling: false
                    });
                    carrito = [];
                    renderizaCarrito(carrito);
                    guardarProductosLS();
                })
                .catch((error) => {
                    Swal.fire({
                        title: 'Error',
                        text: error,
                        icon: 'error',
                        confirmButtonColor: "#A62177",
                        iconColor: "#A62177",
                        buttonsStyling: false
                    });
                });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire({
                title: 'No se compró nada',
                icon: 'info',
                confirmButtonColor: "#A62177",
                iconColor: "#A62177",
                buttonsStyling: false
            });
        }
    });
}

let botonComprar = document.getElementById("comprarBoton");
let botonBorrar = document.getElementById("borrarBoton");
let botonBorrarTodo = document.getElementById("borrarTodoBoton");

let contenedor = document.getElementById("contenedor");
let tbodyCarrito = document.getElementById("carrito");
let productos = [
    new producto("Torta de vainilla", 50000, "./imagenes/torta de vainilla.jpg"),
    new producto("Torta de chocolate", 40000, "./imagenes/torta de chocolate.jpg"),
    new producto("Torta de las tres leches", 70000, "./imagenes/torta tres leches.jpg")
];

let carrito = [];
obtenerProductosLS();
renderizarProductos(productos);

botonComprar.addEventListener("click", comprarProductos);
botonBorrar.addEventListener("click", vaciarCarrito);
