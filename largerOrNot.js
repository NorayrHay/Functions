'use strict'

function largerOrNot(arr, num){
    let largestArr = [];
    for(let i = 0; i < arr.length; i++){
         if(arr[i] > num){
            largestArr.push(arr[i]); 
        }
    }
    return largestArr;
}
console.log(largerOrNot([10, 25, 16, -5, 30, 15, 24], 25));