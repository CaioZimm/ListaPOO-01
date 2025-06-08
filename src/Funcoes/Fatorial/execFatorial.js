const readline = require('readline');
const Fatorial = require('./Fatorial');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function perguntar(pergunta) {
    return new Promise(resolve => rl.question(pergunta, resolve));
}

async function exec() {
    console.log("\n--- Cálculo de Fatorial ---");
    const calc = new Fatorial();
    const numero = parseInt(await perguntar("Digite um número inteiro para calcular o fatorial: "));
    
    try {
        const resultado = calc.calcularFatorial(numero);
        console.log(`O fatorial de ${numero} é: ${resultado}`);

    } catch (error) {
        console.error(`Erro: ${error.message}`);

    } finally {
        rl.close();
    }
}

exec();