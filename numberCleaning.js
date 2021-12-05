'use strict'

function numberCleaning(number){
    let numStr = '' + number;
    let ellCount = 0;
    let plusCount = 0;
    let res = '';
  
    for (let i = 0; i < numStr.length; i++){
      ellCount++;
  
      if(ellCount > 10 || ellCount < 10)   res = 'it is a bad number';
      else if(ellCount === 10)   res = 'it is good';
      else if(numStr[0] === '+' && typeof(numStr[i + 1]) === 'number')   res = numStr.replace('+', ''); 
      if(numStr[i] === '+') {
        plusCount++
      }
      
    }
    console.log(plusCount)
    return plusCount;
    // return res;
  }
  console.log(numberCleaning(+1232123134));