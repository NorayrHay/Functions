'use strict'

function sameStr(sentence,word){
    let wantedSentence = ""
    let splitEd = sentence.split(word)
    for(let i = 0; i < splitEd.length; i++){
        wantedSentence += splitEd[i]; 
    }
    return wantedSentence;
}
console.log(sameStr('Yes, London. You know: fish, chips, cup of tea, bad food, worse weather', "o"));