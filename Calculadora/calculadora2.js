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