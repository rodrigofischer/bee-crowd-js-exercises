var input = require('fs').readFileSync('./test-files/ex-1014.txt', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const distanciaTotalPercorrida = parseInt(lines.shift());
const totalCombustivelGasto = parseFloat(lines.shift());
const consumo = distanciaTotalPercorrida / totalCombustivelGasto;

console.log(`${consumo.toFixed(3)} km/l`);