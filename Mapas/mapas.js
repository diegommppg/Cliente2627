/*
let comida = ["pizza", "hamburguesa", "tacos", "sushi", "ensalada"];
let bebida = [];
bebida.push("agua");
bebida.push("refresco");
bebida.push("jugo");

let lista = new Array(10);
lista[0] = "manzana";
lista[1] = "banana";
let lista2 = new Array[10];
lista2[0] = "manzana";
lista2[1] = "banana"; //ERROR
*/

let estudiantes = new Map();

//Creamos
let animales = new Map([
    ['Gato', 'miau'],
    ['Perro', 'guau'],
    ['Vaca', 'muuuu'],
    ['Pavo', 'apagaluz'],
    ['Gochu', 'oink'],
    ['Serpiente', 'ssssss'],
    ['Cabra', 'beee'],
    ['Oveja', 'beee']
]);

//Añadir o modificar
animales.set('Gaviota', 'mio');
animales.set('Gato', 'grrrrr');

console.log(animales.get('Gato')); //

animales.delete('Serpiente');

for (let clave of animales.keys()) {
    console.log("Clave: " + clave);
    console.log("Valor: " + animales.get(clave));
    document.write("Clave: " + clave + 
        " Valor: " + animales.get(clave) + "<br>");
}

for (let valor of animales.values()) {
    console.log(valor);
}