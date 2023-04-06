var input = require('fs').readFileSync('./test-files/ex-1016.txt', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const velA = 60;
const velB = 90;
const diffVelMinutes = (velB - velA) / 60;
const distanceAB = parseInt(lines.shift());
const timeEllapsedAB = distanceAB / diffVelMinutes;
console.log(`${timeEllapsedAB} minutos`);