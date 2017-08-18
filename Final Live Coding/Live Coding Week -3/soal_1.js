/*
HACKTIV8 Online Live Coding Week 3 - Soal 1

Nama: ......(isi nama disini)

======================
War Against The Undead
======================

Kamu adalah seorang ksatria yang dituntut untuk maju berperang menghadapi Pasukan yang tidak akan mati,
Hanya ada satu cara untuk mengalahkan pasukan ini , yaitu apabila kamu menancapkan pedang kamu tepat di tengah-tengah jantung pasukan ini!
Serangan kamu pas di jantung musuh apabila : angka 'Pertama' = Genap dan Angka 'Terakhir' = Ganjil .

[PERINTAH]
Buatlah sebuah fungsi serangan.
fungsi serangan akan menerima parameter berupa angka.
dan Jika angka 'Pertama' = Genap dan Angka 'Terakhir' = Ganjil, maka akan tampil pesan : One Man Down!
dan Jika Hasil angka 'Pertama' = Genap dan Angka 'Terahkir' = Genap , maka akan tampil Pesan : "Try Again to Attack!"
dan Jika Hasil angka 'Pertama' = Ganjil dan Angka 'Terahkir' = Ganjil , maka akan tampil Pesan : "Try Again to Attack!"
dan Jika Hasil angka 'Pertama' = Ganjil dan Angka 'Terahkir' = Genap , maka akan tampil Pesan : "You are Dead!"

[CONTOH]
serangan(21) // One Man Down!
serangan(11) // Try Again to Attack
serangan(19) // Try Again to Attack
serangan(28) // Try Again to Attack
serangan(18) // You are Dead

*/
function serangan(num){
result = [];	
var newNumber = num.toString(); //['2'],['1']
var panjang = newNumber.length;

for(var i=0;i<panjang;i++){
	result.push(newNumber[i]);
}

if(result[0]%2==0 && result[1]%2==1){
	return 'One Man Down!';
} else if(result[0]%2==0 && result[1]%2==0){
	return 'Try Again to Attack';
} else if(result[0]%2==1 && result[1]%2==1){
	return 'Try Again to Attack';
} else {
	return 'You are Dead'
}
// if(pecah[0]==genap){
// console.log('One Man Down!');
// }
return result;

}
console.log(serangan(21));
console.log(serangan(11));
console.log(serangan(19));
console.log(serangan(28));
console.log(serangan(18));