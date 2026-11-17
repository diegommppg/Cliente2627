//Crear objeto producto
let producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}
console.log(producto);

//Acceder a un valor del objeto
console.log(producto.nombre);


//Otra manera
class Pokemon {
    constructor(nombre, tipo, nivel, naturaleza){
        this.nombre = nombre;
        this.tipo = tipo;
        this.nivel = nivel;
        this.naturaleza = naturaleza;
    }

    evolucionar(){
        this.nivel++;
    }

    mostrarInfo(){
        console.log("Nombre: " + this.nombre);
        console.log("Tipo: " + this.tipo);
        console.log("Naturaleza: " + this.naturaleza);
    }
}

let mewtwo = new Pokemon("Mewtwo", "Psiquico", 99, "Modesta");
mewtwo.mostrarInfo();

//importar clase
import { Digimon } from "./digimon.js";

let gatomon = new Digimon("Gatomon", 1);
gatomon.digievolucion();


let persona ={
    nombre: "Diego",
    ciudad: "Sevilla",
    init : function(nombre, ciudad){
        this.nombre = nombre;
        this.ciudad = ciudad;
    },
    longitudNombre: function(){
        console.log(this.nombre.length);
    }
};

let persona1 = Object.create(persona);
let persona2 = Object.create(persona);
persona2.init("Ana", "Granada");