var input = require('fs').readFileSync('./test-files/ex-14.txt', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const line1 = lines[0].split(' ');
const A = parseInt(line1.shift());
const B = parseInt(line1.shift());
const C = parseInt(line1.shift());
const maiorAB = (A + B + Math.abs(A - B)) / 2;
const maiorMAB_EC = (maiorAB + C + Math.abs(maiorAB - C)) / 2;

console.log(`${maiorMAB_EC} eh o maior`);