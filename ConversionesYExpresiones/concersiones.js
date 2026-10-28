
/*let num1 = prompt("Introduce un numero");

console.log(Number(num1) + 31);
console.log(parseInt(num1) + 31);
*/

function convertir(){
    let input = document.getElementById("inputNumero").value;

    let valorConvertido = Number(input);

    document.getElementById("resultado").innerText = 
    "El resultado es: " + valorConvertido;
}

//Conversión de cadenas a números
parseInt();
Number();

//Convertir una cadena en un float
parseFloat();
Number();

//Convertir un numero en una cadena
String();

//Cuando una cadena no puede convertirse en número
NaN;
isNaN(); //Devuelve true si la cadena no puede convertirse en número



//Comprobamos si tienes la edad valida para
//entrar a la discoteca 
function comprobarEdad(){
    let input = document.getElementById("inputDiscoteca").value;

    let inputConvetido = Number(input);

    if(isNaN(inputConvetido) || inputConvetido<18 || inputConvetido>70){
        document.getElementById("resultadoEdad").innerText = 
            "No puedes entrar a la discoteca";
    }
    else{
        document.getElementById("resultadoEdad").innerText = 
            "Puedes entrar a la discoteca";
    }
}

//A3a2co 
//"[AG][1-8]a[A-Z0-9](co)"

function comprobarValidez() {
    let passwordInput = document.getElementById("password");

    let expresionPass = "^[A-Za-z0-9$*+]{8,15}$";
    let expresionCorreo = "^([a-z][a-zA-Z0-9]{4,15}@(gmail|hotmail)\.com)$";
    let expresionUrl="";

    let varRegex = new RegExp(expresionCorreo);
    
    if(varRegex.test(passwordInput.value)){
        //alert("Contraseña válida");
        passwordInput.style.borderColor = "green";
    }
    else{
        passwordInput.style.borderColor = "red";
        //alert("Contraseña no válida");
        //Mostrar mensaje de error
        //passwordInput.setCustomValidity("La contraseña debe tener al menos 8 caracteres alfanuméricos.");
        //passwordInput.reportValidity();
    }
}