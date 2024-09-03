//Cria a classe Pessoa que posteriormente será herdada pela classe Usuario.
class Pessoa {
    //Implementacao do construtor com quatro atributos
    constructor(nome, anoDeNascimento, sexo, nacionalidade) {
        this.nome = nome,
            this.anoDeNascimento = anoDeNascimento,
            this.sexo = sexo,
            this.nacionalidade = nacionalidade
    }

    //Método que imprime informações da Pessoa, esse método será sobrescrito na classe Usuario para que seja exemplificado o conceito de polimorfísmo.
    info = () => {
        return ` Nome: ${this.nome} \n Ano de Nascimento: ${this.anoDeNascimento} \n Sexo: ${this.sexo} \n Nacionalidade: ${this.nacionalidade}`;
    }
}

module.exports = { Pessoa };