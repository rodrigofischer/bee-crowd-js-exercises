var input = require('fs').readFileSync('./test-files/ex-1037.txt', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const rangeValidation = ['[0,25]','(25,50]','(50,75]','(75,100]'];
const valToValidateRange = parseFloat(lines.shift());
let foundValueInRange = false;
rangeValidation.forEach(range => {
    const valsCompare = range.split(',');
    const firstPartExpression = valsCompare.shift();
    const lastPartExpression = valsCompare.shift();
    const lowerNumber = parseFloat(firstPartExpression.replace('(', '').replace('[', ''));
    const higherNumber = parseFloat(lastPartExpression.replace(']', ''));
    const includeOwnValueInCompare = (firstPartExpression.indexOf('[') === 0);
    if((includeOwnValueInCompare && (valToValidateRange >= lowerNumber && valToValidateRange <= higherNumber)) ||
        (valToValidateRange > lowerNumber && valToValidateRange <= higherNumber) ){
            console.log(`Intervalo ${range}`);
            foundValueInRange = true;
    }
});

if(!foundValueInRange){
    console.log('Fora de intervalo');
}