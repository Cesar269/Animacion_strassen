
import {imprimeResultado, recibeMatriz,start} from "./acciones.js"

const input = document.querySelector(".tamano");
const matrizA = document.querySelector(".matrizA");
const matrizB = document.querySelector(".matrizB");
const matrizC = document.querySelector(".matrizC");
const btn = document.querySelector(".start");
let mA;
let mB;
input.value = 2;
mB=recibeMatriz(matrizB,input.value);
mA=recibeMatriz(matrizA,input.value);
input.addEventListener('change',()=>{
    mB=recibeMatriz(matrizB,input.value);
    mA=recibeMatriz(matrizA,input.value);
});
btn.addEventListener('click',()=>{
    mB.filas = parseInt(mB.filas,10);
    mB.columnas = parseInt(mB.columnas,10)
    for(let i = 0; i < mB.filas;i++){
        for(let j = 0; j < mB.columnas;j++){
            mB.matriz[i][j] = parseInt(mB.matriz[i][j],10);
        }
    }
    mA.filas = parseInt(mA.filas,10);
    mA.columnas = parseInt(mA.columnas,10)
    for(let i = 0; i < mA.filas;i++){
        for(let j = 0; j < mA.columnas;j++){
            mA.matriz[i][j] = parseInt(mA.matriz[i][j],10);
        }
    }

    console.log(mB)
    const result = start(mA,mB);
    imprimeResultado(matrizC,result.matriz,result.columnas);
})