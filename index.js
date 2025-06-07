// index.js
const readline = require('readline');
const { spawn } = require('child_process'); // Importa spawn do módulo child_process

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function exibirMenu() {
    console.log("\n--- Lista de Exercícios POO em Node.js ---");
    console.log("--- Lista 01 ---");
    console.log("1. Calculadora Simples");
    console.log("2. Verificador de Palíndromos");
    console.log("3. Fatorial (Recursivo)");
    console.log("4. Conversor de Temperaturas");
    console.log("5. Maior e Menor Elemento em uma Matriz");
    console.log("6. Soma das Diagonais de uma Matriz Quadrada");
    console.log("7. Manipulando Dados de um Objeto");
    console.log("8. Trocando Valores entre Objetos (Simulado)");
    console.log("9. Sistema de Gerenciamento de Funcionários");
    console.log("10. Agenda de Contatos");
    console.log("0. Sair");
    console.log("------------------------------------------");
}

async function perguntar(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function executarExercicio(numeroExercicio) {
    const filePath = `./exec/runExercicio${numeroExercicio}.js`;

    return new Promise((resolve, reject) => {
        // Usa spawn para executar o arquivo JS como um novo processo Node
        const child = spawn('node', [filePath], { stdio: 'inherit' });

        child.on('close', (code) => {
            if (code !== 0) {
                console.error(`O exercício ${numeroExercicio} foi encerrado com código de saída ${code}`);
                reject(new Error(`Exercício ${numeroExercicio} falhou.`));
            } else {
                resolve();
            }
        });

        child.on('error', (err) => {
            console.error(`Erro ao executar o exercício ${numeroExercicio}: ${err.message}`);
            reject(err);
        });
    });
}


async function main() {
    let rodando = true;
    while (rodando) {
        exibirMenu();
        const escolha = await perguntar("Digite o número do exercício que deseja executar: ");

        if (escolha === '0') {
            console.log("Saindo do programa. Até mais!");
            rodando = false;
        } else if (parseInt(escolha) >= 1 && parseInt(escolha) <= 20) {
            try {
                await executarExercicio(parseInt(escolha));
            } catch (error) {
                // Erro já tratado dentro de executarExercicio
            }
        } else {
            console.log("Opção inválida. Por favor, digite um número de 0 a 20.");
        }
        // Uma pequena pausa para o usuário ver a saída antes do menu reaparecer
        await perguntar("\nPressione Enter para continuar...");
    }
    rl.close(); // Fecha a interface de leitura
}

main(); // Inicia o programa