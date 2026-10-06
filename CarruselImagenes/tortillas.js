function cambiarTortilla() {
    document.getElementById("tortilla").src = "img/con_queso.jpg";
}

function cambiarTortilla2() {
    if (document.getElementById("tortilla").src.includes("con_queso")) {
        document.getElementById("tortilla").src = "img/con-cebolla.webp";
    } else {
        document.getElementById("tortilla").src = "img/con_queso.jpg";
    }
}

let arrayTortillas = ["img/con_queso.jpg", "img/con-cebolla.webp", 
    "img/con-chorizo.jpg", "img/poco-hecha.jpeg", "img/de-compra.jpg"];

let contador = 0;

function carruselTortillas() {
    //contador = contador % arrayTortillas.length;

    document.getElementById("tortilla").src = arrayTortillas[contador];

    contador++;

    if(contador >= arrayTortillas.length) {
        contador = 0;
    }
}

//Cambiar la imagen de la tortilla cada 3 segundos
setInterval(carruselTortillas, 3000);
