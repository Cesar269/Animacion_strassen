

export const resultadoṔrincipal = () => {
    gsap.fromTo(".matrizC",{opacity:0, x:-100},{opacity:1,duration:3,x:0,ease: "expo.out"});
}
export const aparicionTabla = (nodo)=>{
    gsap.fromTo(nodo,{opacity:0, y:-100},{opacity:1,duration:2,y:0,ease: "expo.out"})
}
export const desaparecerTabla = (nodo)=>{
    gsap.fromTo(nodo,{opacity:1},{opacity:0,duration:2,y:-25,x:-25,ease: "expo.out"})
}
export const aparicionTexto = (nodo) =>{
    gsap.fromTo(nodo,{opacity:0,y:-20},{opacity:1,y:0,duration:2});
}
export const desaparecerTexto = (nodo) => {
    gsap.fromTo(nodo,{opacity:1},{opacity:0,duration:2});
}
//operaciones 
