var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

var i;
function dataHandling2(){
input[1] = 'Roman Alamsyah Elsharawy';
input[2] = 'Provinsi Bandar Lampung';
input.pop();
input.push('Pria');
input.push('SMA Internasional Metro');

var bulan = input[3];
var convertBulan = bulan.split("/").splice(1,1).join();
var convertBulan2 = bulan.split("/").map(parseFloat).sort();
var convertBulan3 = bulan.split("/").sort(function(a,b) { return b-a}).join('-');

var nama = input[1];
var namaSingkat = nama.split(" ").slice(0,2).join(" ");

//hasil  
//1. 
console.log(input);
//2.  
switch (convertBulan){
  case '05' : 
   console.log ('Mei');
  break;
 }
//3. 
console.log(convertBulan2);
//4.
console.log(convertBulan3);
//5.
console.log(namaSingkat);
}

dataHandling2();

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * [1989, 21, 5]
 * 1989-21-05
 * Roman Alamsyah
 */