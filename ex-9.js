var input = require('fs').readFileSync('./test-files/ex-9.txt', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const numFuncionario = parseInt(lines.shift());
const qtdeHoras = parseInt(lines.shift());
const valorHora = parseFloat(lines.shift());
const salario = qtdeHoras * valorHora;
console.log(`NUMBER = ${numFuncionario}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);