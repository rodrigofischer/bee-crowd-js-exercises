var input = require('fs').readFileSync('./test-files/ex-13.txt', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const line1 = lines[0].split(' ');
const A = parseFloat(line1.shift());
const B = parseFloat(line1.shift());
const C = parseFloat(line1.shift());
const pi = 3.14159;
const areaTriangulo = (A * C) / 2;
const areaCirculo = pi * Math.pow(C, 2);
const areaTrapezio = ((A + B) * C) / 2;
const areaQuadrado = Math.pow(B, 2);
const areaRetangulo = (A * B);

console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}`);
console.log(`CIRCULO: ${areaCirculo.toFixed(3)}`);
console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`);
console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`);
console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`);