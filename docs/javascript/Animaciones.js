import { aparicionTabla, aparicionTexto, desaparecerTabla, desaparecerTexto } from "./gsapAnimaciones.js"
const elGuia = document.querySelector(".guia")

export const animacionTabla = (nodo, matrizObjeto,duracion) => {
    aparicionTablaDOM(nodo,matrizObjeto);
    aparicionTabla(nodo);
    setTimeout(() => {
        desaparecerTabla(nodo);
    }, duracion)
}


const aparicionTablaDOM = (nodo, matrizObjeto)=>{
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
}

export const intro = (principal, a, b, texto,duracionIntro) => {

    guia(texto,(duracionIntro*2)+2000);
    animacionTabla(principal, a,duracionIntro);
    setTimeout(() => {
        animacionTabla(principal, b,duracionIntro);
    }, duracionIntro+2000)
    setTimeout(() => {
        receteoNodo(principal)
    }, (duracionIntro*2)+4000)
}

const guia = (texto,duracion) => {  
        aparicionTexto(elGuia);
        elGuia.textContent = texto
        setTimeout(() => {
            desaparecerTexto(elGuia);
        }, duracion);
}

const receteoNodo = (nodo) => {
    while (nodo.firstChild) {
        nodo.removeChild(nodo.firstChild);
    }
    return false;
};
export const animacionq1 = (a11,a22,resultado1,b11,b22,resultado2,timer,nodoC) => {
    setTimeout(()=>{
        animacionTabla(nodoC,resultado1);
    },timer);
}
const suma =()=>{

}
const resta = ()=>{

}
