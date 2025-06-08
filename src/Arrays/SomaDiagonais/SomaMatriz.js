class SomaDiagonais {
    /**
     * @param {number[][]} matriz 
     * @returns {number}
     * @throws {Error}
     */
    somarDiagonalPrincipal(matriz) {
        if (!matriz || matriz.length === 0) {
            throw new Error("A matriz não pode estar vazia.");
        }
        
        const ordem = matriz.length;
        for (let i = 0; i < ordem; i++) {
            if (matriz[i].length !== ordem) {
                throw new Error("A matriz não é quadrada.");
            }
        }

        let somaPrincipal = 0;
        for (let i = 0; i < ordem; i++) {
            somaPrincipal += matriz[i][i];
        }

        return somaPrincipal;
    }

    /**
     * @param {number[][]} matriz
     * @returns {number}
     * @throws {Error}
     */
    somarDiagonalSecundaria(matriz) {
        if (!matriz || matriz.length === 0) {
            throw new Error("A matriz não pode estar vazia.");
        }

        const ordem = matriz.length;
        for (let i = 0; i < ordem; i++) {
            if (matriz[i].length !== ordem) {
                throw new Error("A matriz não é quadrada.");
            }
        }

        let somaSecundaria = 0;
        for (let i = 0; i < ordem; i++) {
            somaSecundaria += matriz[i][ordem - 1 - i];
        }

        return somaSecundaria;
    }
}

module.exports = SomaDiagonais;