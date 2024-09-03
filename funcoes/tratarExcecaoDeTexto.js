const verificarEntradaDeTexto = require("./verificarEntradaDeTexto");

// Função chamada para tratar exceções para o formato de texto
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