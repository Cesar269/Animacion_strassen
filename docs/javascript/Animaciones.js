const subs = document.querySelector(".recursiones")
export const imprimeSeccion = (matrizA) => {
    //maquetar matriz
    let table = document.createElement("table");
    let n = matrizA.length;
    subs.appendChild(table);
    for (let i = 0; i < n; i++) {
        let newTr = document.createElement("tr");
        table.appendChild(newTr)
        for (let j = 0; j < n; j++) {
            let newtd = document.createElement("td")
            newtd.textContent = matrizA[i][j];
            newTr.appendChild(newtd);
        }
    }

};