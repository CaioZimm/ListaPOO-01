const readline = require('readline');
const ConversorTemperatura = require('./Conversor');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function perguntar(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function exec() {
    console.log("\n--- Conversor de Temperaturas ---");
    const conversor = new ConversorTemperatura();
    const escolha = await perguntar("Converter:\n [1] Celsius para Fahrenheit\n [2] Fahrenheit para Celsius\n : ");
    
    if (escolha === '1') {
        const tempC = parseFloat(await perguntar("Digite a temperatura em Celsius: "));
        const tempF = conversor.celsiusParaFahrenheit(tempC);
        console.log(`${tempC}°C é igual a ${tempF.toFixed(2)}°F`);

    } else if (escolha === '2') {
        const tempF = parseFloat(await perguntar("Digite a temperatura em Fahrenheit: "));
        const tempC = conversor.fahrenheitParaCelsius(tempF);
        console.log(`${tempF}°F é igual a ${tempC.toFixed(2)}°C`);


    } else {
        console.log("Opção inválida.");
    }
    rl.close();
}

exec();