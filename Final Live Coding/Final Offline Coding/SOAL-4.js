/*
========================
Soal 4 : Number Grouping
========================

Name : ___

Disediakan sebuah function numberGrouping yang bertugas untuk menerima sebuah parameter berupa angka, 
dan mengembalikan susunan angka baru yang merupakan hasil pengelompokan berdasarkan 3 digit angka. 
Apabila jumlah angka yang belum dikelompokan ada 4 maka akan dibagi menjadi 2 buah 2 digit angka tidak 3 dan 1

Ex: Input: [ 1 , 2 , 3 , 4 , 5 , 6 ]
Output: 123-456
Input: [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 1]
Output: 123-456-78-91
Input: [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8]
Output: 123-456-78

*/

function numberGrouping(angka) {
return angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "-");
}


// return angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// var temp = [];
// for(i=0;i<angka.length;i++){
	
// 	if(angka[i].length%3==0){
// 		temp.push('-');
// 	} else{
// 		temp.push(angka[i]);
// }


console.log(numberGrouping([4,6,7,9,2,9])); //467-929
console.log(numberGrouping([6,3,1,8,4,7,9,3,5,8])); //631-847-93-58
console.log(numberGrouping([1,8,4,7,3,7,1])); //184-73-71
