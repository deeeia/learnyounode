var variavel = require('fs');
var arquivo = process.argv[2];

variavel.readFile(arquivo, function (err, conteudo) {
    var linhas = conteudo.toString().split('\n').length - 1;
    console.log(linhas);
})