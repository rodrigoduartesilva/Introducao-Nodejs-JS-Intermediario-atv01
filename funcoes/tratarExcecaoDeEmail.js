const verificarEntradaDeEmail = require("./verificarEntradaDeEmail");


function tratarExcecaoDeEmail(valor) {
    try {
        if (!verificarEntradaDeEmail(valor)) {
            throw new Error('Digite um formato de email válido.');
        }
    } catch (err) {
        console.error(`Atenção: ${err.message}`);
    }
}

module.exports = tratarExcecaoDeEmail;