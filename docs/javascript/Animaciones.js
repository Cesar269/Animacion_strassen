import { aparecerOperaciones, aparicionTabla, aparicionTexto, desaparecerOperaciones, desaparecerTabla, desaparecerTexto, gsapSuma1,animacionImportancia, subTabla } from "./gsapAnimaciones.js"
const subtabla1 = document.querySelector(".subtabla1")
const tituloPrincipal = document.querySelector(".tituloPrincipal")
const subtitulo1 = document.querySelector(".subtitulo1");
const subtitulo2 = document.querySelector(".subtitulo2");
const subtitulo3 = document.querySelector(".subtitulo3");
const subtabla2 = document.querySelector(".subtabla2")
const subtabla3 = document.querySelector(".subtabla3")
const elGuia = document.querySelector(".guia")
const seccionQ = document.querySelectorAll(".q")
const seccionC = document.querySelectorAll(".c")
const sm = document.querySelectorAll(".sm");
const sc = document.querySelectorAll(".sc");
const nodoa11 = document.querySelectorAll(".a11")
const nodoa12 = document.querySelectorAll(".a12")
const nodoa21 = document.querySelectorAll(".a21")
const nodoa22 = document.querySelectorAll(".a22")

const nodob11 = document.querySelectorAll(".b11")
const nodob12 = document.querySelectorAll(".b12")
const nodob21 = document.querySelectorAll(".b21")
const nodob22 = document.querySelectorAll(".b22")

const nodoc11 = document.querySelectorAll(".c11")
const nodoc12 = document.querySelectorAll(".c12")
const nodoc21 = document.querySelectorAll(".c21")
const nodoc22 = document.querySelectorAll(".c22")

const nodoq1 = document.querySelectorAll(".q1")
const nodoq2 = document.querySelectorAll(".q2")
const nodoq3 = document.querySelectorAll(".q3")
const nodoq4 = document.querySelectorAll(".q4")
const nodoq5 = document.querySelectorAll(".q5")
const nodoq6 = document.querySelectorAll(".q6")
const nodoq7 = document.querySelectorAll(".q7")

const mas = document.querySelectorAll(".mas")
const menos = document.querySelectorAll(".menos")
const por = document.querySelectorAll(".por")
const igual = document.querySelectorAll(".igual")
const M = document.querySelectorAll(".M")
const C = document.querySelectorAll(".C")


const nodoq12 = document.querySelectorAll(".q12")
const nodoq22 = document.querySelectorAll(".q22")
const nodoq32 = document.querySelectorAll(".q32")
const nodoq42 = document.querySelectorAll(".q42")
const nodoq52 = document.querySelectorAll(".q52")
const nodoq62 = document.querySelectorAll(".q62")
const nodoq72 = document.querySelectorAll(".q72")

const mas2 = document.querySelectorAll(".mas2")
const menos2 = document.querySelectorAll(".menos2")
const igual2 = document.querySelectorAll(".igual2")
const minititulo = document.querySelectorAll(".minititulo")
const minititulo2 = document.querySelectorAll(".minititulo2")

const posicionC = document.querySelector(".fijo");
const referencia = document.querySelector(".referencia")
/////////////////////////////////////////////////////////
export const animacionTabla = (nodo, matrizObjeto, duracion) => {
    aparicionTablaDOM(nodo, matrizObjeto);
    aparicionTabla(nodo);
    setTimeout(() => {
        desaparecerTabla(nodo);
    }, duracion - 1500)
}


