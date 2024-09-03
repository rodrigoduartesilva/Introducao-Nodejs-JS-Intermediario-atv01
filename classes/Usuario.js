const { Pessoa } = require("./Pessoa");
const anoAtual = 2024;

class Usuario extends Pessoa {
    constructor(nome, anoDeNascimento, sexo, nacionalidade, email, senha) {
        super(nome, anoDeNascimento, sexo, nacionalidade);

        this.nome = nome,
            this.anoDeNascimento = anoDeNascimento,
            this.sexo = sexo,
            this.nacionalidade = nacionalidade,
            this.email = email,
            this.senha = senha
    }

    idadeEstimada = () => {
        return anoAtual - this.anoDeNascimento;
    }

    info = () => {
        return ` Dados do usuário: \n\n Nome: ${this.nome} \n Ano de Nascimento: ${this.anoDeNascimento} \n Idade Estimada: ${this.idadeEstimada()} anos \n Sexo: ${this.sexo} \n Nacionalidade: ${this.nacionalidade} \n Email: ${this.email}`;
    }
}

module.exports = { Usuario };