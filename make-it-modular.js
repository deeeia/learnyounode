var filterFn = require('./solution_filter.js');
var diretorio = process.argv[2];
var filterStr = process.argv[3];

filterFn(diretorio, filterStr, function (err, lista) {
  if (err)
    return console.error('There was an error: ', err);

  lista.forEach(function (arquivo) {
    console.log(arquivo);
  })
})