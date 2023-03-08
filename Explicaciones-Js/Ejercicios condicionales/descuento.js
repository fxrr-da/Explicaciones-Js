/* Un almacén de escritorios hace los siguientes descuentos: Si el cliente compra menos
de 5 unidades se le da un descuento del 10% sobre la compra; si el número de unidades
es mayor o igual a cinco pero menos de 10 se le otorga un 20% y, si son 10 o más se
le da un 40%. Hacer un algoritmo para determinar cuánto debe pagar un cliente por el
escritorio y cuánto por el descuento. */

var unidades = parseInt(prompt("Digita cantides"))
var totalapagar = 100000
if (unidades<5) {
    console.log("Descuento del 10%")
    totalapagar = totalapagar-(totalapagar*0.1)
    console.log ("total a pagar con desuento" + totalapagar)
}
else {
    if (unidades >= 5) {
        if (unidades < 10) {
            console.log("Descuento del 20%")
            totalapagar = totalapagar * 20 % -totalapagar
            console.log ("total a pagar con desuento" + totalapagar)
        }
    } else {
        if (unidades >= 10) {
            console.log("si es mayor o igual 40%")
            totalapagar = totalapagar * 40 % -totalapagar
            console.log  ("total a pagar con desuento" + totalapagar)
        }
    }
}

