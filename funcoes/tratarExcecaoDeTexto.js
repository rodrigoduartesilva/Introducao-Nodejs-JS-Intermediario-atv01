const verificarEntradaDeTexto = require("./verificarEntradaDeTexto");

function tratarExcecaoDeTexto(valor) {
    try {
        if (!verificarEntradaDeTexto(valor)) {
            throw new Error('O campo permite apenas valores em texto.');
        }
    } catch (err) {
        console.error(`Atenção: ${err.message}`);
    }
}

module.exports = tratarExcecaoDeTexto;