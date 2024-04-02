let venta = prompt("Bienvenido a nuestra web, aqui podras comprar nuestros productos, coloque el numero correspondiente para seleccionar los diferentes tipos de postres \n1) tortas \n2) cupcakes \n3) variedad")

let compraT = 0;

while (venta == "1" || venta == "2"|| venta == "3") {
    switch (venta) {
        case "1":
            let tortas = prompt("Aqui nuestras tortas, coloque el numero correspondiente para comprar \n1) Torta de vainilla, precio: $10.000 cop \n2) Torta de chocolate, precio: $20.000 cop \n3) Torta de las tres leches, precio: $50.000 cop \n4) Torta de red velvet, precio: $100.000 cop \n5) Cancelar compra\nEl precio total hasta ahora es de $" + compraT + " cop" +"\nPresiona cualquier letra o numero no disponible salir")
            while (tortas =="1" || tortas == "2" || tortas == "3" || tortas == "4" || tortas == "5") {
                switch (tortas) {
                    case "1":
                        compraT = compraT + 10000
                    break;
                    case "2":
                        compraT = compraT + 20000
                    break;
                    case "3":
                        compraT = compraT + 50000
                    break;
                    case "4":
                        compraT = compraT + 100000
                    break;
                    case "5" :
                        compraT = 0
                    break;
                    default:
                        prompt("gracias por comprar")
                    break;
                }
                tortas = prompt("Aqui nuestras tortas, coloque el numero correspondiente para comprar \n1) Torta de vainilla, precio: $10.000 cop \n2) Torta de chocolate, precio: $20.000 cop \n3) Torta de las tres leches, precio: $50.000 cop \n4) Torta de red velvet, precio: $100.000 cop \n5) Cancelar compra\nEl precio total hasta ahora es de $" + compraT + " cop" +"\nPresiona cualquier letra o numero no disponible para comprar")
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