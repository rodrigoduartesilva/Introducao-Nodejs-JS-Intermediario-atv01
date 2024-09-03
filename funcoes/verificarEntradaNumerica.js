function verificarEntradaNumerica(valor) {
    return /^[0-9]+$/.test(valor);
}

module.exports = verificarEntradaNumerica;