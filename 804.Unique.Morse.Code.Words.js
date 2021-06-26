//804.Unique.Morse.Code.Words
const mos =[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
const words = ["gin", "zen", "gig", "msg"];
let getIndex = char => char.charCodeAt(0)-'a'.charCodeAt(0)
var uniqueMorseRepresentations = function(words) {
    const encodedList=words.map(word=>
    	word.split('').map(char=>mos[getIndex(char)]).join(''))
    return new Set([...encodedList]).size
};

console.log(uniqueMorseRepresentations(words))