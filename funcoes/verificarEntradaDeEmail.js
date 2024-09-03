// Função que retorna uma expressao regular afim de conferir se o dado digitado é compativel com o modelo esperado
function verificarEntradaDeEmail(valor) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
}

module.exports = verificarEntradaDeEmail;