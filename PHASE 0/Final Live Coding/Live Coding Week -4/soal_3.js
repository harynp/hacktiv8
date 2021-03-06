/*
HACKTIV8 Live code week 4

Nama:

===============================
Soal Array 3 - Remove Duplicate
===============================

[INSTRUKSI]
Tersedia satu input array yang memiliki angka yang duplikat, Tugas kamu menghapus angka yang duplikat tersebut.

Output: array yang telah di-sorted, semua duplikat dihapus

[CONTOH]

1) [1, 4, 3, 1, 2, 2, 4]	-->	[1, 2, 3, 4]

*/

function hapusDuplikat(arr) {
	var tmp = [];
    for(var i = 0; i < arr.length; i++){
        if(tmp.indexOf(arr[i]) == -1){
        tmp.push(arr[i]);
        }
    }
    return tmp.sort();
}

console.log(hapusDuplikat([1, 4, 3, 1, 2, 2, 4]));	// [1, 2, 3, 4]
console.log(hapusDuplikat([2, 2, 2, 2]));			// [2]
console.log(hapusDuplikat([1, 2, 3]));				// [1, 2, 3]
console.log(hapusDuplikat([6, 5, 3, 2]));			// [2, 3, 5, 6]

