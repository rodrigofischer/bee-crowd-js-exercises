var input = require('fs').readFileSync('./test-files/ex-1021.txt', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const valToEvaluate = parseFloat(lines.shift());
const typeMoney = ['NOTAS', 'MOEDAS'];
const typeDescriptionMoney = ['nota(s)', 'moeda(s)'];
const billsCoins = [[100.0, 50.0, 20.0, 10.0, 5.0, 2.0], [1.0, 0.50, 0.25, 0.10, 0.05, 0.01]];
let valTmpDiffByAmountBills = valToEvaluate * 100;
typeMoney.forEach((value, index) => {
    console.log(`${value}:`);
    billsCoins[index].forEach(item => {
        const amountBillsCoins = Math.floor(valTmpDiffByAmountBills / (item * 100));
        const valByAmounts = (amountBillsCoins * item);
        valTmpDiffByAmountBills %= (item * 100);
        console.log(`${amountBillsCoins} ${typeDescriptionMoney[index]} de R$ ${item.toFixed(2)}`);
    });
});
