/*
============================
Soal 1 : Target Terdekat
============================

Name : __________

Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter.
Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat.
Contoh, jika arr adalah ['x', '', 'o', '', '', 'x'],
maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.Ex:
Input : ['', '', 'o', '', '', 'x', '', 'x'] = 3
Input : ['', '', 'o', ''] = 0

*/


function targetTerdekat(arr) {
var Ex =0;
// var Oh =0;

var temp = [];
for (i = 0; i < arr.length; i++){
    if (arr[i] === 'x' || arr[i] === 'o'){
        temp.push(arr[i]);
    } else {
    	Ex++;
    }
}
return Ex;
}


console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2
