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
    var ambilCode =  code.split('');			//split kata
    var temp = [];								//tampung kosong
    for (i = 0; i < ambilCode.length; i++) {	//perulangan
        switch (ambilCode[i]) {					//jika dikalimat ada teridikasi huruf dari perulangan
            case 'W' : temp.push(2); break;		// W maka masukin 2 ditampung
            case 'R' && case 'H' : temp.push(3); break;	// R & H masukin 3
            case 'U' : temp.push(4); break;		//U masukin 4
            case 'X' : temp.push(6); break;		//X masukin 6
            case 'V' : temp.push(7); break;		//V masukin 7
            case 'G' : temp.push(8); break;		//G masukin 8
        }
    }
    var total = temp.reduce((a, b) =>{return a+b;});	//fungsi untuk menjumlahkan huruf yang sudah diganti dengan angka dan di masukin dalam temp
    return 'District '+total+' is the next target !';
    return temp;
}

console.log(nextTargetArea('WTO')); // "District 2 is the next target!"
console.log(nextTargetArea('WTWTHROETEO')); // "District 7 is the next target!"
console.log(nextTargetArea('HSEVTEEING')); // "District 15 is the next target!"
console.log(nextTargetArea('FNEXSIVUSEOR')); // "District 17 is the next target!"
console.log(nextTargetArea('EFNEXRSIVHUSEORTE')); // "District 20 is the next target!"


// TWO THREE FOUR SIX SEVEN EIGHT

// W   H   U    X V G