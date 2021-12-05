'use strict'

function findSum(str)  {
    let temp = "0";
    let sum = 0;
    
    for (let i = 0; i < str.length; i++) {
      let match = str[i];
      
      if (!isNaN(String(match)))  temp += match;  
      else {
        sum += parseInt(temp);
        temp = "0";
      }
    }   
  return sum + parseInt(temp);
  }
  console.log(findSum('FwrtY45KHL120mn10P'));