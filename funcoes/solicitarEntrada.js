const prompt = require('prompt-sync')();

function solicitarEntrada(mensagem, tratarExcecao, verificarEntrada) {
    let valor;

    do {
        valor = prompt(mensagem);
        tratarExcecao(valor);
    } while (!verificarEntrada(valor));

    return valor;
}

module.exports = solicitarEntrada;