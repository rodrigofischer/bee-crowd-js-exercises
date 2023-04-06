var input = require('fs').readFileSync('./test-files/ex-1006.txt', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const nota1 = parseFloat(lines.shift());
const nota2 = parseFloat(lines.shift());
const nota3 = parseFloat(lines.shift());
const media = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 10;
console.log(`MEDIA = ${media.toFixed(1)}`);