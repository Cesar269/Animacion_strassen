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
export const animacionq1 = (a11,a22,resultado1,b11,b22,resultado2,timer,nodo,nodoB,nodoC) => {
    setTimeout(()=>{
        animacionTabla(nodo,a11,3000);
        animacionTabla(nodoB,a22,3000);
        animacionTabla(nodoC,resultado1,3000);
        guia("(a11+a22)",3000)
        suma(nodo,nodoB,m1,(3000/2));
    },timer);
    setTimeout(()=>{
        animacionTabla(nodo,b11,3000);
        animacionTabla(nodoB,b22,3000);
        animacionTabla(nodoC,resultado2,3000);
        guia("(b11+b22)",3000)
        suma(nodo,nodoB,m2,(3000/2));
    },timer+4000)
    setTimeout(()=>{
        
    },timer+8000)

}
export const animacionq2 = ()=>{

}
const suma =(nodo,nodoB,mx,timer)=>{
    setTimeout(()=>{       
        gsapSuma1(nodo,nodoB)
    },timer)
}
const resta = ()=>{

}
const multiplicacion = ()=>{

}
