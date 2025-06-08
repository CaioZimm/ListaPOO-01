const readline = require('readline');
const SomaDiagonais = require('./SomaMatriz');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function perguntar(pergunta) {
    return new Promise(resolve => rl.question(pergunta, resolve));
}

async function exec() {
    console.log("\n--- Soma das Diagonais de uma Matriz Quadrada ---");
    const diagonalUsada = new SomaDiagonais();
    const ordem = parseInt(await perguntar("Digite a ordem da matriz quadrada (n): "));

    if (isNaN(ordem) || ordem <= 0) {
        console.log("Ordem inválida.");
        rl.close();
        return;
    }

    console.log("Digite os elementos da matriz (um por linha, separados por espaço para as colunas):");
    console.log("\nExemplo de entrada:");
    console.log("Linha 1 (2 números separados por espaço): 2 3");
    console.log("Linha 2 (2 números separados por espaço): 3 4\n");

    const matriz = [];
    for (let i = 0; i < ordem; i++) {
        let linhaValida = false;
        while (!linhaValida) {
            const linhaStr = await perguntar(`Linha ${i + 1} (${ordem} números separados por espaço): `);
            const linhaNumeros = linhaStr.split(' ').map(Number);

            if (linhaNumeros.length === ordem && !linhaNumeros.some(isNaN)) {
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
        const somaPrincipal = diagonalUsada.somarDiagonalPrincipal(matriz);
        const somaSecundaria = diagonalUsada.somarDiagonalSecundaria(matriz);

        console.log(`Soma da Diagonal Principal: ${somaPrincipal}`);
        console.log(`Soma da Diagonal Secundária: ${somaSecundaria}`);

    } catch (error) {
        console.error(`Erro: ${error.message}`);
    } finally {
        rl.close();
    }
}

exec();