var input = require('fs').readFileSync('./test-files/ex-1017.txt', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const kmByL = 12;
const timeEllapsedHours = parseInt(lines.shift());
const averageVel = parseInt(lines.shift());
const distance = averageVel * timeEllapsedHours;
const fuelWasted = distance / kmByL;

console.log(`${fuelWasted.toFixed(3)}`);