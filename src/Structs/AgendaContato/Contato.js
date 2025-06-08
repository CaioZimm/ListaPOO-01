class Contato {
    /**
     * @param {string} nome
     * @param {string} telefone
     * @param {string} email
     */
    constructor(nome, telefone, email) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }

    /**
     * @returns {string}
     */
    toString() {
        return `Nome: ${this.nome}, Telefone: ${this.telefone}, Email: ${this.email}`;
    }
}

module.exports = Contato;