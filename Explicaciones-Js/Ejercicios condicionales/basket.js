/* Una institución deportiva necesita seleccionar un jugador para participar en el equipo
de baloncesto. Los requisitos son: Estatura, velocidad y edad. Si el usuario cumple con la estatura y la velocidad puede ingresar al equipo, de lo
contrario no. Si cumple con la condición anterior, dependiendo de la edad el usuario pasara a las
divisiones menores o al equipo profesional de mayores. */

var estatura = parseInt (prompt("Digite su estatura"))
var velocidad = parseInt (prompt("Digite su velocidad"))
var edad = parseInt(prompt("Digite su edad"))

if (estatura >= 175) {
    console.log("Aprobado")
    if (velocidad >= 100) {
        console.log("Aprobado")
        if (edad <= 17) {
            console.log("divisiones menores")
            if (edad >= 18) {
                console.log("equipo profesional de mayores")
            } else {
                console.log("no aprobado")
            }
        }

    }
}