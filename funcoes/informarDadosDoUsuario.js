function informarDadosDoUsuario() {
    let nome;
    let anoDeNascimento;
    let sexo;
    let nacionalidade;
    let email;
    let senha;

    nome = prompt('Informe o nome do usuário: ');
    anoDeNascimento = +prompt('Informe o ano de nascimento do usuário: ');
    sexo = prompt('Informe o sexo do usuário: ');
    nacionalidade = prompt('Informe a nacionalidade do usuário: ');
    email = prompt('Informe o email do usuário: ');
    senha = prompt('Informe a senha do usuário: ');

    const usuario = new Usuario(nome, anoDeNascimento, sexo, nacionalidade, email, senha);

    return usuario;
}

module.exports = informarDadosDoUsuario;