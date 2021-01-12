import Matriz from "./Matriz.js";

export default class isStrassen {


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


    substract(a, b) {
        const c = new Matriz(a.columnas, a.filas, false);
        for (let i = 0; i < a.columnas; i++) {
            for (let j = 0; j < a.filas; j++) {
                c.matriz[i][j] = a.matriz[i][j] - b.matriz[i][j];
            }
        }
        return c;
    }

    multiplynot(a, b) {
        const c = new Matriz(a.columnas, a.filas, false);
        for (let i = 0; i < b.columnas; i++) {
            for (let j = 0; j < a.filas; j++) {
                for (let k = 0; k < a.columnas; k++) {
                    c.matriz[i][j] += a.matriz[i][k] * b.matriz[k][j];
                }
            }
        }
        return c;
    }


    matrizByCoef(matriz, coef) {
        for (let i = 0; i < matriz.columnas; i++) {
            for (let j = 0; j < matriz.filas; j++) {
                matriz.matriz[i][j] *= coef;
            }
        }

        return matriz;
    }


    isPowerOfTwo(n) {
        return Math.log2(n) % 1 === 0;
    }


    fillPowerOfTwo(matriz) {
        // find nearest power of two
        let n = Math.pow(2, Math.trunc((matriz.columnas % 2) + 1));
        const c = new Matriz(n, n, false);
        // compute new size
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                c.matriz[i][j] = matriz.matriz[i][j]
            }
        }

        return c;

        // fill
        // matriz.matriz.forEach(array => {
        //     for (let i = 0; i < nearestPowerOfTwo; i++) array.push(0);
        // })
        // for (let i = 0; i < nearestPowerOfTwo; i++) matriz.matriz.push(new Array(size).fill(0));
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


    merge(matriz, matrizResult, start, end) {

        for (let i1 = 0, i2 = start; i1 < matriz.matriz.length; i1++, i2++)
            for (let j1 = 0, j2 = end; j1 < matriz.matriz.length; j1++, j2++) {
                matrizResult.matriz[i2][j2] = matriz.matriz[i1][j1];
            }
    }


    divideByBlock(a, b) {

        // get matriz length
        const n = a.matriz.length;

        // create matriz c with zeros
        const result = new Matriz(n, n, false);

        // if matriz is below 2 then use standard multiplication
        if (n == 1) {
            result.matriz[0][0] = (a.matriz[0][0]) * (b.matriz[0][0]);

            return result;

            // recursive
        } else {

            // top left matriz a
            let a11 = new Matriz(n / 2, n / 2, false);
            a11.matriz = this.split(a, 0, n / 2, 0, n / 2);
            // top right matriz a
            let a12 = new Matriz(n / 2, n / 2, false);
            a12.matriz = this.split(a, 0, n / 2, n / 2, n);
            // bottom left matriz a
            let a21 = new Matriz(n / 2, n / 2, false);
            a21.matriz = this.split(a, n / 2, n, 0, n / 2);
            // bottom right matriz a
            let a22 = new Matriz(n / 2, n / 2, false);
            a22.matriz = this.split(a, n / 2, n, n / 2, n);

            // top left matriz b
            let b11 = new Matriz(n / 2, n / 2, false);
            b11.matriz = this.split(b, 0, n / 2, 0, n / 2);
            // top right matriz b
            let b12 = new Matriz(n / 2, n / 2, false);
            b12.matriz = this.split(b, 0, n / 2, n / 2, n);
            // bottom left matriz b
            let b21 = new Matriz(n / 2, n / 2, false);
            b21.matriz = this.split(b, n / 2, n, 0, n / 2);
            // bottom right matriz b
            let b22 = new Matriz(n / 2, n / 2, false);
            b22.matriz = this.split(b, n / 2, n, n / 2, n);

            // strassen formulas with recursive call


            const q1 = this.divideByBlock(this.add(a11, a22), this.add(b11, b22));
            const q2 = this.divideByBlock(this.add(a21, a22), b11);
            const q3 = this.divideByBlock(a11, this.substract(b12, b22));
            
            const q4 = this.divideByBlock(a22, this.substract(b21, b11));
            const q5 = this.divideByBlock(this.add(a11, a12), b22);
          
            const q6 = this.divideByBlock(this.substract(a21, a11), this.add(b11, b12));
            const q7 = this.divideByBlock(this.substract(a12, a22), this.add(b21, b22));

            // matriz c construction with strassen formulas
            const c11 = this.add(this.substract(this.add(q1, q4), q5), q7);
            const c12 = this.add(q3, q5);
          
            const c21 = this.add(q2, q4);
            const c22 = this.add(this.add(this.substract(q1, q2), q3), q6);

            // matriz reconstruction
            this.merge(c11, result, 0, 0);
            this.merge(c12, result, 0, n / 2);
            this.merge(c21, result, n / 2, 0);
            this.merge(c22, result, n / 2, n / 2);

        }
        return result;
    }


    strassen(a, b) {

        // if (a.columnas !== a.filas || b.columnas !== b.filas)
        //     throw new Error('The matriz is not n*n');
        // if (a.columnas !== b.columnas)
        //     throw new Error('Matriz must have the same size');
        // get size & create matriz c
        const size = a.columnas;
        let c = new Matriz(size, size);

        // if matriz is not power of two then fill it with zeros with the nearest power of two
        // else result calculation
        if (!this.isPowerOfTwo(size)) {
            a = this.fillPowerOfTwo(a);
            b = this.fillPowerOfTwo(b);
            // matriz result calculation using rescursive call
            c = this.divideByBlock(a, b);


            // reshape matriz to it's orignal size (removing zeros)
            this.reshape(c, size);
        }
        else {
            c = this.divideByBlock(a, b);

        }
        return c;
    }
} 