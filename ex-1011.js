var input = require('fs').readFileSync('./test-files/ex-1011.txt', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const raio = parseFloat(lines.shift());
const pi = 3.14159;
const volumeEsfera = (4.0/3.0) * pi * Math.pow(raio, 3);

console.log(`VOLUME = ${volumeEsfera.toFixed(3)}`);