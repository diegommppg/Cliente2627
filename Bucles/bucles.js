//Calcula el factorial de un numero dado
let numero = 9; // Cambia este valor para calcular el factorial de otro número

let factorial = 1;

for(let i=1; i<=numero; i++){
    factorial = factorial * i;
}
console.log("El factorial de  " + numero + " es: " + factorial);


console.log("El factorial de  " + numero + " es: " + factorial);

//Suma de todos los pares desde 50 hasta 8000
//for

let suma=0;
for(let i=50; i<=8000; i++){
    if(i % 2 == 0){
        suma = suma + i;
    }
}
console.log("La suma de todos los pares desde 50 hasta 8000 es: " + suma);


//while
let sumaWhile=0;
let iwhile=53;

if(iwhile % 2 == 1){
    iwhile++;
}
while(iwhile <= 8000){
    sumaWhile+=iwhile;
    
    iwhile+=2;
}


//do-while
let sumadoWhile=0;
let idoWhile=50;

do{
    sumadoWhile+=idoWhile;
    idoWhile+=2;
} while(idoWhile <= 8000);