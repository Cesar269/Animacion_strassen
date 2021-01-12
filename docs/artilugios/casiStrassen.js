
import Matriz from "../javascript/Matriz.js"
export default class Strassen {


    constructor() {

    }
    // Funcion pata restar dos matrices
    sub(A, B) {
        let n = A.matriz.length;
        let C = new Matriz(n, n, false);
        for (let i = 0; i < n; i++)
            for (let j = 0; j < n; j++)
                C.matriz[i][j] = A.matriz[i][j] - B.matriz[i][j];
        return C;
    }

    // Funcion para sumar dos matrices
    add(A, B) {
        let n = A.matriz.length;
        let C = new Matriz(n, n, true)
        for (let i = 0; i < n; i++)
            for (let j = 0; j < n; j++)
                C.matriz[i][j] = A.matriz[i][j] + B.matriz[i][j];
       
        return C;
    }

    //Funcion para separar en una matriz hija más pequeña
    split(matrix, indexColumnStart, indexColumnEnd, indexRowStart, indexRowEnd) {
        const splitted = matrix.matriz.slice(indexColumnStart, indexColumnEnd);
        let result = [];
        splitted.forEach(array => {
            result.push(array.slice(indexRowStart, indexRowEnd));
        });

        return result;
    }

    //funcion para multiplicar dos matrices
    multiply(a, b) {
        let n = a.columnas
        const c = new Matriz(a.columnas,a.filas,true);
        c.matriz[0][0] = a.matriz[0][0] * b.matriz[0][0];
        return c;
        // const c = new Matriz(a.columnas, a.filas, false);
        // for (let i = 0; i < b.columnas; i++) {
        //     for (let j = 0; j < a.filas; j++) {
        //         for (let k = 0; k < a.columnas; k++) {
        //             c.matriz[i][j] += a.matriz[i][k] * b.matriz[k][j];
        //         }
        //     }
        // }
        // return c;
        // let n = A.matriz.length;
        // let C = new Matriz(n, n, false)
        // for (let i = 0; i < n; i++)
        //     for (let j = 0; j < n; j++)
        //         C.matriz[i][j] = A.matriz[i][j] * B.matriz[i][j];
        // return C;
    }

    fillPowerOfTwo(matrix) {
        // find nearest power of two
        let nearestPowerOfTwo = Math.pow(2, Math.trunc(Math.log2(matrix.columnas) + 1)) - matrix.columnas;
        // compute new size
        const size = nearestPowerOfTwo + matrix.columnas;
        // fill
        matrix.matriz.forEach(array => {
            for (let i = 0; i < nearestPowerOfTwo; i++) array.push(0);
        })
        for (let i = 0; i < nearestPowerOfTwo; i++) matrix.matriz.push(new Array(size).fill(0));
        console.log(matrix.matriz)
    }


    reshape(matrix, size) {
        matrix.matriz.splice(size, (matrix.matriz.length - size));
        matrix.matriz.forEach(array => {
            array.splice(size, array.length - size);
        })
        matrix.columnas = size;
        matrix.filas = size;
    }



    join(matrix, matrixResult, start, end) {

        for (let i1 = 0, i2 = start; i1 < matrix.matriz.length; i1++, i2++)
            for (let j1 = 0, j2 = end; j1 < matrix.matriz.length; j1++, j2++) {
                matrixResult.matriz[i2][j2] = matrix.matriz[i1][j1];
            }
    }

    divideByBlock(a, b) {
        
        // get matrix length
        const n = a.matriz.length;
        // create matrix c with zeros
        const result = new Matriz(n, n, false);

        // if matrix is below 2 then use standard multiplication
        if (n ===1 ) {
            
            result.matriz[0][0] = a.matriz[0][0] * b.matriz[0][0]

            return result;

            // recursive
        } else {
            // top left matrix a
            let a11 = new Matriz(n / 2, n / 2, false);
            a11.matriz = this.split(a, 0, n / 2, 0, n / 2);
            // top right matrix a
            let a12 = new Matriz(n / 2, n / 2, false);
            a12.matriz = this.split(a, 0, n / 2, n / 2, n);
            // bottom left matrix a
            let a21 = new Matriz(n / 2, n / 2, false);
            a21.matriz = this.split(a, n / 2, n, 0, n / 2);
            // bottom right matrix a
            let a22 = new Matriz(n / 2, n / 2, false);
            a22.matriz = this.split(a, n / 2, n, n / 2, n);
            
            // top left matrix b
            let b11 = new Matriz(n / 2, n / 2, false);
            b11.matriz = this.split(b, 0, n / 2, 0, n / 2);
            // top right matrix b
            let b12 = new Matriz(n / 2, n / 2, false);
            b12.matriz = this.split(b, 0, n / 2, n / 2, n);
            // bottom left matrix b
            let b21 = new Matriz(n / 2, n / 2, false);
            b21.matriz = this.split(b, n / 2, n, 0, n / 2);
            // bottom right matrix b
            let b22 = new Matriz(n / 2, n / 2, false);
            b22.matriz = this.split(b, n / 2, n, n / 2, n);
            
            // // strassen formulas with recursive call
            
            const q1 = this.divideByBlock((this.add(a11, a22), this.add(b11, b22)));
            const q2 = this.divideByBlock((this.add(a21, a22), b11));
            const q3 = this.divideByBlock((a11, this.sub(b12, b22)));
            const q4 = this.divideByBlock((a22, this.sub(b21, b11)));
            const q5 = this.divideByBlock((this.add(a11, a12), b22));
            const q6 = this.divideByBlock((this.sub(a21, a11), this.add(b11, b12)));
            const q7 = this.divideByBlock((this.sub(a12, a22), this.add(b21, b22)));
            
          

            // // matrix c construction with strassen formulas
            const c11 =  this.add(this.sub(this.add(q1, q4), q5), q7);
            const c12 = this.add(q3, q5);
            const c21 = this.add(q2, q4);
            const c22 = this.add(this.sub(this.add(q1, q3), q2), q6);

            // matrix reconstruction
            this.join(c11, result, 0, 0);
            this.join(c12, result, 0, n / 2);
            this.join(c21, result, n / 2, 0);
            this.join(c22, result, n / 2, n / 2);

        }

        return result;
    }

    applyStrassen(a, b) {

        // get size & create matrix c
        const size = a.columnas;
        let c = new Matriz(size, size, false);

        // if matrix is not power of two then fill it with zeros with the nearest power of two
        // else result calculation
        if (size % 2 == 1) {
         
            this.fillPowerOfTwo(a);
            console.log(a.matriz)
            this.fillPowerOfTwo(b);
            console.log(b.matriz)
            // matrix result calculation using rescursive call
            c = this.divideByBlock(a, b);
            // reshape matrix to it's orignal size (removing zeros)
            this.reshape(c, size);
        }
        else {
           
            c = this.divideByBlock(a, b);
        }

        return c;
    }

}