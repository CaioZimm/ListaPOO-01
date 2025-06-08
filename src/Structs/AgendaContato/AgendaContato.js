const Contato = require('./Contato');

class AgendaContatos {
    constructor() {
        /**
         * @type {Contato[]}
         */
        this.contatos = [];
        this.limiteContatos = 10;
    }

    /**
     * @param {string} nome 
     * @param {string} telefone
     * @param {string} email
     */
    adicionarContato(nome, telefone, email) {
        if (this.contatos.length >= this.limiteContatos) {
            console.log("A agenda de contatos atingiu o limite (10 contatos).");
            return;
        }

        const novoContato = new Contato(nome, telefone, email);
        this.contatos.push(novoContato);
        console.log(`\nContato '${nome}' adicionado com sucesso!`);
    }

    /**
     * @param {string} nomeProcurado
     */
    procurarContato(nomeProcurado) {
        const contatoEncontrado = this.contatos.find(contato => contato.nome.toLowerCase() === nomeProcurado.toLowerCase());

        if (contatoEncontrado) {
            console.log(`\nContato encontrado:`);
            console.log(`Nome: ${contatoEncontrado.nome}`);
            console.log(`Telefone: ${contatoEncontrado.telefone}`);
            console.log(`Email: ${contatoEncontrado.email}`);

        } else {
            console.log(`Contato com o nome '${nomeProcurado}' não encontrado.`);
        }
    }

    listarContatos() {
        if (this.contatos.length === 0) {
            console.log("\nA agenda está vazia.");
            return;
        }
        console.log("\n--- Lista de Contatos ---");
        this.contatos.forEach(contato => {
            console.log(contato.toString());
        });
        console.log("------------------------");
    }
}

module.exports = AgendaContatos;