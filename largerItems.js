'use strict'

function largerItems(array, num){
    let result = [];
    let count = 0;
  
    for (let i = 0; i < array.length; i++){
      if(array[i] > num){
      result.push(array[i]);
      count++;
      }
    }
    if(count === 0)  result.push('Such values do not exist.'); 
    return result;
  }
  console.log(largerItems([10, 25, 16, -5, 30, 15, 24], 30));