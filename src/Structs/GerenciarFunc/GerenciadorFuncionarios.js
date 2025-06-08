const Funcionario = require('./Funcionario');

class GerenciadorFuncionarios {
    constructor() {
        /**
         * @type {Funcionario[]}
         */
        this.funcionarios = [];
    }

    /**
     * @param {number} id
     * @param {string} nome
     * @param {number} salario
     * @param {string} departamento
     */
    cadastrarFuncionario(id, nome, salario, departamento) {
        const novoFunc = new Funcionario(id, nome, salario, departamento);
        this.funcionarios.push(novoFunc);

        console.log(`\nFuncionário ${nome} cadastrado com sucesso!`);
    }

    /**
     * @param {string} departamento
     * @returns {number}
     */
    calcularTotalSalariosPorDepartamento(departamento) {
        let totalSalarios = 0;
        const funcionariosDoDepartamento = this.funcionarios.filter(func => func.departamento.toLowerCase() === departamento.toLowerCase());

        if (funcionariosDoDepartamento.length === 0) {
            console.log(`\nNenhum funcionário encontrado no departamento '${departamento}'.`);
            return 0;
        }

        funcionariosDoDepartamento.forEach(func => {
            totalSalarios += func.salario;
        });

        console.log(`\nTotal de salários no departamento de '${departamento}': R$${totalSalarios.toFixed(2)}`);
        return totalSalarios;
    }

    listarTodosFuncionarios() {
        if (this.funcionarios.length === 0) {
            console.log("\nNenhum funcionário cadastrado.");
            return;
        }

        console.log("\n--- Lista de Funcionários ---");
        this.funcionarios.forEach(func => {
            console.log(func.toString());
        });

        console.log("----------------------------");
    }
}

module.exports = GerenciadorFuncionarios;