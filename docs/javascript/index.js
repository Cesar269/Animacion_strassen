
import { imprimeResultado, muestraMatriz, start } from "./acciones.js"
//classes del html a ocupar
const input = document.querySelector(".tamano");
const matrizA = document.querySelector(".matrizA");
const matrizB = document.querySelector(".matrizB");
const matrizC = document.querySelector(".matrizC");
const resolver = document.querySelector(".start");
const generar = document.querySelector(".generar")
const aleatorio = document.querySelector(".aleatorio");
//inicio de la pagina mostrando dos matrices
let mA;
let mB;
input.value = 2;
mB = muestraMatriz(matrizB, input.value, false);
mA = muestraMatriz(matrizA, input.value, false);
//sección que crea una matriz del tamaño que indique el input ya sea con enter
//o con el boton de generar.
input.addEventListener('change', () => {
    mB = muestraMatriz(matrizB, input.value, false);
    mA = muestraMatriz(matrizA, input.value, false);
});
generar.addEventListener('click', () => {
    mB = muestraMatriz(matrizB, input.value, false);
    mA = muestraMatriz(matrizA, input.value, false);
})
//seccion para llenar aleatoriamente si así lo decide el cliente
aleatorio.addEventListener('click', () => {
    mB = muestraMatriz(matrizB, input.value, true);
    mA = muestraMatriz(matrizA, input.value, true);
})


//solucion de la matriz
resolver.addEventListener('click', () => {
    mB.filas = parseInt(mB.filas, 10);
    mB.columnas = parseInt(mB.columnas, 10)
    for (let i = 0; i < mB.filas; i++) {
        for (let j = 0; j < mB.columnas; j++) {
            mB.matriz[i][j] = parseInt(mB.matriz[i][j], 10);
        }
    }
    mA.filas = parseInt(mA.filas, 10);
    mA.columnas = parseInt(mA.columnas, 10)
    for (let i = 0; i < mA.filas; i++) {
        for (let j = 0; j < mA.columnas; j++) {
            mA.matriz[i][j] = parseInt(mA.matriz[i][j], 10);
        }
    }
    const result = start(mA, mB);
    console.log(result.matriz);
    imprimeResultado(matrizC, result.matriz, result.columnas);
})