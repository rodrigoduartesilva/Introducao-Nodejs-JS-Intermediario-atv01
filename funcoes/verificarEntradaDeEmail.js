function verificarEntradaDeEmail(valor) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
}

module.exports = verificarEntradaDeEmail;