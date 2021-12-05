'use strict'

function arraySum(i) {
    sum = 0;
    // let arr = [];
    for (let a = 0; a < i.length; a++) {
      if (typeof i[a] == 'number') {
        sum += i[a];
      } else if (i[a] instanceof Array) {
        sum += arraySum(i[a]);
      }
    }
    return sum;
  }
  console.log(arraySum([[5, 3, 7]]));

  // I did the task not clearly...