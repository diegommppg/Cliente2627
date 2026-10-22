//Modelo
let baseDatos = [];


//Controlador
function agregarTarea(){
    let nuevaTarea = document.getElementById("inputTarea").value;

    if(nuevaTarea.trim() == ""){
        alert("Por favor ingrese una tarea valida. Subnormal");
    }

    else{
        //Añadir a la base de datos
        baseDatos.push(nuevaTarea);
        document.getElementById("inputTarea").value = "";

        //Actualizar la vista
        actualizarVista(nuevaTarea);
    }
}

/*
function actualizarVista(){
    //Vaciamos lista de tareas
    let listaTareas = document.getElementById("listaTareas");
    listaTareas.innerHTML = "";

    //Reccorremos la base de datos
    for(let tarea of baseDatos){
        let listaTareas = document.getElementById("listaTareas");
        let nuevaTareaHTML = document.createElement("li");
        nuevaTareaHTML.innerText = tarea;
        listaTareas.appendChild(nuevaTareaHTML);
    }
}
*/
function eliminarTarea(){
    //Eliminar de la base de datos
    baseDatos.pop();

    let listaTareas = document.getElementById("listaTareas");
    listaTareas.removeChild(listaTareas.lastChild);
}

/*

function actualizarVista(){
    //Vaciamos lista de tareas
    let listaTareas = document.getElementById("listaTareas");
    listaTareas.innerHTML = "";

    //Reccorremos la base de datos
    for(let tarea of baseDatos){
        let listaTareas = document.getElementById("listaTareas");
        let nuevaTareaHTML = document.createElement("li");
        nuevaTareaHTML.innerText = tarea;
        listaTareas.appendChild(nuevaTareaHTML);
    }
}

*/



//Vista
function actualizarVista(nuevaTarea){
    let listaTareas = document.getElementById("listaTareas");
    let nuevaTareaHTML = document.createElement("li");
    
    //nuevaTareaHTML.innerText = nuevaTarea;
    //Tenemos en cuenta la prioridad
    let prioridad = document.getElementById("selectPrioridad").value;
    let textoTareaHTML = document.createElement("span");
    textoTareaHTML.className = "task-text";
    textoTareaHTML.textContent = nuevaTarea;

    let etiquetaPrioridadHTML = document.createElement("span");
    etiquetaPrioridadHTML.className = `priority-badge priority-${prioridad}`;
    etiquetaPrioridadHTML.textContent = prioridad;

    nuevaTareaHTML.classList.add(`task-${prioridad}`);
    nuevaTareaHTML.append(textoTareaHTML, etiquetaPrioridadHTML);

    listaTareas.appendChild(nuevaTareaHTML);
}
