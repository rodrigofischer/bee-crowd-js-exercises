var input = require('fs').readFileSync('./test-files/ex-1020.txt', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const ageInDays = parseInt(lines.shift());
const divisionInDays = [365, 30, 1];
const descriptionDivisionInDays = ['ano(s)', 'mes(es)', 'dia(s)'];
let diffTimesAccumulated = ageInDays;
let timeTotal = '';
divisionInDays.forEach((valItem, index) => {
    const timeCalculated = parseInt(diffTimesAccumulated / valItem);
    diffTimesAccumulated -= (timeCalculated * valItem);
    console.log(`${timeCalculated} ${descriptionDivisionInDays[index]}`);
});