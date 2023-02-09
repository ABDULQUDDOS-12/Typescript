//console.log('This is new text')

function add( n1:number,n2:number){
    if(typeof n1 !== 'number' || typeof n2 !== 'number'){
        throw new Error ('Incorrect input')
    }
    else{
        return n1+n2
    }
}
const number1 = '5'
const number2 = 10.4
const result = add(number1,number2)
console.log(result)