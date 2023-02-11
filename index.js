function Addition(n1, n2, result, bool1) {
    var result1 = n1 + n2;
    // if (typeof n1 !== 'number' && typeof n2 !== 'number' ) {
    if (bool1) {
        return ("".concat(result, " ").concat(result1));
    }
    else {
        return ('number is requirred!');
    }
}
var number1 = 5;
var number2 = 10.4;
var resultPhrase = "Result is: ";
var bool = true;
var result = Addition(number1, number2, resultPhrase, bool);
console.log(result);
