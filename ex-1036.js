var input = require('fs').readFileSync('./test-files/ex-1036.txt', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const line1 = lines.shift().split(' ');
const A = parseFloat(line1.shift());
const B = parseFloat(line1.shift());
const C = parseFloat(line1.shift());
const delta = Math.pow(B, 2) - 4 * A * C;

const root1 = ((B * -1) + Math.sqrt(delta)) / (2 * A);
const root2 = ((B * -1) - Math.sqrt(delta)) / (2 * A);
if(Number.isNaN(root1) || root1 == Infinity || Number.isNaN(root2) == Math.Nan || root2 == Infinity){
    console.log('Impossivel calcular');
}
else{
    console.log(`R1 = ${root1.toFixed(5)}`);
    console.log(`R2 = ${root2.toFixed(5)}`);
}