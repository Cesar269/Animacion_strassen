

export const resultadoṔrincipal = () => {
    gsap.fromTo(".matrizC",{opacity:0, x:-100},{opacity:1,duration:3,x:0,ease: "expo.out"});
}
export const aparicionTabla = (nodo)=>{
    gsap.fromTo(nodo,{opacity:0, y:-100},{opacity:1,duration:1,y:0,ease: "expo.out"})
}
export const desaparecerTabla = (nodo)=>{
    gsap.fromTo(nodo,{opacity:1},{opacity:0,duration:1,y:-25,x:-25,ease: "expo.out"})
}
export const aparicionTexto = (nodo) =>{
    gsap.fromTo(nodo,{opacity:0,y:-20},{opacity:1,y:0,duration:1});
}
export const desaparecerTexto = (nodo) => {
    gsap.fromTo(nodo,{opacity:1},{opacity:0,duration:1});
}
//operaciones 
export const gsapSuma1= (nodo,nodoB)=>{
    gsap.fromTo(nodo,{opacity:1,y:0},{opacity:0,x:nodoB.getBoundingClientRect().right,duration:1.5})
    gsap.fromTo(nodoB,{opacity:1,y:0},{opacity:0,x:nodoB.getBoundingClientRect().right-nodo.getBoundingClientRect().right,duration:1.5})    
}
export const aparecerOperaciones= (operacion)=>{
    gsap.fromTo(operacion,{scale:0,opacity:0},{opacity:1,duration:2,scale:1});
    
}
export const desaparecerOperaciones = (operacion) => {
    gsap.fromTo(operacion,{opacity:1},{opacity:0,duration:1,ease: "expo.out"})
}
export const animacionImportancia = (nodo)=>{
    gsap.fromTo(nodo,{scale:1.5},{scale:1,duration:2,ease: "back.out(1.7)"})
}
