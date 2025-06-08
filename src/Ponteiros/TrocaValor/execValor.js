const readline = require('readline');
const Valor = require('./Valor');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function perguntar(pergunta) {
    return new Promise(resolve => rl.question(pergunta, resolve));
}

async function exec() {
    console.log("\n--- Trocando Valores entre Objetos ---");
    const objetoA = new Valor(0);
    const objetoB = new Valor(0);

    objetoA.valor = parseInt(await perguntar("Digite um valor para objetoA: "));
    objetoB.valor = parseInt(await perguntar("Digite um valor para objetoB: "));

    console.log(`Valores iniciais: objetoA.valor = ${objetoA.valor}, objetoB.valor = ${objetoB.valor}`);

    Valor.trocarValores(objetoA, objetoB);

    console.log(`\nValores finais após a simulação de troca: objetoA.valor = ${objetoA.valor}, objetoB.valor = ${objetoB.valor}`);
    rl.close();
}

exec();