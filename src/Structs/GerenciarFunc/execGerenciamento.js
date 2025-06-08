const readline = require('readline');
const GerenciadorFunc = require('./GerenciadorFuncionarios');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function perguntar(pergunta) {
    return new Promise(resolve => rl.question(pergunta, resolve));
}

async function exec() {
    console.log("\n--- Sistema de Gerenciamento de Funcionários ---");
    const gerenciador = new GerenciadorFunc();

    let continuar = true;
    while (continuar) {
        console.log("\nOpções:");
        console.log("1. Cadastrar Funcionário");
        console.log("2. Calcular Total de Salários por Departamento");
        console.log("3. Listar Todos os Funcionários");
        console.log("0. Voltar ao Menu Principal");

        const op = await perguntar("Escolha uma opção: ");

        switch (op) {
            case '1':
                const id = parseInt(await perguntar("ID do funcionário: "));
                const nome = await perguntar("Nome do funcionário: ");
                const salario = parseFloat(await perguntar("Salário do funcionário: "));
                const departamento = await perguntar("Departamento do funcionário: ");
                gerenciador.cadastrarFuncionario(nome, id, salario, departamento);
                break;

            case '2':
                const depCalc = await perguntar("Departamento para calcular o total de salários: ");
                gerenciador.calcularTotalSalariosPorDepartamento(depCalc);
                break;

            case '3':
                gerenciador.listarTodosFuncionarios();
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

exec();