function verificarEntradaDeTexto(valor) {
    return /^[a-zA-Z]+$/.test(valor);
}

module.exports = verificarEntradaDeTexto;