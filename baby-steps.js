var length = process.argv.length,
    soma = 0;

for (i = 2; i < length; i++) {
    soma += Number(process.argv[i])
}

console.log(soma);