/* calcule el promedio e imprima lo siguiente:
Si el promedio es iguala a 10 mostrar "Excelente".
Si el promedio es >7 y <=10 mostrar "Bueno".
Si el promedio es <7 mostrar "Insuficiente". */


var matematicas = parseInt(prompt("Digite nota matematicas"))
var espanol = parseInt(prompt("Digite nota espanol"))
var sociales = parseInt(prompt("Digite nota sociales"))
var promedio = 0

promedio =  (matematicas+espanol+sociales)/3
console.log("Promedio "+ promedio)
if (promedio == 10) {
    console.log("Excelente")
} else {
     if (promedio >=7) {
        if (promedio <= 10)
            console.log("Bueno")
    } else {
        console.log("insuficiente")
    }
}

