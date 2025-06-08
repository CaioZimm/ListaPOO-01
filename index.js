const readline = require('readline');
const { spawn } = require('child_process');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function exibirMenu() {
    console.clear();
    console.log("\n=== Lista de Exercícios POO - 01 em Node.js ===\n");
    console.log("1. Calculadora Simples");
    console.log("2. Verificador de Palíndromo");
    console.log("3. Fatorial");
    console.log("4. Conversor de Temperaturas");
    console.log("5. Maior e Menor Elemento em uma Matriz");
    console.log("6. Soma das Diagonais de uma Matriz Quadrada");
    console.log("7. Manipulando Dados de um Objeto");
    console.log("8. Trocando Valores entre Objetos");
    console.log("9. Sistema de Gerenciamento de Funcionários");
    console.log("10. Agenda de Contatos");

    console.log("0. Sair");
    console.log("==============================================\n");
}

function perguntar(pergunta) {
    return new Promise(resolve => rl.question(pergunta, resolve));
}

function getCaminhoExercicio(numero) {
    switch (numero) {
        case 1:
            return 'src/Funcoes/Calculadora/execCalc.js';
        case 2:
            return 'src/Funcoes/Palindromo/execPalindromo.js';
        case 3:
            return 'src/Funcoes/Fatorial/execFatorial.js';
        case 4:
            return 'src/Funcoes/ConversorTemperatura/execConversor.js';
        case 5:
            return 'src/Arrays/MaiorMenor/execMatriz.js';
        case 6:
            return 'src/Arrays/SomaDiagonais/execSoma.js';
        case 7:
            return 'src/Ponteiros/ManipulacaoDados/execNumero.js';
        case 8:
            return 'src/Ponteiros/TrocaValor/execValor.js';
        case 9:
            return 'src/Structs/GerenciarFunc/execGerenciamento.js';
        case 10:
            return 'src/Structs/AgendaContato/execAgenda.js';
        default:
            return null;
    }
}

async function executarExercicio(numeroExercicio) {
    rl.pause();
    const filePath = getCaminhoExercicio(numeroExercicio);

    return new Promise((resolve, reject) => {
        const child = spawn('node', [filePath], { stdio: 'inherit' });

        child.on('close', (code) => {
            rl.resume();
            if (code !== 0) {
                console.error('Error');
                reject();
            } else {
                resolve();
            }
        });

        child.on('error', (err) => {
            console.error("Error", err.message);
            rl.resume();
            reject(err);
        });
    });
}

async function main() {
    let rodando = true;

    while (rodando) {
        exibirMenu();
        const op = await perguntar("Digite o número do exercício que deseja executar: ");

        if (op === '0') {
            console.log("\nEncerrando o programa...");
            rodando = false;

        } else if (!isNaN(op) && parseInt(op) >= 1 && parseInt(op) <= 10) {
            try {
                await executarExercicio(parseInt(op));
            } catch (error) {}
        } else {
            console.log("Opção inválida. Por favor, digite um número entre 0 e 10.");
        }

        if (rodando) 
            await perguntar("\nPressione Enter para voltar ao menu...");
    }

    rl.close();
}

main();