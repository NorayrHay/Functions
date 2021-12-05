'use strict'

function lengthOfLongestSubstring(check) {
    let letters = check.split("");
    let max = 0;
    var result = [];
    for (let i = 0; i < letters.length; i++) {
        let start = i
        if (result.indexOf(letters[i]) === -1) {
            result.push(letters[i])
        } else {
            i = i - 1
            result = []
        }
        if (max === 0 || max < result.length) {
            max = result;
        }
    }
    return max
}
console.log(lengthOfLongestSubstring('parting your soup is not a miracle, bruce.'));