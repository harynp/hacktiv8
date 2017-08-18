/*
HACKTIV8 Online Live Coding Week 3 - Soal 2

Nama: ......(isi nama disini)

==================
Di Bawah Rata-rata
==================

[INSTRUKSI]
- Tersedia 1 input Array, jumlahkanlah setiap angka yang ada di dalam array tersebut.
- Setelah di jumlahkan hitunglah nilai rata-rata dari array tersebut
- Tampilkan angka-angka yang dibawah rata-rata dari
Output: array berisi semua angka dalam array input yang di bawah rata-rata

[CONTOH]
arr = [1, 2, 3, 4, 5]  --> [1, 2]
arr = [10, 2, 3, 2] = 17 / 4 = 4.25 maka angka yang dibawah rata-rata = [2, 3, 2]
*/

function belowAverage(arr){
var len = arr.length;
//jumlahin isi dari array
var total = arr.reduce(function(a,b){return a+b});
//panjang array
var mean = total / len;
//tampung variabel kosong		
var result = [];

for(i=0;i<len;i++){
if(arr[i]<mean){
	result.push(arr[i]);
	}
}
return (result);
}

console.log(belowAverage([1, 2, 3, 4, 5])); // [1, 2]
console.log(belowAverage([4, 2, 5, 1]));    // [2, 1]
console.log(belowAverage([5, 5, 5]));       // []
console.log(belowAverage([10, 2, 3, 2]));   // [2, 3, 2]
