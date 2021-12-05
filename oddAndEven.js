'use strict'

function oddAndEven(array){
    let result = [];
    let oddArr = [];
    let evenArr = [];
  
    for (let i = 0; i < array.length; i++){
      if (array[i] % 2 === 0)  evenArr.push(array[i]);
      else if(array[i] % 2 === 1)  oddArr.push(array[i]);
    }
    result.push(oddArr, evenArr);
    return result;
  }
  console.log(oddAndEven([45, 12, 3, 6, 17, 0]));