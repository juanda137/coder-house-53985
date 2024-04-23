class producto {
    constructor(id, nombre, precio, stock) {
        this.id = id
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

let precioTotal = 0;

function nombreValido(id) {

    let indice = -1;

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].id === id) {
            indice = i
        }
    }
    return indice;
}


function comprar() {
    let numeroProducto = parseInt(prompt("\nIngresa el numero correspondiente para comprar\n\nTortas\n\n1) Torta de vainilla\n2) Torta de Chocolate\n3) Torta de las tres leches\n\nCupcakes\n\n4) Cupcake normal\n5) Cupcake personalizado\n6) Cupcake oreo\n"))
    let indiceProducto = nombreValido(numeroProducto)
    console.log(indiceProducto)
    while (indiceProducto === -1) {
        numeroProducto = parseInt(prompt("\nIngresa el numero correspondiente para comprar\n\nTortas\n\n1) Torta de vainilla\n2) Torta de Chocolate\n3) Torta de las tres leches\n\nCupcakes\n\n4) Cupcake normal\n5) Cupcake personalizado\n6) Cupcake oreo\n"))
        indiceProducto = nombreValido(numeroProducto)
    }
    let producto = productos[indiceProducto];
    let cantidad = parseInt(prompt("El precio de " + producto.nombre + " es de $" + producto.precio + " elige la cantidad que deseas comprar.\nTen en cuenta que solo tenemos este stock "+ producto.stock))
    if (cantidad > producto.stock) {
        alert("lo lamentamos, no contamos con suficiente stock")
    } else if (cantidad <= 0) {
        alert("lo lamentamos pero no escogiste una cantidad valida")
    } else {
        producto.stock = producto.stock - cantidad;
        precioParcial = producto.precio * cantidad
        alert("Se compro " + cantidad + " de " + producto.nombre + ", el total es de $" + precioParcial +".\nEl stock sobrante es de " + producto.stock)
        carrito.push(producto.nombre)
        precioTotal = precioTotal + precioParcial
    }
}

const producto1 = new producto( 1 ,"Torta de vainilla", 10000 , 10)
const producto2 = new producto( 2 ,"Torta de Chocolate", 20000 , 5)
const producto3 = new producto( 3 ,"Torta de las tres leches", 50000 , 3)
const producto4 = new producto( 4 ,"Cupcake normal", 5000 , 20)
const producto5 = new producto( 5 ,"Cupcake personalizado", 7000 , 20)
const producto6 = new producto( 6 ,"Cupcake oreo", 7000 , 30)

const productos = [producto1, producto2, producto3, producto4, producto5, producto6]
let carrito = [""]

let opcion = parseInt(prompt("Bienvenidos a Susi Fiallo pasteleria\nMarque el numero indicado para acceder\n\n1) Comprar\n2) Cancelar compra\nSi desea comprar marque 3 y si desea salir marque cualquier otro numero"))

while (opcion === 1 || opcion === 2 || opcion === 3) {
    switch (opcion) {
        case 1:
            comprar()
            break;
        case 2:
            let RTAcarrito = prompt("tu carrito actualmente contiene los siguientes elementos: \n" + carrito + "\nSi deseas eliminarlos escribe la palabra Eliminar")
            if (RTAcarrito === "Eliminar") {
                carrito = carrito[""]
            } else {
            }
            break;
        case 3:
            carrito = carrito[""]
            alert("Tu compra fue de $" + precioTotal)
            break;
        default:
            break;
    }
    opcion = parseInt(prompt("Bienvenidos a Susi Fiallo pasteleria\nMarque el numero indicado para acceder\n\n1) Comprar\n2) Cancelar compra\nSi desea comprar marque 3 y si desea salir marque cualquier otro numero"))
}