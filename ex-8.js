var input = require('fs').readFileSync('./test-files/ex-8.txt', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const A = parseInt(lines.shift());
const B = parseInt(lines.shift());
const C = parseInt(lines.shift());
const D = parseInt(lines.shift());
const diferenca = (A * B - C * D);
console.log(`DIFERENCA = ${diferenca}`);