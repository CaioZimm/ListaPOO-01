class Numero {
    /**
     * @param {number} valor
     */
    constructor(valor) {
        this.valor = valor;
    }

    imprimirValor() {
        console.log(`O valor do atributo é: ${this.valor}`);
    }
}

module.exports = Numero;