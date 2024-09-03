const { Pessoa } = require("./Pessoa");
const anoAtual = 2024;

//Implementacao da classe Usuario, esta herda atributos e metodos da classe Pessoa.
class Usuario extends Pessoa {
    constructor(nome, anoDeNascimento, sexo, nacionalidade, email, senha) {
        //Atributos herdados da classe pai Pessoa
        super(nome, anoDeNascimento, sexo, nacionalidade);

        this.nome = nome,
            this.anoDeNascimento = anoDeNascimento,
            this.sexo = sexo,
            this.nacionalidade = nacionalidade,
            this.email = email,
            this.senha = senha
    }

    //Método usado para calcular a idade aproximada do usuario
    idadeEstimada = () => {
        return anoAtual - this.anoDeNascimento;
    }

    //Método herdado da classe Pessoa, porém sobrescrito para se adequar aos novos atributos inseridos na classe filha, exemplificando o conceito de polimorfismo
    info = () => {
        return ` Dados do usuário: \n\n Nome: ${this.nome} \n Ano de Nascimento: ${this.anoDeNascimento} \n Idade Estimada: ${this.idadeEstimada()} anos \n Sexo: ${this.sexo} \n Nacionalidade: ${this.nacionalidade} \n Email: ${this.email}`;
    }
}

module.exports = { Usuario };