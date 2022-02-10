let stockHabitacion =[
    {id: 1, tipo: "Simple", precio: 730, cantidad: 4, img: "./img/simple.jpg"},
    {id: 2, tipo: "Doble", precio: 810, cantidad: 3, img: "./img/doble.jpg"},
    {id: 3, tipo: "Matrimonial", precio: 830, cantidad : 3, img: "./img/matrimonial.jpg"},
    {id: 4, tipo: "Compartida", precio: 400, cantidad: 2, img: "./img/compartida.jpg"}
];

for (const tipo of stockHabitacion){
   
    console.log(tipo.precio);
}
