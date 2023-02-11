function Addition(n1: number, n2: number,result:string,bool1:boolean) {
    const result1 = n1 + n2;
    
    // if (typeof n1 !== 'number' && typeof n2 !== 'number' ) {
    if(bool1) 
    {
      return (`${result} ${result1}`);
    } 
    else {
      return ('number is requirred!')
    }
  }
  
  const number1 = 5;
  const number2 = 10.4;
  const resultPhrase = "Result is: ";
  const bool = true
  const result = Addition(number1, number2,resultPhrase,bool);
  console.log(result);