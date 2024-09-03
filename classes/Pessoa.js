class Pessoa {
    constructor(nome, anoDeNascimento, sexo, nacionalidade) {
        this.nome = nome,
            this.anoDeNascimento = anoDeNascimento,
            this.sexo = sexo,
            this.nacionalidade = nacionalidade
    }

    info = () => {
        return ` Nome: ${this.nome} \n Ano de Nascimento: ${this.anoDeNascimento} \n Sexo: ${this.sexo} \n Nacionalidade: ${this.nacionalidade}`;
    }
}

module.exports = { Pessoa };