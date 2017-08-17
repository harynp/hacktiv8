/*
============================
Soal 6 : Average Length Word
============================


Name : ______

Dibawah ini tersedia sebuah function yang berfungsi untuk menemukan satu atau beberapa ‘kata’ dalam satu kalimat yang memiliki panjang string
yang bernilai sama dengan rata-rata panjang string dalam kumpulan kata dari Kalimat tersebut. 
EX : (‘Do you want to become a great coder ?’)  => [ 2 , 3 , 4 , 2 , 6 , 1 , 5 , 5 , 1]
Dari Angka- angka ini jika dicari nilai rata-rata nya sama dengan 3.22
3.22 dikembalikan menjadi nilai 3 , carilah kata yang memiliki panjang string / character sebanyak hasil nilai rata-rata tersebut. Dan masukan kedalam array of string baru.
HINT : Gunakan  built-in function javascript untuk mengembalikan angka integer dari pembulatan suatu angka. Bila angka dibelakang koma >= .5 
maka akan dibulatkan keatas dan sebaliknya.
INPUT : ‘Do you want to become a great coder ?’
OUTPUT : [‘you’]
INPUT : ‘’ You dont know what you have until you lose it!
OUTPUT : [ 'dont','know','what','have','lose']

*/

function averageLengthWord(words) {

var splitKata = words.split(' ');
var result = [];

    
    for(i=0;i<splitKata.length;i++){
        result.push(splitKata[i].length);
    }

    var rata2 = result.reduce((a, b) => {
    return Math.round((a + b)/2); });

    var final = [];
    for(j=0;j<splitKata.length;j++){
        if(splitKata[j].length===rata2){
            final.push(splitKata[j]);
        } 
    }
  return final;
}

console.log(averageLengthWord('Do you want to become a great coder ?')); //[‘you’]
console.log(averageLengthWord('You dont know what you have until you lose it!')); //[ 'dont','know','what','have','lose']
