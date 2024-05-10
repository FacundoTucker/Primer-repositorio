/*Realice un programa que devuelva la potencia de un número. 
La base y el exponente deben ser ingresados por teclado. 
Sólo deben admitirse exponentes mayores o iguales a cero. 
Recuerde que el resultado de un numero elevado a 0 es 1.
Separe la lógica de calcular la potencia utilizando métodos. */

import * as rls from "readline-sync";

const base: number = rls.questionInt("Ingrese su base: ");
let exponente: number = rls.questionInt("Ingrese su exponente: ");

function calcularResultado(exponente : number, base : number):number {
    let resultado:number=1;
if (exponente==0){
    resultado= 1
}   else (exponente>0)
        for (let i = 1; i <= exponente; i++) {
            resultado *= base;
        }
return resultado;
}

const resultado = calcularResultado(exponente, base);


if(exponente >= 0){
    console.log ("El resultado de "+ base + " elevado a la " + exponente + " es igual a "+ resultado);
}else{
    console.log ("Error. Ingrese un numero positivo");
}