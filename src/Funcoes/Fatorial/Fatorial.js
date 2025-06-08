class Fatorial {
    /**
     * @param {number} num
     * @returns {number}
     * @throws {Error}
     */
    calcularFatorial(num) {
        if (num < 0) {
            throw new Error("Não é possível calcular o fatorial de um número negativo.");
        }
        if (num === 0) {
            return 1;
        }

        return num * this.calcularFatorial(num - 1);
    }
}

module.exports = Fatorial;