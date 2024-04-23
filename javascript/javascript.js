let compraT = 0;

function idValidoT(id) {
    let indice = -1

    for (let i = 0; i < tortas.length; i++) {
        if (tortas[i].id === id) {
            indice = [i]
        }
    }
    console.log(indice)
    return indice
}

function comprarT() {
    let idDelProducto = parseInt(prompt("ingresa el numero del producto que quiere comprar"))
    console.log(idDelProducto)
}

class torta {
    constructor(nombre, precio, id) {
        this.nombre = nombre
        this.precio = precio
        this.id = id
    }
}

const torta1 = new torta( "Torta de vainilla" , 10000 , 1)
const torta2 = new torta( "Torta de chocolate" , 20000 , 2)
const torta3 = new torta( "Torta de las tres leches" , 50000 , 3)
const torta4 = new torta( "Torta de red velvet" , 100000 , 4)

let tortas = [torta1, torta2, torta3, torta4]

class cupcake {
    constructor(nombre, precio, id) {
        this.nombre = nombre
        this.precio = precio
        this.id = id
    }
}

const cupcake1 = new cupcake( "Cupcake normal" , 5000 , 1)
const cupcake2 = new cupcake( "Cupcake personalizado" , 7000 , 2)
const cupcake3 = new cupcake( "Cupcake oreo" , 7000 , 3)
const cupcake4 = new cupcake( "Cupcake oro" , 100000000000 , 4)

let cupcakes = [cupcake1, cupcake2, cupcake3, cupcake4]

class postre {
    constructor(nombre, precio, id) {
        this.nombre = nombre
        this.precio = precio
        this.id = id
    }
}

const postre1 = new postre( "Postre limon" , 10000 , 9)
const postre2 = new postre( "Postre maracuya" , 10000 , 10)
const postre3 = new postre( "Gelatinas" , 5000 , 11)
const postre4 = new postre( "Cheesecake" , 7000, 12)

let postres = [postre1, postre2, postre3, postre4]

let venta = prompt("Bienvenido a nuestra web, aqui podras comprar nuestros productos, coloque el numero correspondiente para seleccionar los diferentes tipos de postres \n1) tortas \n2) cupcakes \n3) variedad")

while (venta == "1" || venta == "2"|| venta == "3") {
    switch (venta) {
        case "1":
            let tortasV = prompt("Aqui nuestras tortas, coloque el numero correspondiente para comprar \n1) Torta de vainilla, precio: $10.000 cop \n2) Torta de chocolate, precio: $20.000 cop \n3) Torta de las tres leches, precio: $50.000 cop \n4) Torta de red velvet, precio: $100.000 cop \n5) Cancelar compra\nEl precio total hasta ahora es de $" + compraT + " cop" +"\nPresiona cualquier letra o numero no disponible salir")
            while (tortas =="1" || tortas == "2" || tortas == "3" || tortas == "4" || tortas == "5") {
                
    }
            break;
        case "2":
            let cupcakes = prompt("Aqui nuestros cupcakes, coloque el numero correspondiente para comprar \n1) cupcake normal, precio: $5.000 cop \n2) cupcake con la decoracion que quieras, precio: $7.000 cop \n3) cupcake de oreo, precio: $7.000 cop \n4) cupcake de oro, precio: $100.000.000.000 cop \n5) Cancelar compra\nEl precio total hasta ahora es de $" + compraT + " cop" +"\nPresiona cualquier letra o numero no disponible salir")
            while (cupcakes =="1" || cupcakes == "2" || cupcakes == "3" || cupcakes == "4" || cupcakes == "5") {
                switch (cupcakes) {
                    case "1":
                        compraT = compraT + 5000
                    break;
                    case "2":
                        compraT = compraT + 7000
                    break;
                    case "3":
                        compraT = compraT + 7000
                    break;
                    case "4":
                        compraT = compraT + 100000000000
                    break;
                    case "5" :
                        compraT = 0
                    break;
                    default:
                        prompt("gracias por comprar")
                    break;
                }
                cupcakes = prompt("Aqui nuestros cupcakes, coloque el numero correspondiente para comprar \n1) cupcake normal, precio: $5.000 cop \n2) cupcake con la decoracion que quieras, precio: $7.000 cop \n3) cupcake de oreo, precio: $7.000 cop \n4) cupcake de oro, precio: $100.000.000.000 cop \n5) Cancelar compra\nEl precio total hasta ahora es de $" + compraT + " cop" +"\nPresiona cualquier letra o numero no disponible salir")
            }
        break;
        case "3":
            let postres = prompt("Aqui nuestros postres, coloque el numero correspondiente para comprar \n1) Postre de limon, precio: $10.000 cop \n2) Postre de maracuya, precio: $10.000 cop \n3) gelatinas, precio: $5.000 cop \n4) cheesecake, precio: $7.000 cop \n5) Cancelar compra\nEl precio total hasta ahora es de $" + compraT + " cop" +"\nPresiona cualquier letra o numero no disponible salir")
            while (postres =="1" || postres == "2" || postres == "3" || postres == "4" || postres == "5") {
                switch (postres) {
                    case "1":
                        compraT = compraT + 10000
                    break;
                    case "2":
                        compraT = compraT + 10000
                    break;
                    case "3":
                        compraT = compraT + 5000
                    break;
                    case "4":
                        compraT = compraT + 7000
                    break;
                    case "5" :
                        compraT = 0
                    break;
                    default:
                        prompt("gracias por comprar")
                    break;
                }
                postres = prompt("Aqui nuestros postres, coloque el numero correspondiente para comprar \n1) Postre de limon, precio: $10.000 cop \n2) Postre de maracuya, precio: $10.000 cop \n3) gelatinas, precio: $5.000 cop \n4) cheesecake, precio: $7.000 cop \n5) Cancelar compra\nEl precio total hasta ahora es de $" + compraT + " cop" + "\nPresiona cualquier letra o numero no disponible salir")
            }
        break;
        default:
        break;
    }
    venta = prompt("Bienvenido a nuestra web, aqui podras comprar nuestros productos, coloque el numero correspondiente para seleccionar los diferentes tipos de postres \n1) tortas \n2) cupcakes \n3) variedad")
}