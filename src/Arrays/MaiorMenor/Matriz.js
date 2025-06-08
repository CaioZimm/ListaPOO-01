class Matriz {
    /**
     * @param {number} linhas
     * @param {number} colunas
     * @param {function(): number} valor
     * @returns {number[][]}
     */
    criarMatriz(linhas, colunas, valor) {
        const matriz = [];

        for (let i = 0; i < linhas; i++) {
            matriz[i] = [];
            for (let j = 0; j < colunas; j++) {
                matriz[i][j] = valor();
            }
        }

        return matriz;
    }

    /**
     * @param {number[][]} matriz
     * @returns {number}
     * @throws {Error}
     */
    encontrarMaior(matriz) {
        if (!matriz || matriz.length === 0 || matriz[0].length === 0) {
            throw new Error("A matriz não pode estar vazia.");
        }

        let maior = matriz[0][0];

        for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz[i].length; j++) {
                if (matriz[i][j] > maior) {
                    maior = matriz[i][j];
                }
            }
        }

        return maior;
    }

    /**
     * @param {number[][]} matriz
     * @returns {number}
     * @throws {Error}
     */
    encontrarMenor(matriz) {
        if (!matriz || matriz.length === 0 || matriz[0].length === 0) {
            throw new Error("A matriz não pode estar vazia.");
        }

        let menor = matriz[0][0];

        for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz[i].length; j++) {
                if (matriz[i][j] < menor) {
                    menor = matriz[i][j];
                }
            }
        }

        return menor;
    }
}

module.exports = Matriz;