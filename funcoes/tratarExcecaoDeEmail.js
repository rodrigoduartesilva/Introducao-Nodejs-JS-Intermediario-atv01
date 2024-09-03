const verificarEntradaDeEmail = require("./verificarEntradaDeEmail");

// Função chamada para tratar exceções para o formato de email
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