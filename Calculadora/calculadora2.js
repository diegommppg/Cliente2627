let operacion = "";
function agregarCifra(cifra){
    operacion += cifra;
    updateDisplay();
}

function updateDisplay(){
    document.getElementById("display").innerHTML 
    = operacion;
}

function clearDisplay(){
    operacion = "";
    updateDisplay();
}

document.getElementById("botonIgual").addEventListener("click", calcular);

/*
document.getElementById("botonIgual").addEventListener("click", () => {
    let resultado = eval(operacion);
    operacion = resultado.toString();
    document.getElementById("display").innerHTML = resultado;
});*/


function calcular(){
    let resultado = eval(operacion);
    operacion = resultado.toString();
    document.getElementById("display").innerHTML = resultado;
}

