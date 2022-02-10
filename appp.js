// Esto VIENE DE ABAJO.. QUIERO METERLE LA LOGICA

/*const unaFuncion = function (){for (const tipo of stockHabitacion){
    console.log(tipo.precio)}; 
}
let costo;

function costoinicial (unaFuncion,noches){
    return costo = unaFuncion*noches
}*/


/*

console.log (costoinicial)
let IVA;
function suma(c,d){
    return IVA = c*d
}
let valorTotal;
function total(e,f) {
    return valorTotal = e+f
}
*/


let boton =document.getElementById("Simple")
boton.addEventListener("click", respuestaClick)
function respuestaClick(){
    let noches = parseInt(prompt("Cuantas noches se alojara: "));
}
let boton2 =document.getElementById("Doble")
        boton2.onclick= ()=> {console.log("Selecciono habitacion doble")}

let boton3 =document.getElementById("Matrimonial")
        boton3.onclick= ()=> {console.log("Selecciono habitacion matrimonial")}
let boton4 =document.getElementById("Compartida")
        boton4.onclick= ()=> {console.log("Selecciono habitacion compartida")}
        boton2.onmousemove= () => {console.log("Move")}

//Funcion que captura datos desde cuadro de texto de formulario

function captura(){
    var noches=document.getElementById("noches").value;
    var pago=document.getElementById("pago").value;
    
    if (pago=="credito"){}
    
    
    
    console.log("usted a seleccionado " +noches + " noches y pagara con " +pago );
    }




// Se quiere simular precio de habitacion segun tipo, noches y modo de pago



