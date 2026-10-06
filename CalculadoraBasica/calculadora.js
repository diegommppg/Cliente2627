let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

function sumar() {
    let suma = Number(num1.value) + Number(num2.value);
    document.getElementById("resultado").innerHTML = 
    "El resultado de la suma es: " + suma;
}

function restar() {
    let resta = Number(num1.value) - Number(num2.value);
    document.getElementById("resultado").innerHTML = 
    "El resultado de la resta es: " + resta;
}

function multiplicar() {
    let multiplicacion = Number(num1.value) * Number(num2.value);
    document.getElementById("resultado").innerHTML = 
    "El resultado de la multiplicación es: " + multiplicacion;
}

function dividir() {
    let division = Number(num1.value) / Number(num2.value);
    document.getElementById("resultado").innerHTML = 
    "El resultado de la división es: " + division;
}