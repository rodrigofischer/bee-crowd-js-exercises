var input = require('fs').readFileSync('./test-files/ex-1018.txt', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const valToEvaluate = parseInt(lines.shift());
const bills = [100, 50, 20, 10, 5, 2, 1];
console.log(`${valToEvaluate}`);
let valTmpDiffByAmountBills = valToEvaluate;
bills.forEach((item, value) => {
    const amountBills = parseInt(valTmpDiffByAmountBills / item);
    const valByAmounts = (amountBills * item);
    valTmpDiffByAmountBills -= valByAmounts;
    console.log(`${amountBills} nota(s) de R$ ${item},00`);
});