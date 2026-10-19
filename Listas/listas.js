let plantas = ["cactus", "bonsai", "olmo", "nenufar", "toxo"];

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

