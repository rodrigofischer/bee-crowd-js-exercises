var input = require('fs').readFileSync('./test-files/ex-1038.txt', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const priceTable = [
    { code: 1, description: 'Cachorro Quente', price: 4.0 },
    { code: 2, description: 'X-Salada', price: 4.5 },
    { code: 3, description: 'X-Bacon', price: 5.0 },
    { code: 4, description: 'Torrada Simples', price: 2.0 },
    { code: 5, description: 'Refrigerante', price: 1.5 }
];
const refData = lines.shift().split(' ');
const refCode = refData.shift();
const refAmount = refData.shift();

const itemFiltered = priceTable.find(codeFilter => codeFilter.code == refCode);
const totalPrice = parseFloat(itemFiltered.price) * refAmount;
console.log(`Total: R$ ${totalPrice.toFixed(2)}`);