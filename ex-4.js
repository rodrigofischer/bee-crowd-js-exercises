var input = require('fs').readFileSync('./test-files/ex-4.txt', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const A = parseInt(lines.shift());
const B = parseInt(lines.shift());
const soma = A + B;
console.log(`SOMA = ${soma}`);