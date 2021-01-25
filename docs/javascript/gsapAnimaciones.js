

export const resultadoṔrincipal = () => {
    gsap.fromTo(".matrizC", { opacity: 0, x: -100 }, { opacity: 1, duration: 3, x: 0, ease: "expo.out" });
}
export const aparicionTabla = (nodo) => {
    gsap.fromTo(nodo, { opacity: 0, scale: 0 }, { opacity: 1, duration: 1, scale: 1, ease: "expo.out" })
}
export const desaparecerTabla = (nodo) => {
    gsap.fromTo(nodo, { opacity: 1 }, { opacity: 0, duration: 1, ease: "expo.out" })
}
export const aparicionTexto = (nodo) => {
    gsap.fromTo(nodo, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1 });
}
export const desaparecerTexto = (nodo) => {
    gsap.fromTo(nodo, { opacity: 1 }, { opacity: 0, duration: 1 });
}
//operaciones 
export const gsapSuma1 = (nodo, nodoB) => {
    gsap.fromTo(nodo, { opacity: 1, y: 0 }, { opacity: 0, x: nodoB.getBoundingClientRect().right, duration: 1.5 })
    gsap.fromTo(nodoB, { opacity: 1, y: 0 }, { opacity: 0, x: nodoB.getBoundingClientRect().right - nodo.getBoundingClientRect().right, duration: 1.5 })
}
export const aparecerOperaciones = (operacion) => {
    gsap.fromTo(operacion, { scale: 0, opacity: 0 }, { opacity: 1, duration: 2, scale: 1 });

}
export const desaparecerOperaciones = (operacion) => {
    gsap.fromTo(operacion, { opacity: 1 }, { opacity: 0, duration: 1, ease: "expo.out" })
}
export const animacionImportancia = (nodo) => {
    gsap.fromTo(nodo, { scale: 1.2 }, { scale: 1, duration: 2, ease: "back.out(1.7)" })
}
export const destruccionMatriz = (nodoOrigen, original) => {
    gsap.fromTo(original, { opacity: 0, x: nodoOrigen.getBoundingClientRect().right, y: nodoOrigen.getBoundingClientRect().right }, { duration: 1, x: 0, y: 0, opacity: 1 })
}
export const subTabla = (principal, nodo, orden, isAparecer,subtitulo) => {
    if (isAparecer) {
        setTimeout(() => {
            gsap.fromTo(nodo, { opacity: 0, scale: 0 }, { opacity: 1, duration: 1, scale: 1 })
            gsap.fromTo(principal, { scale: 1.1 }, { duration: 1, scale: 1 })
            gsap.fromTo(subtitulo,{opacity:0,scale: 0},{duration:1,opacity:1,scale:1})
        }, 1000 * orden)

    }else{
        setTimeout(() => {
            gsap.fromTo(nodo, { opacity: 1, scale: 1 }, { opacity: 0, duration: 1, scale: 0 })
            gsap.fromTo(principal, { scale:1.2  }, { duration: 1, scale: 1 })
            gsap.fromTo(subtitulo, { opacity: 1, scale: 1 }, { opacity: 0, duration: 1, scale: 0 })
        },(1000*orden))
    }

}
export const construir = (c11,c12,c21,c22)=>{
    gsap.fromTo(c11,{x:0,y:0},{x:0,y:-150,duration:2});
    gsap.fromTo(c12,{x:0,y:0},{x:0,y:-200,duration:2});
    gsap.fromTo(c21,{x:0,y:0},{x:0,y:-400,duration:2});
    gsap.fromTo(c22,{x:0,y:0},{x:0,y:-400,duration:2});
}
// export const animarSubtablas1 = (original) =>{
//     gsap.fromTo(original,{opacity:0},{duration:1,x:500,y:0,opacity:1})
// }
// export const animarSubtablas2 = (original) =>{
//     setTimeout(()=>{
//         gsap.fromTo(original,{opacity:0,x:500,y:0},{duration:1,x:500,y:250,opacity:1})
//     },1000)
// }
// export const animarSubtablas3 = (original) =>{
//     setTimeout(()=>{
//         gsap.fromTo(original,{opacity:0,x:500,y:250},{duration:1,x:500,y:400,opacity:1})

//     },2000)
// }