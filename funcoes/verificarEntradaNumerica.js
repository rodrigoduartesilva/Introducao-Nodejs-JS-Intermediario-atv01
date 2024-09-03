// Função que retorna uma expressao regular afim de conferir se o dado digitado é compativel com o modelo esperado
function verificarEntradaNumerica(valor) {
    return /^[0-9]+$/.test(valor);
}

module.exports = verificarEntradaNumerica;