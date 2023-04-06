var input = require('fs').readFileSync('./test-files/ex-1005.txt', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const nota1 = parseFloat(lines.shift());
const nota2 = parseFloat(lines.shift());
const media = ((nota1 * 3.5) + (nota2 * 7.5)) / 11;
console.log(`MEDIA = ${media.toFixed(5)}`);