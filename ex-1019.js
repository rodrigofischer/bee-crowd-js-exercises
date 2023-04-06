var input = require('fs').readFileSync('./test-files/ex-1019.txt', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const timeInSeconds = parseInt(lines.shift());
const divisionTime = [3600, 60, 1];
let diffTimesAccumulated = timeInSeconds;
let timeTotal = '';
divisionTime.forEach((valItem, index) => {
    const timeCalculated = parseInt(diffTimesAccumulated / valItem);
    diffTimesAccumulated -= (timeCalculated * valItem);
    timeTotal += timeCalculated + (index < divisionTime.length - 1 ? ':' : '');
});
console.log(timeTotal);