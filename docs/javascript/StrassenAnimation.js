import Matriz from "./Matriz.js";
// import {intro} from "./acciones.js"
import { animacionq1, animacionq2, animacionq3, intro } from "./Animaciones.js"

export default class StrassenAnimation {


    constructor() { }


    add(a, b) {
        const c = new Matriz(a.columnas, a.filas, false);
        for (let i = 0; i < a.columnas; i++) {
            for (let j = 0; j < a.filas; j++) {
                c.matriz[i][j] = a.matriz[i][j] + b.matriz[i][j];
            }
        }

        return c;
    }


    sub(a, b) {
        const c = new Matriz(a.columnas, a.filas, false);
        for (let i = 0; i < a.columnas; i++) {
            for (let j = 0; j < a.filas; j++) {
                c.matriz[i][j] = a.matriz[i][j] - b.matriz[i][j];
            }
        }
        return c;
    }

    fillPowerOfTwo(matriz) {

        let a = matriz.matriz.length;
        let n = Math.pow(2, (Math.floor(Math.log2(a))) + 1);//siguiente numero potencia de 2
        const c = new Matriz(n, n, false);
        for (let i = 0; i < a; i++) {
            for (let j = 0; j < a; j++) {
                if (matriz.matriz[i][j]) {
                    c.matriz[i][j] = matriz.matriz[i][j]
                }
                else {
                    c.matriz[i][j] = 0;
                }
            }
        }
        return c;
    }


    reshape(matriz, size) {
        matriz.matriz.splice(size, (matriz.matriz.length - size));
        matriz.matriz.forEach(array => {
            array.splice(size, array.length - size);
        })
        matriz.columnas = size;
        matriz.filas = size;
    }


    split(matriz, indexColumnStart, indexColumnEnd, indexRowStart, indexRowEnd) {
        const splitted = matriz.matriz.slice(indexColumnStart, indexColumnEnd);
        let result = [];
        splitted.forEach(array => {
            result.push(array.slice(indexRowStart, indexRowEnd));
        });

        return result;
    }


    join(matriz, matrizResult, start, end) {

        for (let i1 = 0, i2 = start; i1 < matriz.matriz.length; i1++, i2++)
            for (let j1 = 0, j2 = end; j1 < matriz.matriz.length; j1++, j2++) {
                matrizResult.matriz[i2][j2] = matriz.matriz[i1][j1];
            }
    }


    multiply(a, b,c,nodo,nodoB,nodoC,principal,timerInicio) {

        const n = a.matriz.length;

        const result = new Matriz(n, n, false);


        if (n == 1) {


            result.matriz[0][0] = (a.matriz[0][0]) * (b.matriz[0][0]);

            return result;

        } else {

            let a11 = new Matriz(n / 2, n / 2, false);
            a11.matriz = this.split(a, 0, n / 2, 0, n / 2);
            let a12 = new Matriz(n / 2, n / 2, false);
            a12.matriz = this.split(a, 0, n / 2, n / 2, n);
            let a21 = new Matriz(n / 2, n / 2, false);
            a21.matriz = this.split(a, n / 2, n, 0, n / 2);
            let a22 = new Matriz(n / 2, n / 2, false);
            a22.matriz = this.split(a, n / 2, n, n / 2, n);


            let b11 = new Matriz(n / 2, n / 2, false);
            b11.matriz = this.split(b, 0, n / 2, 0, n / 2);
            let b12 = new Matriz(n / 2, n / 2, false);
            b12.matriz = this.split(b, 0, n / 2, n / 2, n);
            let b21 = new Matriz(n / 2, n / 2, false);
            b21.matriz = this.split(b, n / 2, n, 0, n / 2);
            let b22 = new Matriz(n / 2, n / 2, false);
            b22.matriz = this.split(b, n / 2, n, n / 2, n);

            // recursion aplicando las formulas de strassen

            const q1 = this.multiply(this.add(a11, a22), this.add(b11, b22),c,nodo,nodoB,nodoC,principal,timerInicio);
            const q2 = this.multiply(this.add(a21, a22), b11,c,nodo,nodoB,nodoC,principal,timerInicio);
            const q3 = this.multiply(a11, this.sub(b12, b22),c,nodo,nodoB,nodoC,principal,timerInicio);
            const q4 = this.multiply(a22, this.sub(b21, b11),c,nodo,nodoB,nodoC,principal,timerInicio);
            const q5 = this.multiply(this.add(a11, a12), b22,c,nodo,nodoB,nodoC,principal,timerInicio);
            const q6 = this.multiply(this.sub(a21, a11), this.add(b11, b12),c,nodo,nodoB,nodoC,principal,timerInicio);
            const q7 = this.multiply(this.sub(a12, a22), this.add(b21, b22),c,nodo,nodoB,nodoC,principal,timerInicio);
            //animaciones de q's
            animacionq1(a11,a22,this.add(a11,a22),b11,b22,this.add(b11,b22),q1,timerInicio,nodo,nodoB,nodoC);//12
            animacionq2(a21,a22,this.add(a21,a22),b11,q2,timerInicio+12000,nodo,nodoB,nodoC)//8
            animacionq3(b12,b22,this.sub(b12,b22),a11,q3,timerInicio+20000,nodo,nodoB,nodoC)//8
            // construccion de la matriz
            const c11 = this.add(this.sub(this.add(q1, q4), q5), q7);
            const c12 = this.add(q3, q5);
            const c21 = this.add(q2, q4);
            const c22 = this.add(this.add(this.sub(q1, q2), q3), q6);


            this.join(c11, result, 0, 0);
            this.join(c12, result, 0, n / 2);
            this.join(c21, result, n / 2, 0);
            this.join(c22, result, n / 2, n / 2);
            return result;


            // union
        }
    }




    strassen(principal, nodo, nodoB, nodoC, a, b, mc) {

        const size = a.columnas;
        let c = new Matriz(size, size);
        let guia = "";
        let duracionInicio = 2000

        //pregunta si las matrices son base 2, si no lo son
        //arma una base 2 llenando de ceros

        if (!(Math.log2(size) % 1 === 0)) {
            a = this.fillPowerOfTwo(a);
            b = this.fillPowerOfTwo(b);
            // recursion
            guia = "Llenamos la matrices de ceros"
            intro(principal, a, b, guia,duracionInicio);
            c = this.multiply(a, b,mc,nodo,nodoB,nodoC,principal,(duracionInicio*2)+4000);


            // remueve los ceros de la matriz
            this.reshape(c, size);
        }
        else {
            guia="Matrices iniciales";
            intro(principal, a, b, guia,duracionInicio);
            c = this.multiply(a, b,mc,nodo,nodoB,nodoC,principal,(duracionInicio*2)+4000);
        }
        return c;
    }
} 