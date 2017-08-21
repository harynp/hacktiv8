/*
========================
Soal 4 : Number Grouping
========================

Name : ___

Disediakan sebuah function numberGrouping yang bertugas untuk menerima sebuah parameter berupa angka, 
dan mengembalikan susunan angka baru yang merupakan hasil pengelompokan berdasarkan 3 digit angka. 
Apabila jumlah angka yang belum dikelompokan ada 4 maka akan dibagi menjadi 2 buah 2 digit angka tidak 3 dan 1
Ex: Input: [ 1 , 2 , 3 , 4 , 5 , 6 ]
Output: 123-456
Input: [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 1]
Output: 123-456-78-91
Input: [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8]
Output: 123-456-78

*/

function numberGrouping(angka) {
  var len = angka.length;
  var tampung = []
  for (var i=0; i<len; i++) {
    if (i%3 === 0 && i !== 0) {
      tampung.push('-');
      tampung.push(angka[i]);
    } else {
      tampung.push(angka[i]);
    }
  }
  console.log(tampung)

  var len1 = tampung.length;
  if (tampung[len1-2] === '-') {
    var a = tampung[len1-2];
    var b = tampung[len1-3];
    tampung[len1-2] = b;
    tampung[len1-3] = a;
    console.log(a);
    console.log(b);
    console.log(tampung);
  }
  return tampung.join('');
}

console.log(numberGrouping([4,6,7,9,2,9])); //467-929
console.log(numberGrouping([6,3,1,8,4,7,9,3,5,8])); //631-847-93-58
console.log(numberGrouping([1,8,4,7,3,7,1])); //184-73-71
console.log(numberGrouping([1,8,4,7,3,7,1,4])); //184-737-14