const readline = require('readline');
const Calculadora = require('./Calculadora');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function perguntar(pergunta) {
    return new Promise(resolve => rl.question(pergunta, resolve));
}

async function exec() {
    console.log("\n--- Calculadora Simples ---");
    const calc = new Calculadora();
    try {
        const num1 = parseFloat(await perguntar("Digite o primeiro número: "));
        const num2 = parseFloat(await perguntar("Digite o segundo número: "));
        const op = await perguntar("Escolha a operação (+, -, *, /): ");

        let resultado;
        switch (op) {
            case '+': 
                resultado = calc.somar(num1, num2); 
                break;

            case '-': 
                resultado = calc.sub(num1, num2);
                break;

            case '*': 
                resultado = calc.mult(num1, num2);
                break;

            case '/': 
                resultado = calc.div(num1, num2);
                break;
            default: 
                console.log("Operação inválida!"); 
                return;
        }

        console.log(`Resultado: ${resultado}`);

    } catch (error) {
        console.error(`Erro: ${error.message}`);

    } finally {
        rl.close(); 
    }
}

exec();