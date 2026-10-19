function mediaPiramide(){
    let num = prompt("Introduce un número: ");
    let fila = "";

    for(let i=1; i<=num;i++){

        for(let j=1;j<=i;j++){
            fila = fila + "*";
        }

        console.log(fila);
        fila = "";
    }
}




mediaPiramide();