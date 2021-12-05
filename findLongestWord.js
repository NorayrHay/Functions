"use strict"

function findLongestWord(str) {
    var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
    return longestWord[0];
  }
  findLongestWord("Which would be worse - to live as a monster, or to die as a good man?");