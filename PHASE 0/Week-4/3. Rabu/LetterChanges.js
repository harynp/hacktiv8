



function letterChanges(str) {
  var alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a'];
  var result = '';
  for(i=0;i<str.length;i++){
    var alpaIndex = alphabets.indexOf(str[i]);
    var letter = alphabets[alpaIndex + 1];
    }
    result += letter;
  }
   return newStr.replace(/[aieuo]/g, function(letter) {return letter.toUpperCase()});
}


console.log(letterChanges('zbc')); // Acd
console.log(letterChanges('cbc')); // dcd
console.log(letterChanges('dodol')); // EpEpm
