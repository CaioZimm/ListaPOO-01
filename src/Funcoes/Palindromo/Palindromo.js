class Palindromo {
    /**
     * @param {string} text
     * @returns {boolean}
     */
    isPalindromo(text) {
        const textoLimpo = text.toLowerCase().replace(/\s/g, '');
        const textoInvertido = textoLimpo.split('').reverse().join('');
        
        return textoLimpo === textoInvertido;
    }
}

module.exports = Palindromo;