let num = prompt("Introduce un número: ");

console.log("El numero es: " + num);

//Un numero primo es aquel que solo puede ser dividido por 1 y 
// por el mismo.

function esPrimo(numPrimo){
    let multiplo = 0;
    for(let i=1; i<=numPrimo; i++){
        if(numPrimo % i === 0){
            multiplo++;
        }
    }

    if(multiplo == 2){
        console.log("Es primo");
    }
    else{
        console.log("No es primo");
    }
}

esPrimo(num);