/*
HACKTIV8 Live code week 4

Nama :

===============================
Soal 2 - Gambler's Slot Machine
================================

[DESKRIPSI]

Seorang pejudi memiliki kredit balance di Slot Machine sebanyak 5000 DOLLARS melakukan pemutaran Slot Machine. Slot machine adalah sebuah
permainan judi kasino yang akan menghasilkan tiga angka (range angka hanya 1-9).

Rules:
1. Apabila ia mendapatkan 3 angka dengan nilai yang berbeda, maka kredit balance akan dikurangi dari setiap angka dikalikan dengan 50.
    Contoh:
    a. hasil Slot Machine adalah 1, 2, dan 3. Ia kalah.
    kredit balance akan dikurangi sebesar (1 + 3 + 2) * 50 = 300
2. Apabila ia mendapat 2 angka yang sama, ia akan mendapat kredit sebesar total dari
setiap angka dikalikan dengan 100.
    Contoh:
    a.  hasil Slot Machine adalah 1, 1, dan 2.
        Ia akan mendapatkan penambahan kredit sebesar (1 + 1 + 2) * 100 = 400
    b.  hasil Slot Machine adalah 3, 5, dan 3.
        Ia akan mendapatkan penambahan kredit sebesar (3 + 5 + 3) * 100 = 1100
3. Apabila ia mendapat 3 angka yang sama, ia akan mendapat kredit sebesar total angka
tersebut dikalikan dengan 200.
    Contoh:
    a.  hasil Slot Machine adalah 1, 1, dan 1.
        Ia akan mendapatkan penambahan kredit sebesar (1 + 1 + 1) * 200 = 600
    b.  hasil Slot Machine adalah 3, 3, dan 3.
        Ia akan mendapatkan penambahan kredit sebesar (3 + 3 + 3) * 200 = 1800

[INSTRUKSI]

Tersedia sebuah function bernama evaluateSlotMachine yang menampung satu parameter,
berupa array yang berisikan tiga nilai hasil keluaran dari slot machine.

Buatlah sebuah function yang akan mengembalikan string berupa
- "YOU WIN X DOLLARS" apabila tidak kalah, dimana X merupakan kredit yang dimenangkan pejudi.
dan "YOUR TOTAL CREDIT BALANCE IS X DOLLAR" hasil penambahan dari kredit awal + kredit yang dimenangkan

- "YOU LOSE X DOLLAR" apabila kalah (mendapatkan tiga angka berbeda dari slot machine), dimana x merupakan
kredit yang dibayarkan pejudi.
dan YOUR TOTAL CREDIT BALANCE IS X DOLLAR" hasil pengurangan dari kredit awal - kredit yang dibayarkan"

*/


function evaluateSlotMachine(arr) {
  var creditBalance = 5000;
  var jumlahSama = 0;
    for(i=0;i<arr.length;i++){
        var banding = 0;
        for(j=0;j<arr.length;j++){   
            if(arr[i]===arr[j] && i!==j){
                banding++;
            }
            if(jumlahSama<=banding){
                jumlahSama+=banding;
            }
    }   
    } 


  // for (i = 0; i < Arr.length; i++) {
  //       var angkaBaru = Arr[i];
  //       var banding = 0;
  //       for (j = 0; j < Arr.length; j++){
  //           if (angkaBaru === Arr[j] && i!==j){
  //               banding ++;
  //           }
  //           if (angka <= banding){
  //               angka += banding;
  //           }
  //       }
  // }
    // console.log(jumlahSama);
    // var hasil = temp.length/2;
  // console.log(hasil);
    var total = 0;
    for(var k = 0; k < arr.length; k++) { 
    total+=arr[k];
    }
    // console.log(total);
     if (jumlahSama === 3){
    return ('YOU WIN '+(200*total)+' DOLLARS, YOUR TOTAL CREDIT BALANCE IS '+(200*total+creditBalance));
  }else if(jumlahSama === 2){
    return ('YOU WIN '+(100*total)+' DOLLARS, YOUR TOTAL CREDIT BALANCE IS '+(100*total+creditBalance));
  }else if(jumlahSama === 1){
    return ('YOU WIN '+(50*total)+' DOLLARS, YOUR TOTAL CREDIT BALANCE IS '+(50*total+creditBalance));
  }else {
    return ('YOU LOSE '+(50*total)+' DOLLARS, YOUR TOTAL CREDIT BALANCE IS '+(creditBalance-50*total));
  }
    return jumlahSama;
}
 // console.log((evaluateSlotMachine(numbers));

console.log(evaluateSlotMachine([1, 1, 2])); // "YOU WIN 400 DOLLARS, YOUR TOTAL CREDIT BALANCE IS 5400 DOLLAR"
console.log(evaluateSlotMachine([1, 1, 1])); // "YOU WIN 600 DOLLARS, YOUR TOTAL CREDIT BALANCE IS 5600 DOLLAR"
console.log(evaluateSlotMachine([5, 5, 5])); // "YOU WIN 3000 DOLLARS, YOUR TOTAL CREDIT BALANCE IS 8000 DOLLAR"
console.log(evaluateSlotMachine([6, 3, 3])); // "YOU WIN 1200 DOLLARS, YOUR TOTAL CREDIT BALANCE IS 6200 DOLLAR"
console.log(evaluateSlotMachine([1, 3, 2])); // "YOU LOSE 300 DOLLAR",  YOUR TOTAL CREDIT BALANCE IS 4700 DOLLAR"
