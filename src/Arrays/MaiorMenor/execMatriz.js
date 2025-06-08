const readline = require('readline');
const Matriz = require('./Matriz');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function perguntar(pergunta) {
    return new Promise(resolve => rl.question(pergunta, resolve));
}

async function exec() {
    console.log("\n--- Maior e Menor Elemento em uma Matriz ---");
    const matrizUsada = new Matriz();
    const linhas = parseInt(await perguntar("Digite o número de linhas da matriz: "));
    const colunas = parseInt(await perguntar("Digite o número de colunas da matriz: "));

    if (isNaN(linhas) || isNaN(colunas) || linhas <= 0 || colunas <= 0) {
        console.log("Dimensões inválidas.");
        rl.close();
        return;
    }

    console.log("Digite os elementos da matriz (um por linha, separados por espaço para as colunas):");
    console.log("\nExemplo de entrada:");
    console.log("Linha 1 (2 números separados por espaço): 2 3");
    console.log("Linha 2 (2 números separados por espaço): 3 4\n");

    const matriz = [];
    for (let i = 0; i < linhas; i++) {
        let linhaValida = false;
        while (!linhaValida) {
            const linhaStr = await perguntar(`Linha ${i + 1} (${colunas} números separados por espaço): `);
            const linhaNumeros = linhaStr.split(' ').map(Number);

            if (linhaNumeros.length === colunas && !linhaNumeros.some(isNaN)) {
                matriz.push(linhaNumeros);
                linhaValida = true;

            } else {
                console.log("Entrada inválida para a linha. Certifique-se de digitar números separados por espaço.");
            }
        }
    }

    console.log("\nMatriz inserida:");
    matriz.forEach(linha => console.log(linha.join('\t')));

    try {
        const maior = matrizUsada.encontrarMaior(matriz);
        const menor = matrizUsada.encontrarMenor(matriz);

        console.log(`Maior elemento: ${maior}`);
        console.log(`Menor elemento: ${menor}`);

    } catch (error) {
        console.error(`Erro: ${error.message}`);
    } finally {
        rl.close();
    }
}

exec();