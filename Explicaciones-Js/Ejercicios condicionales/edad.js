//()
/* if (pregunta == "comió hoy?"){
    no }
else {
            si
        }
 */
var edadJuan = parseInt(prompt("digita edad Juan") )
var edadKharla = parseInt(prompt("digita eda dkharla") )
var edadBrandon = parseInt(prompt("digita edad Brandon") )

if(edadJuan>edadKharla){
    if(edadJuan>edadBrandon){
        console.log("edad Juan es mayor que edad Kharla y edad Brandon")
    }else{
        console.log("edad Brandon es mayor que edad Kharla y edad Juan")
    }
}else{
    if(edadKharla> edadBrandon){
        console.log("edad Kharla es mayor que edad Juan y edad Brandon")
    }else{
        console.log("edad Brandon es mayor que edad Juan y edad Kharla")
    }
}
       