import { aparicionTabla, aparicionTexto, desaparecerTabla, desaparecerTexto, gsapSuma1 } from "./gsapAnimaciones.js"
const elGuia = document.querySelector(".guia")
const m1 = document.querySelector(".m1");
const m2 = document.querySelector(".m2")
const m3 = document.querySelector(".m3")
const m4 = document.querySelector(".m4")
const m5 = document.querySelector(".m5")
const m6 = document.querySelector(".m6")
const m7 = document.querySelector(".m7")

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
//animacion de q1
export const animacionq1 = (a11,a22,resultado1,b11,b22,resultado2,q1,timer,nodo,nodoB,nodoC) => {
    interaccion(nodo,nodoB,nodoC,a11,a22,resultado1,"(A11+A22)",3000,timer)
    interaccion(nodo,nodoB,nodoC,b11,b22,resultado2,"(B11+B22)",3000,timer+4000);
    interaccion(nodo,nodoB,nodoC,resultado1,resultado2,q1,"(A11+A22)*(B11+B22)",3000,timer+8000)
}
export const animacionq2 = (a21,a22,resultado1,b11,q2,timer,nodo,nodoB,nodoC)=>{
    interaccion(nodo,nodoB,nodoC,a21,a22,resultado1,"(A21+A22)",3000,timer)
    interaccion(nodo,nodoB,nodoC,resultado1,b11,q2,"(A21+A22)*B11",3000,timer+4000);
}
export const animacionq3 = (b12,b22,resultado1,a11,q3,timer,nodo,nodoB,nodoC) =>{
    interaccion(nodo,nodoB,nodoC,b12,b22,resultado1,"(B12-B22)",3000,timer)
    interaccion(nodo,nodoB,nodoC,resultado1,a11,q3,"(B12-B22)*A11",3000,timer+4000);
}
const interaccion = (nodo,nodoB,nodoC,v1,v2,resultado,texto,duracion,timer)=>{
    setTimeout(()=>{
        animacionTabla(nodo,v1,duracion);
        animacionTabla(nodoB,v2,duracion);
        animacionTabla(nodoC,resultado,duracion);
        guia(texto,duracion)
        interaccion1(nodo,nodoB,(duracion/2));
    },timer);
}

const interaccion1 =(nodo,nodoB,timer)=>{
    setTimeout(()=>{       
        gsapSuma1(nodo,nodoB)
    },timer)
}
const resta = ()=>{

}
const multiplicacion = ()=>{

}
