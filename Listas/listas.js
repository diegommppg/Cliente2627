/*let plantas = ["cactus", "bonsai", "olmo", "nenufar", "toxo"];

//Acceder a un elemento
console.log("Primer elemento: " + plantas[0]);

//Añadir un nuevo elemento al final
plantas.push("pino");

//Elimminar un elemento
plantas.pop();

//Modificar elemento
//plantas[2] = "lirio";

//Eliminar elemento en posicion especifica
//plantas.splice(2, 2);

//Eliminar todos los elementos desde la posicion
//plantas.splice(2);

//Añadir elemento en posicion especifica
//plantas.splice(1, 0, "jazmin");

//Añadir y eliminar
plantas.splice(3, 2, "roble", "pino");

//Recorrer la lista
for(let p of plantas){
    console.log(p);
}


/////////////////////////
//Crear elemento en el body
let parrafo = document.createElement("p");
parrafo.innerHTML = "Esto es un parrafo";
document.body.appendChild(parrafo);

//Añadir elemento a lista
let li = document.createElement("li");
li.innerHTML = "Rosa";
document.getElementById("listaPlantas").appendChild(li);

//Recorrer lista platas y añadir a la lista
for(let p of plantas){
    let li = document.createElement("li");
    li.innerHTML = p;
    document.getElementById("listaPlantas").appendChild(li);
}

*/

const anios = [2007, 2005, 1999, 2010, 2006, 1996, 1992,
                1988, 1984, 1980, 1976, 1972, 1968, 1964,
                1960, 1956, 1952, 1948, 1944, 1940, 1936,
];

//filter
/*let aniosMenores2000 = anios.filter(anio => anio < 2000);

/*
//Sin lambda
let aniosMenores2000 = anios.filter(function(anio){
    return anio < 2000;
});
*/
/*
console.log(aniosMenores2000);
*/

/*
//map
 const precios = [80, 90, 80, 15, 30];

 let nuevosPrecios = precios.map(precio => precio * 1.21);

 console.log(nuevosPrecios);
*/

//sort
/*const precios = [80, 90, 80, 15, 130];

function ordenarPrecios(a, b){
    return a - b;
}

let nuevosPrecios = precios.sort(ordenarPrecios);

//let nuevosPrecios2 = precios.sort((a, b) => a - b);

console.log(nuevosPrecios);
*/

/*
//find
let animales = [
  {nombre: "Ornitorrinco", color: "Marron", isMamifero: true},
  {nombre: "Caiman", color: "Verde", isMamifero: false},
  {nombre: "Kiwi", color: "Marron", isMamifero: false}
];

let animal = animales.find(animal => animal.nombre === "Ornitorrinco");

console.log(animal);

function buscarAnimal() {
  let inputAnimal = document.getElementById("inputAnimal").value;

  let animal = animales.find(animal => 
    animal.nombre.toLowerCase() === inputAnimal.toLowerCase());

    if(animal){
        // Mostrar información del animal encontrado
        let info = `Nombre: ${animal.nombre}, Color: ${animal.color}, ¿Es mamífero?: ${animal.isMamifero}`;
        let parrafo = document.createElement("p");
        parrafo.innerHTML = info;
        document.body.appendChild(parrafo);
    }
}
*/
//Reduce
/*
let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

alert(result);

suma = 0;
for (current of arr) {
  suma += arr[i];
}

const valorInventario = productos.reduce((total, producto) => {
  return total + producto.precio * producto.stock;
}, 0);

console.log(valorInventario);
*/

const productos = [
  { nombre: "Teclado", precio: 25, stock: 8 },
  { nombre: "Ratón", precio: 15, stock: 0 },
  { nombre: "Monitor", precio: 180, stock: 4 },
  { nombre: "Alfombrilla", precio: 10, stock: 12 }
];

const hayAgotados = productos.some(producto => {
  return producto.stock === 0;
});

console.log(hayAgotados);

const todosTienenStock = productos.every(producto => {
  return producto.stock > 0;
});

console.log(todosTienenStock);

let stock = true;
for(elemento of productos){
    if(elemento.stock <= 0){
        stock = false;
        break;
    }
}
console.log(stock);