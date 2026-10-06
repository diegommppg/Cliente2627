function cambiarVerde(){
    document.body.style.backgroundColor = "green";
}

function cambiarRojo(){
    document.body.style.backgroundColor = "red";
}

function cambiarAzul(){
    document.body.style.backgroundColor = "blue";
}

function cambiarAmarillo(){
    document.body.style.backgroundColor = "yellow";
}

function cambiarColor(color){
    document.body.style.backgroundColor = color;
}

function cambiarColor2(boton){
    document.body.style.backgroundColor = boton.style.backgroundColor;
}

/*

document.querySelectorAll("div").forEach(elemento => {
    elemento.addEventListener("click", function(){
        document.body.style.backgroundColor = this.style.backgroundColor;
    });
});*/





//lambda
let animales = ["perro", "gato", "conejo", "loro"];

//for
for(let i = 0; i < animales.length; i++){
    console.log(animales[i]);
}

/*
//foreach java
for(elemento : animales){
    System.out.println(elemento);
}*/

//forEach con of
for(let animal of animales){
    console.log(animal);
}

//forEach con lambda
animales.forEach(animal => {
    console.log(animal);
});


//ejemplo lambda con dos parametros
let numeros = [1, 2, 3, 4, 5];

numeros.forEach((numkk, index) => {
    console.log(numkk, index);
});

for(let i = 0; i < numeros.length; i++){
   num = numeros[i];
   index = i;
   console.log(num, index);
}


