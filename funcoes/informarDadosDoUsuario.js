// Importação da biblioteca prompt-sync que permite ao usuario interagir com o teclado na aplicação
const prompt = require('prompt-sync')();
// Importação da classe Usuario
const { Usuario } = require("../classes/Usuario.js");
// Importação de funções diversas
const solicitarEntrada = require('./solicitarEntrada.js');
const tratarExcecaoDeEmail = require('./tratarExcecaoDeEmail.js');
const tratarExcecaoDeTexto = require('./tratarExcecaoDeTexto.js');
const tratarExcecaoNumerica = require('./tratarExcecaoNumerica.js');
const verificarEntradaDeEmail = require('./verificarEntradaDeEmail.js');
const verificarEntradaDeTexto = require('./verificarEntradaDeTexto.js');
const verificarEntradaNumerica = require('./verificarEntradaNumerica.js');

// Função implementada para que o usuário possa inserir os dados solicitados
function informarDadosDoUsuario() {
    console.log('\n');
    console.log('*************** Sistema para cadastro de usuário ***************');
    console.log('\n');

    // Nas linhas abaixo, o usuario entra com um valor via teclado, esse valor será testado para que se tenha certeza de que os valores correspondem ao formato correto de acordo com o dado pedido
    const nome = solicitarEntrada('Informe o nome do usuário: ', tratarExcecaoDeTexto, verificarEntradaDeTexto);
    const anoDeNascimento = solicitarEntrada('Informe o ano de nascimento do usuário: ', tratarExcecaoNumerica, verificarEntradaNumerica);
    const sexo = solicitarEntrada('Informe o sexo do usuário: ', tratarExcecaoDeTexto, verificarEntradaDeTexto);
    const nacionalidade = solicitarEntrada('Informe a nacionalidade do usuário: ', tratarExcecaoDeTexto, verificarEntradaDeTexto);
    const email = solicitarEntrada('Informe o email do usuário: ', tratarExcecaoDeEmail, verificarEntradaDeEmail);
    const senha = prompt('Informe a senha do usuário: ');

    const usuario = new Usuario(nome, anoDeNascimento, sexo, nacionalidade, email, senha);

    return usuario;
}

module.exports = informarDadosDoUsuario;