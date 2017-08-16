/*
removeBannedWords => 1 parameter berupa string
contoh:
"geger! ternyata donald brump adalah kucing! dia dan mentrinya bebek sekali."
hasil:
"geger! ternyata donald brump adalah ******! dia dan mentrinya ***** sekali."
*/


// function removeBannedWords1(sentence) {
//   var words = sentence.split(' ');
//   var passedCensorship = [];
//   for(var i = 0; i < words.length; i++) {
//     var word = words[i];
//     if(word === 'bebek' || word === 'kucing') {
//       passedCensorship.push('******');
//     } else {
//       passedCensorship.push(word);
//     }
//   }

//   return passedCensorship.join(' ');
// }

// console.log(removeBannedWords1('geger donal bebek dan miki kucing'));

// function removeBannedWords2(sentence) {
//   var words = sentence.split(' ');
//   var passedCensorship = [];
//   for(var i = 0; i < words.length; i++) {
//     var word = words[i];

//     if(word === 'bebek' || word === 'kucing') {
//       var bannedWordLength = word.length;
//       var banned = '';

//       for(var j = 0; j < bannedWordLength; j++) {
//         banned += '*';
//       }

//       passedCensorship.push(banned);

//     } else {
//       passedCensorship.push(word);
//     }
//   }

//   return passedCensorship.join(' ');
// }

// console.log('RELEASE 2 ====');
// console.log(removeBannedWords2('geger donal bebek dan miki kucing'));




function removeBannedWords3(sentence, listBan) {
  var words = sentence.split(' ');

  var passedCensorship = [];
  for(var i = 0; i < words.length; i++) {
    var word = words[i];

    // looping untuk listBan
    var sudahPush = false;

    for(var j = 0; j < listBan.length; j++) {
      if(word ===  listBan[j])  {
        var bannedWordLength = word.length;
        var banned = '';

        for(var k = 0; k < bannedWordLength; k++) {
          banned += '*';
        }
        passedCensorship.push(banned);
      } else {
        if(!sudahPush) {
          passedCensorship.push(word);
          sudahPush = true;
        }
      }
    }
  }

  return passedCensorship.join(' ');
}

console.log('RELEASE 3 ====');
var mySentence = 'Nomor HP hary 082112831235';
var listBannedWords = ['082112831235'];
console.log(removeBannedWords3(mySentence, listBannedWords));
