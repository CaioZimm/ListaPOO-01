class Calculadora{
    /**
     * @param {number} num1
     * @param {number} num2
     * @returns {number}
    */
    somar( num1, num2 ){
        return num1 + num2;
    }

    /**
     * @param {number} num1
     * @param {number} num2
     * @returns {number}
    */
    sub( num1, num2 ){
        return num1 - num2;
    }

    /**
     * @param {number} num1
     * @param {number} num2
     * @returns {number}
    */
    mult( num1, num2 ){
        return num1 * num2;
    }

    /**
     * @param {number} num1
     * @param {number} num2
     * @returns {number}
     * @throws {Error}
    */
    div( num1, num2 ){
        if (num2 === 0) {
            throw new Error("Não é possível dividir por zero.");
        }
        return num1 / num2;
    }

}

module.exports = Calculadora