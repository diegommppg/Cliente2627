
function guardarLocalStorage(){
    let inputNombre = document.getElementById("nombre").value;
    localStorage.setItem("username", inputNombre);
}

function recuperarLocalStorage(){
    let username = localStorage.getItem("username");
    let p = document.createElement("p");
    p.innerHTML = "Hola " + username;
    document.body.appendChild(p);
}

function eliminarLocalStorage(){
    localStorage.removeItem("username");
}

function guardarCookies(){
    let inputNombre = document.getElementById("nombre").value;
    console.log("Cookie establecida: " + inputNombre);
    document.cookie = "username=" + inputNombre + "; expires=Fri, 31 Dec 2026 23:59:59 GMT; path=/";
    //username=Diego; password=1245    
}

function recuperarCookies(){
    document.getElementById("resultadoCookies").textContent =
     "Cookie establecida: " + document.cookie;
}

