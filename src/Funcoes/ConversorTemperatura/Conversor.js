class ConversorTemperatura {
    /**
     * Fórmula: F = (C * 9/5) + 32
     * @param {number} celsius
     * @returns {number}
     */
    celsiusParaFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }
    
    /**
     * Fórmula: C = (F - 32) * 5/9
     * @param {number} fahrenheit
     * @returns {number}
     */
    fahrenheitParaCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }
}

module.exports = ConversorTemperatura;