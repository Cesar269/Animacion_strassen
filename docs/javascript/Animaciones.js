import {aparicionTabla, aparicionTexto, desaparecerTabla, desaparecerTexto} from "./gsapAnimaciones.js"
const elGuia = document.querySelector(".guia")

export const animacionTabla = (nodo, matrizObjeto) => {
    const matriz = matrizObjeto.matriz;
    const n = matrizObjeto.columnas;
    receteoNodo(nodo);
    for (let i = 0; i < n; i++) {
        let newTr = document.createElement("tr");
        nodo.appendChild(newTr)
        for (let j = 0; j < n; j++) {
            let newtd = document.createElement("td")
            newtd.textContent = matriz[i][j];
            newTr.appendChild(newtd);
        }
    }
    aparicionTabla(nodo);
    setTimeout(()=>{
        desaparecerTabla(nodo);
    },5000)
}

export const intro = (principal,a,b,texto)=>{
   
    guia(texto,true);
    animacionTabla(principal,a);
    setTimeout(()=>{
        animacionTabla(principal,b);
    },7000)
    setTimeout(()=>{
        receteoNodo(principal)
    },15000)
}

const guia = (texto,isInicio) =>{
    if(isInicio){
        aparicionTexto(elGuia);
        elGuia.textContent = texto
        setTimeout(()=>{
            desaparecerTexto(elGuia);
        },12000);
    }
    else{
        aparicionTexto(elGuia);
        elGuia.textContent = texto
        setTimeout(()=>{
            desaparecerTexto(elGuia);
        },5000);
    }
}


const receteoNodo = (nodo) => {
    while (nodo.firstChild) {
        nodo.removeChild(nodo.firstChild);
    }
    return false;  
};