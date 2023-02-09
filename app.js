//console.log('This is new text')
function add(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Incorrect input');
    }
    else {
        return n1 + n2;
    }
}
var number1 = '5';
var number2 = 10.4;
var result = add(number1, number2);
console.log(result);
