const readline = require('readline');
const Numero = require('./Numero');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function exec() {
    console.log("\n--- Manipulando Dados de um Objeto ---");
    const num = new Numero(10);
    console.log("Objeto Numero criado com valor inicial.");

    console.log(`\nHash de identidade do objeto: ${require('util').inspect(num)}`);
    console.log(`A referência do objeto é: ${num.constructor.name}@${process.hrtime.bigint().toString()}`);

    num.imprimirValor();

    num.valor = 25;
    console.log("\nValor do atributo alterado para 25.");
    num.imprimirValor();
    
    rl.close();
}

exec();