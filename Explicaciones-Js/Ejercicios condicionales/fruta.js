/* Por medio de un alert ofrecer un listado de 6 frutas diferentes.Cada una tiene un valor diferente. 
Dependiendo de la fruta y la cantidad se deberá imprimir:
 Nombre de la fruta, valor por unidad, valor del total de los productos comprados.*/

 var banano=parseInt(prompt("precio banano = 1000, digite la cantidad de bananos"))
 var peras=parseInt(prompt("precio peras = 1300, digite la cantidad de peras"))
 var kiwis=parseInt(prompt("precio kiwis = 2000, digite la cantidad"))
 var mango=parseInt(prompt("precio mango = 2000, digite la cantidad"))
 var manzana=parseInt(prompt("precio manzana = 2000, digite la cantidad"))
 var sandia=parseInt(prompt("precio sandia = 2000, digite la cantidad"))
 var total=0
 var totalBanano=0 
 var totalPeras=0
 var totalKiwis=0
 var totalMango=0
 var totalManzana=0
 var totalSandia=0
 var cantidadComprada=0
 

 if (banano>=0){
totalBanano=banano*1000
 }if (peras>=0){
    totalPeras=peras*1300
 }if (kiwis>=0){
    totalKiwis=kiwis*2000
 }if (mango>=0){
    totalMango=mango*2000
 }if (manzana>=0){
    totalManzana=manzana*2000
 }if (sandia>=0){
    totalSandia=sandia*2000
 }
 total= totalBanano+totalPeras+totalKiwis+totalMango+totalManzana+totalSandia+total
 alert (cantidadComprada+total)

   
 
