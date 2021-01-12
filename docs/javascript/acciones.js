import Matriz from "./Matriz.js"
//import Strassen from "./casiStrassen.js"
import isStrassen from "./isStrassen.js"
export const recibeMatriz = (nodo,n) => {
    receteaMatriz(nodo);
    const matriz = new Matriz(n, n, true);
    const miMatriz = matriz.getMatriz();
    //maquetar matriz
    for (let i = 0; i < n; i++) {
        let newTd = document.createElement("td");
        nodo.appendChild(newTd)
        for (let j = 0; j < n; j++) {
            let newtr = document.createElement("tr")
            let newinput = document.createElement("input")
            newinput.setAttribute("type", "number");
            newinput.value = miMatriz[j][i];
            newTd.appendChild(newtr);
            newtr.appendChild(newinput);
            newinput.addEventListener('change', () => {
                miMatriz[j][i] = newinput.value;
            })
            
        }
    }
    return matriz;
};
export const start = (matrizA,matrizB)=>{
    
    const c = new isStrassen();
    
    const result =c.strassen(matrizA,matrizB);
    return result;
}
export const imprimeResultado = (nodo,matriz,n)=>{
    receteaMatriz(nodo);
    //maquetar matriz
    for (let i = 0; i < n; i++) {
        let newTd = document.createElement("td");
        nodo.appendChild(newTd)
        for (let j = 0; j < n; j++) {
            let newtr = document.createElement("tr")
            newtr.textContent = matriz[j][i];   
            newTd.appendChild(newtr);
        }
    }
};
const receteaMatriz = (nodo) => {
    while (nodo.firstChild) {
        nodo.removeChild(nodo.firstChild);
    }
    return false;   
};