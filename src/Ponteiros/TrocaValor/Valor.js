class Valor {
    /**
     * @param {number} valor
     */
    constructor(valor) {
        this.valor = valor;
    }

    /**
     * @param {Valor} ref1
     * @param {Valor} ref2
     */
    static trocarValores(ref1, ref2) {
        console.log(`\nValores ANTES da troca: objetoA.valor = ${ref1.valor}, objetoB.valor = ${ref2.valor}`);

        const temp = ref1.valor;
        ref1.valor = ref2.valor;
        ref2.valor = temp;

        console.log(`Valores DEPOIS da troca: objetoA.valor = ${ref1.valor}, objetoB.valor = ${ref2.valor}`);
    }
}

module.exports = Valor;