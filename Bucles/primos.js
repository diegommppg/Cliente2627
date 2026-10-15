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
        return true;
    }
    else{
        return false;
    }
}

function esPrimoMejorado(numPrimo){
    for(let i=2; i<numPrimo; i++){
        if(numPrimo % i === 0){
            return false;
        }
    }
    return true;
}

function esPrimoMejorado2(numPrimo){
    for(let i=2; i<=Math.sqrt(numPrimo); i++){
        if(numPrimo % i === 0){
            return false;
        }
    }
    return true;
}


function calcularPrimos(num){
    for(let i=1; i<=num; i++){
        if(esPrimoMejorado2(i)){
            console.log("El numero " + i + " es primo");
        }
    }
}

calcularPrimos(num);