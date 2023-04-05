var input = require('fs').readFileSync('./test-files/ex-2.txt', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const A = parseInt(lines[0]);
const B = parseInt(lines[1]);
const X = A + B;
console.log(`X = ${X}`);