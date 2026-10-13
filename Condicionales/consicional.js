//Operadores condicionales
//> mayor que
//< menor que
//>= mayor o igual
//<= menor o igual
//== igual
//!= diferente

let num1 = 67;
let num2 = "67";
let num = true;

if(num1 == num2){
    console.log("Son iguales");
}else{
    console.log("Son diferentes");
}

if(num1 === num2){
    console.log("Son iguales");
}else{
    console.log("Son diferentes");
}

//Tipo de variable
console.log(typeof num1);
console.log(typeof num2);
console.log(typeof num);


///COSAS RARAS
/*
console.log(true + true); 

console.log('true + false:', true + false); 
console.log('false + false:', false + false);

console.log('true - true:', true - true); 
console.log('true - false:', true - false);
*/
///////////////////

//console.log(Math.min()>Math.max());
// Compara +inf y -inf
////////////////////
/*
console.log(null > 0);   
console.log(null == 0);  
console.log(null >= 0);  
*/
////////////////
/*
console.log('0.1 + 0.2 === 0.3 ?', 0.1 + 0.2 === 0.3);
console.log('0.1 + 0.2 =', 0.1 + 0.2);
////////////////
*/

//console.log(typeof NaN); 

///////////////
/*
console.log(0 == "0");    //true
console.log(0 === "0");   //false 

console.log("5" + 3);  //8 o 53    

let resultado2 = 2 + "2";
console.log('"2" + 2 =', resultado2); 
*/
/*
let resultado3 = 2 + 2 + "2";
console.log('2 + 2 + "2" =', resultado3); 

let resultado4 = "2" + 2 + 2;
console.log('"2" + 2 + 2 =', resultado4); 
*/

//console.log('10 * "5" =', 10 * "5"); 
//console.log('10 / "2" =', 10 / "2"); 

//console.log("5" - 5);      

//console.log("10" < "2");   

/////////
//let r = 'b' + 'a' + + 'a' + 'a';

//console.log(r); 