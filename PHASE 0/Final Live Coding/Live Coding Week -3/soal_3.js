/*
HACKTIV8 Online Live Coding Week 3 - Soal 3

Nama:...(isi nama disini)

========================
Digit-digit dalam String
========================

[DESKRIPSI]
Kamu diminta memproses sebuah string dengan cara berikut:
Di dalam string ada bilangan-bilangan satu digit yang bisa positif atau
bisa negatif. Bilangan positif tentunya memiliki simbol '+' sedangkan
bilangan negatif memiliki simbol '-'. Carilah jumlah dari semua bilangan!

[INSTRUKSI]
Tersedia sebuah string sebagai input.
0utput hasil penjumlahan semua digit dalam string tersebut

[CONTOH]
'+5-3+7+9+9-2'		--> 25

[HINT]
kamu perlu merubah string menjadi interger

*/

function jumlahkan(str) {
angkaMinus = '';
angkaPlus = '';

for(var i=0;i<str.length-1;i++){
	if(str[i]==='+'){
		angkaPlus+=str[i+1];
	} else if(str[i]==='-'){
		angkaMinus+=str[i+1];
	}
}

if(angkaMinus !==''){
	totalMinus = (angkaMinus.split('').map(Number).reduce(function(a,b){return a+b})) * (-1);
	} else {
	totalMinus = 0;
}

if(angkaPlus !==''){
	totalPlus = (angkaPlus.split('').map(Number).reduce(function(a,b){return a+b})) * (1);
} else {
	totalPlus = 0;
}
return (totalMinus+totalPlus);
}


console.log(jumlahkan('+5-3+5+5-1'));        // 11
console.log(jumlahkan('+4+3+7+1'));            // 15
console.log(jumlahkan('-1-1-1-1-1-2'));		// -7
console.log(jumlahkan('+5-3+5+5-1'));		// 11
console.log(jumlahkan('+4+3+7+1'));			// 15
