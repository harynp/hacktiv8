/*
letterChanges 1 parameter string
"abc" => "bcd"

"ayam" => "bzbn"
*/

function LetterChanges(str) { 

var converted = str.replace(/[a-z]/gi,function(char){
    return (char === 'z' || char === 'Z') ? "A" : String.fromCharCode(char.charCodeAt() +1)});
    

var capitalized = converted.replace(/a|e|i|o|u/gi, function(vowel){
    return vowel.toUpperCase();})
    
return capitalized;
         
}
   
// keep this function call here

console.log(letterChanges('zbc')); // Acd
console.log(letterChanges('cbc')); // dcd
console.log(letterChanges('dodol')); // EpEpm
