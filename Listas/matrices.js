/*const array1 = [1, 2, 3, 6, 5, 4, 10, 8, 7, 3];
const array2 = [2, 2, 4, 5, 6, 7, 8, 9, 10];

function comprobarFrecuencia(a1, valor){
    return a1.filter(elemento => elemento === valor).length;
}


function arrayContiene(a1, a2){
    for(let el1 of a1){
        for(let el2 of a2){
            if(el1 === el2){
                return true;
            }
        }  
    }
    return false;
}

function arrayComun(a1, a2){
    let comunes = [];

    for(let el1 of a1){
        for(let el2 of a2){
            if(el1 === el2){
                comunes.push(el1);
            }
        }  
    }
    return comunes;
}

/*
function arrayContiene2(a1, a2){
    for(let el1 of a1){
        if(a2.includes(el1)){
            return true;
        }
    }
    return false;
}*/


/*

const contienen = arrayContiene(array1, array2);

const contienen2 = (array1, array2) => {
    for(let el1 of array1){
        if(array2.includes(el1)){
            return true;
        }
    }
    return false;   
}
console.log(contienen);

*/


let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function sumaMatriz(matriz){
    let suma = 0;

    for(let i=0; i < matriz.length; i++){
        for(let j=0; j<matriz[i].length; j++){
            suma += matriz[i][j];
        }
    }
    return suma;
}

function sumaDiagonal(matriz){
    let suma = 0; 

    for(let i=0; i < matriz.length; i++){
        for(let j=0; j<matriz[i].length; j++){
            if(i === j){
                suma += matriz[i][j];
            }
        }
    }
    return suma;
}

function sumaDiagonal2(matriz){
    let suma = 0; 

    for(let i=0; i < matriz.length; i++){
        suma += matriz[i][i];
    }
    return suma;
}