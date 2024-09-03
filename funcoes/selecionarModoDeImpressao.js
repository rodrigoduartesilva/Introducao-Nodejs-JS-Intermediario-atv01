const informarDadosDoUsuario = require("./informarDadosDoUsuario.js");
const exibirMenu = require("./exibirMenu.js");
const prompt = require('prompt-sync')();

function selecionarModoDeImpressao() {
    let opcao;

    let usuario = informarDadosDoUsuario();
    const jsonString = JSON.stringify(usuario);
    const obj = JSON.parse(jsonString);

    exibirMenu();

    do {

        opcao = +prompt('Selecione uma das opções de impressão listadas acima: ');

        switch (opcao) {
            case 1:
                console.log('\n');
                console.log('Formato de Impressão: Dados do usuário.');
                console.log('\n');
                console.log(usuario.info());
                console.log('\n');
                break;

            case 2:
                console.log('\n');
                console.log('Formato de Impressão: String.');
                console.log('\n');
                console.log(jsonString);
                console.log('\n');
                break;

            case 3:
                console.log('\n');
                console.log('Formato de Impressão: Objeto.');
                console.log('\n');
                console.log(obj);
                console.log('\n');
                break;

            case 4:
                console.log('\n');
                console.log('Aplicação finalizada.');
                console.log('\n');
                break;

            default:
                console.log('\n');
                console.log('Opção Inválida.');
                console.log('\n');
                break;
        }

    } while (opcao != 4);
}

module.exports = selecionarModoDeImpressao;