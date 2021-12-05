'use strict'

function addItems(str, arr){
    let string = str.split('_');
    let res = '';
    // for(let j = 0; j < arr.length; j++){
    //   string = arr[j];
    // }
    for(let i = 0; i < string.length; i++){
      if(string[i] === '') {
        string[i] = arr[i];
        res = string
      }
    }
    return res;
  }
  console.log(addItems('_, we have a _.', ['Houston', 'problem']));

  // task is not clearly