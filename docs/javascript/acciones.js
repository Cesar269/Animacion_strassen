import Matriz from "./Matriz.js"
//import Strassen from "./casiStrassen.js"
import isStrassen from "./isStrassen.js"
import {desaparecerTabla, resultadoṔrincipal} from "./gsapAnimaciones.js"

import StrassenAnimation from "./StrassenAnimation.js"


export const muestraMatriz = (nodo,n,aleatorio) => {
    receteaMatriz(nodo);
    const matriz = new Matriz(n, n, aleatorio);
    const miMatriz = matriz.getMatriz();
    //maquetar matriz
    for (let i = 0; i < n; i++) {
        let newTd = document.createElement("tr");
        nodo.appendChild(newTd)
        for (let j = 0; j < n; j++) {
            let newtr = document.createElement("td")
            let newinput = document.createElement("input")
            newinput.setAttribute("type", "number");
            newinput.value = miMatriz[i][j];
            newTd.appendChild(newtr);
            newtr.appendChild(newinput);
            newinput.addEventListener('change', () => {
                miMatriz[i][j] = newinput.value;
            })
        }
    }
    return matriz;
};
export const start = (matrizA,matrizB)=>{
    
    const c = new isStrassen();
    const result =c.strassen(matrizA,matrizB);
    console.log("primer resultado:",result.matriz);
    console.log("matrizA",matrizA.matriz);
    console.log("matrizB",matrizB.matriz);
    
    return result;
}
export const imprimeResultado = (nodo,matriz,n)=>{
    receteaMatriz(nodo);
    //maquetar matriz
    for (let i = 0; i < n; i++) {
        let newTr = document.createElement("tr");
        nodo.appendChild(newTr)
        for (let j = 0; j < n; j++) {
            let newtd = document.createElement("td")
            newtd.textContent = matriz[i][j];   
            newTr.appendChild(newtd);
        }
    }
    // desaparecerInicio();
    resultadoṔrincipal();
    
};

const receteaMatriz = (nodo) => {
    while (nodo.firstChild) {
        nodo.removeChild(nodo.firstChild);
    }
    return false;   
};
export const animacion = (matrizA,matrizB,principal)=>{
        const miStraseen = new StrassenAnimation();
        
        console.log("empezemos 7u7");
        miStraseen.strassen(principal,matrizA,matrizB);
       
}
