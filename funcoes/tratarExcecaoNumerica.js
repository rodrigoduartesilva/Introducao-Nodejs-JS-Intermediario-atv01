const verificarEntradaNumerica = require("./verificarEntradaNumerica");

function tratarExcecaoNumerica(valor) {
    try {
        if (!verificarEntradaNumerica(valor)) {
            throw new Error('O campo permite apenas valores numéricos.');
        }
    } catch (err) {
        console.error(`Atenção: ${err.message}`);
    }
}

module.exports = tratarExcecaoNumerica;