function ocultarCar() {
    //document.getElementById("cars").style.display = "none";
    document.getElementById("cars").style.visibility = "hidden";
}
function mostrarCar() {
    //document.getElementById("cars").style.display = "block";
    document.getElementById("cars").style.visibility = "visible";
}

function ocultarKunFu() {
    //document.getElementById("kunfu").style.display = "none";
    document.getElementById("kunfu").style.visibility = "hidden";
}
function mostrarKunFu() {
    //document.getElementById("kunfu").style.display = "block";
    document.getElementById("kunfu").style.visibility = "visible";
}

function mostrarOcultar() {
    if (document.getElementById("cars").style.visibility == "hidden") {
        document.getElementById("cars").style.visibility = "visible";
        document.getElementById("kunfu").style.visibility = "hidden";
    }
    else {
        document.getElementById("cars").style.visibility = "hidden";
        document.getElementById("kunfu").style.visibility = "visible";
    }
}