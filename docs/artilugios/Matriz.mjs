 class Matriz {

    /**
     * Construcs a matrix object
     * @constructor
     * @param {number} columnas numero de columnas
     * @param {number} filas numero de filas 
     * @param {boolean} aleatorio variable qie define si se llena o no la matriz de numeros random o ceros
     */
    constructor(columnas, filas, aleatorio) {
        if (!aleatorio) {
            this.columnas = columnas;
            this.filas = filas;
            this.matriz = this.llenar();
        } else {
            this.columnas = columnas;
            this.filas = filas;
            this.matriz = this.llenarAleatoriamente();
        }
    }

    /**
     * llena una matriz de ceros y la hace bidimensional
     * @return
     *  Una matriz de cero
     */
    llenar() {
        const unaMatriz = [];
        for (let i = 0; i < this.columnas; i++) {
            unaMatriz[i] = [];
            for (let j = 0; j < this.filas; j++) {
                m[i][j] = 0;
            }
        }
        return unaMatriz;
    }

    /**
     * Llena una matriz con numeros random
     * @return
     *  Ademas de llenarla la hace bidimensional
     */
    llenarAleatoriamente() {
        const unaMatriz = [];
        for (let i = 0; i < this.columnas; i++) {
            unaMatriz[i] = [];
            for (let j = 0; j < this.filas; j++) {
                UnaMatriz[i][j] = Math.floor(Math.random() * Math.floor(3));
            }
        }
        return unaMatriz;
    }
}
 export default Matriz;