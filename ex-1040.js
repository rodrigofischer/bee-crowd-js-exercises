const { connect } = require('http2');

var input = require('fs').readFileSync('./test-files/ex-1040.txt', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const line1 = lines.shift();
const line2 = lines.shift();
const notas = line1.split(' ');
const pesoNotas = [2, 3, 4, 1];
const mediaPonderada = notas.map((item, index) => parseFloat(item) * parseFloat(pesoNotas[index])).reduce((acc, currentValue) => acc + currentValue, 0) / pesoNotas.reduce((acc, currValue) => acc + currValue, 0);

console.log(`Media: ${mediaPonderada.toFixed(1)}`);
if(mediaPonderada >= 7){
    console.log(`Aluno aprovado.`);
}
else if(mediaPonderada < 5){
    console.log(`Aluno reprovado.`);
}
else{
    console.log(`Aluno em exame.`);
    const notaExame = parseFloat(line2);
    console.log(`Nota do exame: ${notaExame.toFixed(1)}`);
    const mediaFinal = (notaExame + mediaPonderada) / 2;
    const validacaoMediaFinal = (mediaFinal >= 5) ? 'Aluno aprovado.' : 'Aluno reprovado.';
    console.log(`${validacaoMediaFinal}`);
    console.log(`Media final: ${mediaFinal.toFixed(1)}`);
}