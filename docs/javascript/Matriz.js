//esta será de ayuda para ir contruyendo la matrices que se ocuparan en el programa
export default class Matriz{


    //constructor para construir de principio la matriz
    constructor(filas,columnas,isAleatorio){
        this.filas = filas;
        this.columnas = columnas;
        this.isAleatorio = isAleatorio;
        if(isAleatorio){
            this.aleatorio();
        }
        else{
            this.normal();
        }
    }
    aleatorio(){
        const m = [];
        for (let i = 0; i < this.columnas; i++) {
            m[i] = [];
            for (let j = 0; j < this.filas; j++) {
                m[i][j] = Math.floor(Math.random() * 5);
            }
        }
        this.matriz = m;
    }
    normal(){
        const m = [];
        for (let i = 0; i < this.columnas; i++) {
            m[i]=[]
            for (let j = 0; j < this.filas; j++) {
                m[i][j] = 0;
            }
        }
        this.matriz = m;
    }
    getMatriz(){
        return this.matriz;
    }
}