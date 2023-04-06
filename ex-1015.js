var input = require('fs').readFileSync('./test-files/ex-1015.txt', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const p1 = lines.shift().split(' ');
const x1 = p1.shift();
const y1 = p1.shift();

const p2 = lines.shift().split(' ');
const x2 = p2.shift();
const y2 = p2.shift();

const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
console.log(`${distancia.toFixed(4)}`);