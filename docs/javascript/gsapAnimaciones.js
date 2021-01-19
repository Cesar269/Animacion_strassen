export const resultadoṔrincipal = () => {
    gsap.fromTo(".matrizC",{opacity:0, x:-100},{opacity:1,duration:3,x:0,ease: "expo.out"});
}
export const aparicionTabla = (nodo)=>{
    gsap.fromTo(nodo,{opacity:0, y:-100},{opacity:1,duration:3,y:0,ease: "expo.out"})
}
export const desaparecerTabla = (nodo)=>{
    gsap.fromTo(nodo,{opacity:1, y:0,x:0},{opacity:0,duration:2,y:-25,x:-25,ease: "expo.out"})
}