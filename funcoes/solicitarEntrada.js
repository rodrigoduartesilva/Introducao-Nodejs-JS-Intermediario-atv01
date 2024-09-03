const prompt = require('prompt-sync')();

// Função chamada para a inserção de dados dentro da aplicação
function solicitarEntrada(mensagem, tratarExcecao, verificarEntrada) {
    let valor;

    do {
        valor = prompt(mensagem);
        tratarExcecao(valor);
    } while (!verificarEntrada(valor));

    return valor;
}

module.exports = solicitarEntrada;