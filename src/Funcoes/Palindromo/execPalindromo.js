const readline = require('readline');
const verificarPalindromo = require('./Palindromo');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function perguntar(pergunta) {
    return new Promise(resolve => rl.question(pergunta, resolve));
}

async function exec() {
    console.log("\n--- Verificador de Palíndromo ---");
    const verificador = new verificarPalindromo();
    const palavra = await perguntar("Digite uma palavra ou frase para verificar se é um palíndromo: ");
    
    if (verificador.isPalindromo(palavra)) {
        console.log(`"${palavra}" É um palíndromo.`);
        
    } else {
        console.log(`"${palavra}" NÃO é um palíndromo.`);
    }
    rl.close();
}

exec();