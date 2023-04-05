var input = require('fs').readFileSync('./test-files/ex-10.txt', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const nomeFuncionario = lines.shift();
const salarioFixo = parseFloat(lines.shift());
const totalVendido = parseFloat(lines.shift());
const percComissao = 0.15;
const comissao = totalVendido * percComissao;
const salarioFinal = salarioFixo + (comissao);
console.log(`TOTAL = R$ ${salarioFinal.toFixed(2)}`);