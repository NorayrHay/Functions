'use strict'

function anagram(string, array) {
    let matches = [];
    for(let i = 0; i < array.length; i++) {
      if(array[i] != string) {
        let toMatch = string.split('').sort().join('');
        let matchHope = array[i].split('').sort().join('');
        if (toMatch === matchHope) {
          matches.push(array[i]);
        }
      }
    }
    return matches;
  }
  console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));