const aparicionTablaDOM = (nodo, matrizObjeto) => {
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
//////////////////////////////////////////////////////
export const animacionTablas = (nodo, matrizObjeto, duracion) => {
    aparicionTablasDOM(nodo, matrizObjeto);
    aparicionTabla(nodo);
    setTimeout(() => {
        desaparecerTabla(nodo);
    }, duracion - 1500)
}


const aparicionTablasDOM = (nodos, matrizObjeto) => {
    const matriz = matrizObjeto.matriz;
    const n = matrizObjeto.columnas;
    receteoNodos(nodos);
    nodos.forEach((nodo) => {

        for (let i = 0; i < n; i++) {
            let newTr = document.createElement("tr");
            nodo.appendChild(newTr)
            for (let j = 0; j < n; j++) {
                let newtd = document.createElement("td")
                newtd.textContent = matriz[i][j];
                newTr.appendChild(newtd);
            }
        }
    });
    

}
const receteoNodos = (nodos) => {
    nodos.forEach((nodo) => {
        while (nodo.firstChild) {
            nodo.removeChild(nodo.firstChild);
        }

    })


    return false;
};
//////////////////////////////////////
export const intro = (principal, a, b, texto, duracionIntro) => {
    seccionC.forEach((nodo)=>{
        nodo.style.opacity = 0;
    })
    seccionQ.forEach((nodo)=>{
        nodo.style.opacity = 0;
    })
    subtabla1.style.opacity = 0;
    subtabla2.style.opacity = 0;
    subtabla3.style.opacity = 0;
    guia(texto, (duracionIntro * 2) + 1000);
    animacionTabla(principal, a, duracionIntro);
    tituloPrincipal.textContent = `Matriz [ A ] de ${a.columnas}x${a.columnas}`
    aparicionTexto(tituloPrincipal);
    divisionTabla(a,duracionIntro,principal);
    
    
    setTimeout(() => {
        tituloPrincipal.textContent=`Matriz [ B ] de ${a.columnas}x${a.columnas}`
        animacionTabla(principal, b, duracionIntro);
        animacionImportancia(tituloPrincipal);
        divisionTabla(b,duracionIntro,principal);
    }, duracionIntro + 2000)
    setTimeout(() => {
        receteoNodo(principal);
        receteoNodo(subtabla1);
        receteoNodo(subtabla2);
        receteoNodo(subtabla3);
        receteoNodo(tituloPrincipal);
    }, (duracionIntro * 2) + 4000)
}

const guia = (texto, duracion) => {
    aparicionTexto(elGuia);
    elGuia.textContent = texto
    setTimeout(() => {
        desaparecerTexto(elGuia);
    }, duracion-2000);
}
const divisionTabla = (a,duracionIntro,principal)=>{
    if(a.columnas == 2){
        aparicionSubTablaDOM(a,subtabla1,a.columnas/2);
        subtitulo1.style.opacity = 0;
        subtitulo1.textContent = `[${a.columnas/2}]x[${a.columnas/2}]`
        subTabla(principal,subtabla1,1,true,subtitulo1);

    }
    else if(a.columnas == 4){
        aparicionSubTablaDOM(a,subtabla1,a.columnas/2)
        aparicionSubTablaDOM(a,subtabla2,(a.columnas/2)/2)
        subtitulo1.style.opacity = 0;
        subtitulo1.textContent = `[${a.columnas/2}]x[${a.columnas/2}]`
        subtitulo2.style.opacity = 0;
        subtitulo2.textContent = `[${(a.columnas/2)/2}]x[${(a.columnas/2)/2}]`
        subTabla(principal,subtabla1,1,true,subtitulo1);
        subTabla(principal,subtabla2,2,true,subtitulo2);
    }
    else{
        aparicionSubTablaDOM(a,subtabla1,a.columnas/2)
        aparicionSubTablaDOM(a,subtabla2,(a.columnas/2)/2)
        aparicionSubTablaDOM(a,subtabla3,((a.columnas/2)/2)/2)
        subtitulo1.style.opacity = 0;
        subtitulo1.textContent = `[${a.columnas/2}]x[${a.columnas/2}]`
        subtitulo2.style.opacity = 0;
        subtitulo2.textContent = `[${(a.columnas/2)/2}]x[${(a.columnas/2)/2}]`
        subtitulo3.style.opacity = 0;
        subtitulo3.textContent = `[${((a.columnas/2)/2)/2}]x[${((a.columnas/2)/2)/2}]`
        subTabla(principal,subtabla1,1,true,subtitulo1);
        subTabla(principal,subtabla2,2,true,subtitulo2);
        subTabla(principal,subtabla3,3,true,subtitulo3);
    }

    setTimeout(()=>{
        subTabla(principal,subtabla3,3,false,subtitulo3)
        subTabla(principal,subtabla2,2,false,subtitulo2)
        subTabla(principal,subtabla1,1,false,subtitulo1)
    },duracionIntro-2000)
}   

const aparicionSubTablaDOM = (matrizObjeto,nodo,n) => {
    const matriz = matrizObjeto.matriz;
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


const receteoNodo = (nodo) => {

    while (nodo.firstChild) {
        nodo.removeChild(nodo.firstChild);
    }


    return false;
};
//animacion ////////////////////////////////////
export const superAnimacion = (a11, a12, a21, a22, b11, b12, b21, b22, q1, q2, q3, q4, q5, q6, q7, c11, c12, c21, c22, timer, duracion) => {
    
    duracion = duracion/2;
    setTimeout(() => {
        seccionQ.forEach((nodo)=>{
            nodo.style.opacity = 1;
        })
        if(a11.filas == 1){
            guia("Se dividirá cada matriz hasta ser de dimensión 1 y se aplican las correspondientes operaciones",duracion);
        }
        else{
            guia("Aplicamos las operaciones correspondientes acorde a cada valor",duracion)
        }
        sm.forEach((x)=>{
            x.style.color = "green"
            x.style.fontWeight = 600;
            animacionImportancia(x);
        })
        sc.forEach((x)=>{
            x.style.color = "black"
            x.style.fontWeight = 300;
        })
        animacionTablas(nodoa11, a11, duracion);
        animacionTablas(nodoa12, a12, duracion);
        animacionTablas(nodoa21, a21, duracion);
        animacionTablas(nodoa22, a22, duracion);

        animacionTablas(nodob11, b11, duracion);
        animacionTablas(nodob12, b12, duracion);
        animacionTablas(nodob21, b21, duracion);
        animacionTablas(nodob22, b22, duracion);

        animacionTablas(nodoq1, q1, duracion);
        animacionTablas(nodoq2, q2, duracion);
        animacionTablas(nodoq3, q3, duracion);
        animacionTablas(nodoq4, q4, duracion);
        animacionTablas(nodoq5, q5, duracion);
        animacionTablas(nodoq6, q6, duracion);
        animacionTablas(nodoq7, q7, duracion);


        mostrarOperaciones(mas, duracion);
        mostrarOperaciones(menos, duracion);
        mostrarOperaciones(por, duracion);
        mostrarOperaciones(igual, duracion);
        mostrarOperaciones(M, duracion);
        mostrarOperaciones(minititulo,duracion);

    }, timer)//en que tiempo empieza
    setTimeout(() => {
        seccionC.forEach((nodo)=>{
            nodo.style.opacity = 1;
        })
        posicionC.style.top = `${referencia.getBoundingClientRect().top}px`
        posicionC.style.left = `${referencia.getBoundingClientRect().left}px`;
        posicionC.style.bottom = `${referencia.getBoundingClientRect().bottom}px`
        posicionC.style.right = `${referencia.getBoundingClientRect().right}px`;
        if(q1.filas == 1){
            guia("Apartir de estos resultados vamos creando la matriz resutante de esta iteración",duracion)
        }
        else{
            guia("Obtenemos los resultados necesarios para el resultado de esta iteración",duracion)
        }
        sm.forEach((x)=>{
            x.style.color = "black"
            x.style.fontWeight = 300;
        })
        sc.forEach((x)=>{
            x.style.color = "red"
            x.style.fontWeight = 600;
            animacionImportancia(x);
        })
        animacionTablas(nodoq12, q1, duracion);
        animacionTablas(nodoq22, q2, duracion);
        animacionTablas(nodoq32, q3, duracion);
        animacionTablas(nodoq42, q4, duracion);
        animacionTablas(nodoq52, q5, duracion);
        animacionTablas(nodoq62, q6, duracion);
        animacionTablas(nodoq72, q7, duracion);

        animacionTablas(nodoc11, c11, duracion);
        animacionTablas(nodoc12, c12, duracion);
        animacionTablas(nodoc21, c21, duracion);
        animacionTablas(nodoc22, c22, duracion);

        mostrarOperaciones(mas2, duracion);
        mostrarOperaciones(menos2, duracion);
        mostrarOperaciones(igual2, duracion);
        mostrarOperaciones(C, duracion);
        mostrarOperaciones(minititulo2,duracion)
        
    }, timer+duracion)//en que tiempo empieza

}
const mostrarOperaciones = (nodo, duracion) => {
    aparecerOperaciones(nodo);
    setTimeout(() => {
        desaparecerOperaciones(nodo);
    }, duracion - 1500)
}
export const despedida = ()=>{
    
}
