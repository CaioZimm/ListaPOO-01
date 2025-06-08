const readline = require('readline');
const AgendaContatos = require('./AgendaContato');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function perguntar(pergunta) {
    return new Promise(resolve => rl.question(pergunta, resolve));
}

async function executar() {
    console.log("\n--- Agenda de Contatos ---");
    const agenda = new AgendaContatos();

    let continuar = true;
    while (continuar) {
        console.log("\nOpções:");
        console.log("1. Adicionar Contato");
        console.log("2. Listar Contatos");
        console.log("3. Procurar Contato por Nome");
        console.log("0. Voltar ao Menu Principal");

        const op = await perguntar("Escolha uma opção: ");

        switch (op) {
            case '1':
                const nome = await perguntar("Nome do contato: ");
                const telefone = await perguntar("Telefone do contato: ");
                const email = await perguntar("Email do contato: ");
                agenda.adicionarContato(nome, telefone, email);
                break;

            case '2':
                agenda.listarContatos();
                break;

            case '3':
                const nomeProcurar = await perguntar("Digite o nome do contato para procurar: ");
                agenda.procurarContato(nomeProcurar);
                break;

            case '0':
                continuar = false;
                break;

            default:
                console.log("Opção inválida.");
        }
    }
    rl.close();
}

executar();