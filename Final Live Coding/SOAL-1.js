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

var Oh = arr.indexOf("o");
// console.log(Oh);
var tampung = [];
for(i=0;i<arr.length;i++){
	var reset = 0;
	if(arr[i]==='x'){
		tampung.push(Math.abs(i-Oh));

	}
		reset++;
}


	var hasil =  tampung.sort().shift();

	if(typeof(hasil) === "undefined"){
        return "0";
    }   

    return hasil;
}


console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2