/*

let habitacion = prompt("Qué tipo de habitacion desea \na)simple \nb)doble o \nc) matrimonial \nSeleccione a - b - c")
let noches = parseInt(prompt("Cuantas noches se alojara: "))
console.log (noches + " noches a alojarse ")

let costo;
function costoinicial (a,b){
    return costo = a*b
}

let IVA;
function suma(c,d){
    return IVA = c*d
}
let valorTotal;
function total(e,f) {
    return valorTotal = e+f
}

if (habitacion == "a"){
    //aca queria hacer una evaluacion del dia considerandon que cada dia el precio varia, ejemplo dias de semana mas barato que los findes. #NO HUBO FORMA
        costoinicial (730 , noches);
        suma (costo , 0.21);
        total (costo , IVA);
                alert("El precio de su habitacion es  $" + valorTotal.toFixed(2));
       // alert ("La cantidad de noches a alojarse es de " + noches + "\nCada noche costara en promedio $" + (valorTotal /noches) + " para una habitacion individual");
        }
else if (habitacion == "b"){
        costoinicial (810 , noches);
        suma (costo , 0.21);
        total (costo , IVA);
        alert("El precio de su habitacion doble es  $" + valorTotal.toFixed(2));
       // alert ("La cantidad de noches a alojarse es de " + noches + "\nCada noche costara en promedio $" + (valorTotal /noches) + " para una habitación doble");
        }
    
    
else if (habitacion == "c"){
            costoinicial (830 , noches);
            suma (costo , 0.21);
            total (costo , IVA);
            alert("El precio de su habitacion matrimonial es  $" + valorTotal.toFixed(2));
         //   alert ("La cantidad de noches a alojarse es de " + noches + "\nCada noche costara en promedio $" + (valorTotal /noches) + " para una habitación matrimonial");
            
    
       
} else{
    alert("Por favor, ingrese una opción adecuada")
    ;
}
alert( "Los precios indicados son para pagos con tarjeta de debito. \n La compra con crédito tiene interes asociado. ");

//El recargo en 3 cuotas es 10% y en 6 cuotas es 15%. En una cuota no hay recargo.

let resultado;
function recargo (g,h){
   return resultado = (g*h)/100

}
let precioConRecargo;
function sum (i,j){
    return precioConRecargo = i+j
}

let condicion = true;
while (condicion){


formapago = prompt("seleccione su forma de pago: \na) Debito \nb) Credito ")
   
    if (formapago=="a"){
        alert("Su reserva mantiene el precio final de " + valorTotal.toFixed(2) + ".");
    break;

    }else if (formapago== "b") {{
        let cantcuotas = parseInt(prompt("Elija cantidad de cuotas: 1 -  3 - 6"));{
        switch(cantcuotas){
            case 1:
                recargo (valorTotal , 0);
                sum (valorTotal , resultado);
                alert ("El precio de la habitación se mantiene en " + precioConRecargo.toFixed(2));
                break;
            case 3:
                recargo (valorTotal , 10);
                sum (valorTotal , resultado);
                alert ("El precio de la habitación con recargo del 10% es " + precioConRecargo.toFixed(2) + " a pagar en 3 cuotas de " + precioConRecargo.toFixed(3)/3);
                break;
            case 6:
                recargo (valorTotal , 15);
                sum (valorTotal , resultado);
                alert ("El precio de la habitación con recargo del 15% es " + precioConRecargo.toFixed(2) + " a pagar en 6 cuotas de " + precioConRecargo.toFixed(2)/6);
                break;
            default: 
                alert ("Los datos ingresados no son correcto. Seleccione un valor de cuotas habilitado.");
                continue;
            }
        }
    }}break;
} 
console.log("Genero primer array con objetos dentro")
const Habitacion =[{id: 1, tipo: "simple", precio: 730, cantidad: 4},
                   {id: 2, tipo: "doble", precio: 810, cantidad: 3},
                   {id: 3, tipo: "matrimonial", precio: 830, cantidad : 3}];

console.log(Habitacion)
console.log("--------")
/*const hab1 ={id: 1, producto: "simple", precio: 730}
const hab2 ={id: 2, producto: "doble", precio: 810}
const hab3 ={id: 3, producto: "matrimonial", precio: 830}

const Habitacion =[hab1, hab2, hab3];
*/
//const Habitacion = ["simple", "doble", "matrimonial"];
//console.log(Habitacion)
/*
for (const tipo of Habitacion){
    console.log(tipo.tipo);
    console.log(tipo.precio);
}
console.log("_-------")
console.log("Imprimo el objeto segun index array")

console.log(Habitacion[0])

//"Agrego cuarta categoria de habitacion");

console.log("Agrego cuarta categoria de habitacion al ARRAY")
Habitacion.push({id:4 , tipo: "compartida", precio: 320, cantidad: 2});





for (const tipo of Habitacion){
    console.log(tipo.tipo);
    console.log(tipo.precio);
}
//console.log(Habitacion[3[1]]);

//const Precios = [730, 810, 830]
//console.log (Precios)



for (let tipo of Habitacion){
    let contenedor = document.createElement("div");
    //definimos el Inner HTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<h3> Tipo: ${tipo.tipo}</h3>
                            <h3> Precio $: ${tipo.precio}</h3>
                            <p> Cantidad: ${tipo.cantidad}</p>`;
    document.body.appendChild(contenedor);
}

// Crear el elemento

var elemento = document.createElement("h2");

// Crear un nodo de texto
var hab = document.createTextNode("Usted selecciono una habitacion " + habitacion)
var cantnoches = document.createTextNode("Usted desea alojarse " + noches + " noches.")
var pag = document.createTextNode("La forma de pago seleccionada es " + formapago)
var preciofin = document.createTextNode("El precio final a abonar es de " + precioConRecargo + ".")
//Añadir el nodo de texto al elemento
elemento.appendChild(hab);
elemento.appendChild(cantnoches);
// Agregar atributos al elemento
elemento.setAttribute("align", "left");

// Agregar el elemento al documento
document.getElementById("habitacion").appendChild(elemento);
document.getElementById("noches").appendChild(elemento);
document.getElementById("pago").appendChild(elemento);
document.getElementById("preciofinal").appendChild(elemento);

// Queria mostrar esos elementos en pantalla. pero no le encontrè la vuelta 
//tampoco supe como separar por reglon..
// Otro error es que me tira el tipo de habitacion que selecciono como a -b- c y no literalmente el nombre del tipo

*/
