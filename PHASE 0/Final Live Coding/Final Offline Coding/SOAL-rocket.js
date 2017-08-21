/*
HACKTIV8 Final Live Coding Rocket

=======================
British National Crisis
=======================

Name : __________

Tiga narapidana kabur dari penjara London. Tiga narapidana ini memiliki nomor sel 1, 5, dan 9.
Tiga narapidana ini bergabung dan menyatukan kekuatan dan pikiran untuk mengacau di Inggris dengan melakukan pengeboman di tempat-tempat yang berbeda.
Setiap kali mereka mau melakukan pengeboman, mereka mengirimkan sebuah kode aneh ke Scotland Yard, markas kepolisian Inggris.
Seorang detektif pemula tengah mencoba menyelesaikan krisis tersebut.
Ternyata, kode tersebut merupakan sebuah pola. Kode tersebut merupakan angka 2,3,4,6,7, atau 8  yang ditulis dengan kata dalam bahasa Inggris, dan diacak.
Seluruh karakter di kode tersebut apabila disusun dengan baik, akan menghasilkan beberapa kata berupa angka dalam bahasa Inggris.
District yang akan diserang selanjutnya adalah total dari angka yang ditemukan di kode tersebut! Karena tiga narapidana ini benci dengan sel mereka,
 mereka tidak memasukkan angka 1, 5, dan 9.  Berikut ini adalah bahasa Inggris untuk angka yang digunakan: TWO -> 2 THREE -> 3 FOUR -> 4
SIX -> 6 SEVEN -> 7 EIGHT -> 8

 Contoh Kode 1: WTWTHROETEO.
Apabila diacak mendapatkan kombinasi TWO TWO THREE => 2, 2, dan 3. 2 + 2 + 3 = 7, maka targetnya District 7!
Contoh Kode 2: HSEVTEEING.
Apabila diacak mendapatkan kombinasi SEVEN EIGHT => 7 dan 8. 7 + 8 = 15, maka targetnya District 15! 
Contoh Kode 3: FNEXSIVUSEOR. Apabila diacak mendapatkan kombinasi FOUR SIX SEVEN => 4, 6, dan 7. 4 + 6 + 7 = 17, maka targetnya District 17!
 Contoh Kode 4: WTO. Apabila diacak mendapatkan kombinasi TWO => 2. Maka targetnya District 2! 

HINT: Urutan angka mana yang keluar lebih dulu tidak penting! Yang penting adalah kita mendapatkan district berapa yang menjadi target!


*/

function nextTargetArea(code) {
  // Code Hanya Disini!
  // var codesplit = code.split('').sort().filter(function(item, pos, self) {
  //   return self.indexOf(item) == pos;
  // });
  if (code.length < 15) {
    var codesplit = code.split('').sort();
    // console.log(codesplit);
    var words = ['TWO', 'THREE', 'FOUR', 'SIX', 'SEVEN', 'EIGHT'];
    var tempArr = [];
    for (var i=0; i<codesplit.length; i++) {
      if (codesplit[i] === 'W') {
        tempArr.push(words[0]);
      } else if(codesplit[i] === 'R' && codesplit.includes('T')) {
        tempArr.push(words[1]);
      } else if(codesplit[i] === 'F') {
        tempArr.push(words[2]);
      } else if(codesplit[i] === 'X') {
        tempArr.push(words[3]);
      } else if(codesplit[i] === 'V') {
        tempArr.push(words[4]);
      } else if(codesplit[i] === 'G') {
        tempArr.push(words[5]);
      }
    }

    // console.log(tempArr);
    var tempNum = [];
    for (var j=0; j<tempArr.length; j++) {
      if (tempArr[j] === 'TWO') {
        tempNum.push(2);
      } else if (tempArr[j] === 'THREE') {
        tempNum.push(3);
      } else if (tempArr[j] === 'FOUR') {
        tempNum.push(4);
      } else if (tempArr[j] === 'SIX') {
        tempNum.push(6);
      } else if (tempArr[j] === 'SEVEN') {
        tempNum.push(7);
      } else if (tempArr[j] === 'EIGHT') {
        tempNum.push(8);
      } else {

      }
    }
    // console.log(tempNum);

    var total = tempNum.reduce(function(a,b){return a+b});
    // var total = tempArr.reduce(function(a,b){return a+b});
    return 'District ' + total + ' is the next target!';
  }


if (code.length > 15) {
  var codesplit = code.split('').sort().filter(function(item, pos, self) {
    return self.indexOf(item) == pos;
  });
  // console.log(codesplit);
  var words = ['TWO', 'THREE', 'FOUR', 'SIX', 'SEVEN', 'EIGHT'];
  var tempArr = [];
  for (var i=0; i<codesplit.length; i++) {
    if (codesplit[i] === 'W') {
      tempArr.push(words[0]);
    } else if(codesplit[i] === 'R' && codesplit.includes('T')) {
      tempArr.push(words[1]);
    } else if(codesplit[i] === 'F') {
      tempArr.push(words[2]);
    } else if(codesplit[i] === 'X') {
      tempArr.push(words[3]);
    } else if(codesplit[i] === 'V') {
      tempArr.push(words[4]);
    } else if(codesplit[i] === 'G') {
      tempArr.push(words[5]);
    }
  }

  // console.log(tempArr);
  var tempNum = [];
  for (var j=0; j<tempArr.length; j++) {
    if (tempArr[j] === 'TWO') {
      tempNum.push(2);
    } else if (tempArr[j] === 'THREE') {
      tempNum.push(3);
    } else if (tempArr[j] === 'FOUR') {
      tempNum.push(4);
    } else if (tempArr[j] === 'SIX') {
      tempNum.push(6);
    } else if (tempArr[j] === 'SEVEN') {
      tempNum.push(7);
    } else if (tempArr[j] === 'EIGHT') {
      tempNum.push(8);
    } else {

    }
  }
  // console.log(tempNum);

  var total = tempNum.reduce(function(a,b){return a+b});
  // var total = tempArr.reduce(function(a,b){return a+b});
  return 'District ' + total + ' is the next target!';
}
}

console.log(nextTargetArea('WTO')); // "District 2 is the next target!"
console.log(nextTargetArea('WTWTHROETEO')); // "District 7 is the next target!"
console.log(nextTargetArea('HSEVTEEING')); // "District 15 is the next target!"
console.log(nextTargetArea('FNEXSIVUSEOR')); // "District 17 is the next target!"
console.log(nextTargetArea('EFNEXRSIVHUSEORTE')); // "District 20 is the next target!"
