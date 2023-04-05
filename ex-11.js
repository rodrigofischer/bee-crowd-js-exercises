var input = require('fs').readFileSync('./test-files/ex-11.txt', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const linha1 = lines.shift().split(' ');
const codigoPeca1 = parseInt(linha1[0]);
const numeroPecas1 = parseInt(linha1[1]);
const valorUnitario1 = parseFloat(linha1[2]);

const linha2 = lines.shift().split(' ');
const codigoPeca2 = parseInt(linha2[0]);
const numeroPecas2 = parseInt(linha2[1]);
const valorUnitario2 = parseFloat(linha2[2]);

const valorTotal = (numeroPecas1 * valorUnitario1) + (numeroPecas2 * valorUnitario2);

console.log(`VALOR A PAGAR: R$ ${valorTotal.toFixed(2)}`);