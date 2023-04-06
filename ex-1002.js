var input = require('fs').readFileSync('./test-files/ex-1002.txt', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const PI = 3.14159
const raio = parseFloat(lines[0]);
const area = PI * (Math.pow(raio, 2));
console.log(`A=${area.toFixed(4)}`);