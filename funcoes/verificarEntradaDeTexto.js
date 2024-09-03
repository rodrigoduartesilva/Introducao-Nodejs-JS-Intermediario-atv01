// Função que retorna uma expressao regular afim de conferir se o dado digitado é compativel com o modelo esperado
function verificarEntradaDeTexto(valor) {
    return /^[a-zA-Z]+$/.test(valor);
}

module.exports = verificarEntradaDeTexto;