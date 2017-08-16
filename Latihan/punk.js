/*
letterChanges 1 parameter string
"abc" => "bcd"

"ayam" => "bzbn"
*/

function letterChanges(str) {
  var alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a'];
  var angka = ['0','1','2','3','4','5','6','7','8','9'];
  var result = '';



  for(var i = 0; i < str.length; i++) {
     for(var j = 0; j < angka.length; j++) {
    var alpha = str[i]; // a
    var alphaIndex = alphabets.indexOf(alpha);
    var letter = alphabets[alphaIndex + 1];
    if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'u' || letter === 'o') {
      letter = letter.toUpperCase();
    } else if(alpha === angka[j]){
        result += angka;
    }
    // result += letter;
  }
}
 return result;
}
console.log(letterChanges('zbc')); // Acd
console.log(letterChanges('cbc')); // dcd
console.log(letterChanges('123dodol')); // 123EpEpm
