
/*document.getElementById("h1").addEventListener("dblclick", cambiarTexto);

function cambiarTexto(){
    let texto = document.getElementById("h1");
    texto.style.color = "purple";
    texto.style.fontSize = "50px";
}

//document.getElementById("input").addEventListener("change", escribirTexto);
document.getElementById("inputTexto").addEventListener("input", escribirTexto);

function escribirTexto(){
    let input = document.getElementById("inputTexto").value;
    let texto = document.getElementById("resultado");

    let cadena = String(input);
    //texto.innerText = revertirCadena(cadena);
}

function revertirCadena(cad){
    let cadInvertido ="";

    for(let i = cad.length - 1; i>=0; i--) {
        cadInvertido = cadInvertido + cad[i];
    }

    return cadInvertido;
}
/*
document.getElementById("h1").addEventListener("dblclick", () =>{
    let texto = document.getElementById("h1");
    texto.style.color = "purple";
    texto.style.fontSize = "50px";
})
*/
/*
document.getElementById("btn").addEventListener("mouseover", botonEntra);
document.getElementById("btn").addEventListener("mouseout", botonSale);

function botonEntra(){
    document.getElementById("btn").style.backgroundColor = "red";
}
function botonSale(){
    document.getElementById("btn").style.backgroundColor = "cyan";
}
*/

let eventos = ["click", "dblclick", "mouseover", "mouseout"
];

//Obtener todos los elementos del body
let elementos = document.querySelectorAll("body *");

//Evento aleatorio
let eventoRandom = Math.floor(Math.random() * eventos.length);
let evento = eventos[eventoRandom];

//Elemento aleatorio
let elementoRandom = Math.floor(Math.random() * elementos.length);
let elemento = elementos[elementoRandom];

console.log(evento + " " + elemento);
elemento.addEventListener(evento, eventoConseguido);

function eventoConseguido(){
    alert("Evento conseguido");
}



