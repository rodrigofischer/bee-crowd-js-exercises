var input = require('fs').readFileSync('./test-files/ex-1073.txt', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const numberLimitTest = parseInt(lines.shift());
for(let i = 2; i <= numberLimitTest; i += 2){
    console.log(`${i}^2 = ${Math.pow(i, 2)}`);
}