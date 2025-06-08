class Funcionario {
    /**
     * @param {number} id 
     * @param {string} nome
     * @param {number} salario
     * @param {string} departamento
     */
    constructor(id, nome, salario, departamento) {
        this.id = id;
        this.nome = nome;
        this.salario = salario;
        this.departamento = departamento;
    }

    /**
     * @returns {string}
     */
    toString() {
        return `ID: ${this.id}, Nome: ${this.nome}, Salário: R$${this.salario.toFixed(2)}, Departamento: ${this.departamento}`;
    }
}

module.exports = Funcionario;