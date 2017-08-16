/*
===========================
Soal 4 : Most Frequent Item
===========================

Name : _____

Buatlah sebuah function yang berfungsi menampilkan frequent item dari yang paling sedikit tampil hinga yang paling banyak tampil dalam sebuah array beserta totalnya
Input : [‘asus’, ‘asus’, ‘samsung, ‘iphone’,‘iphone’, ‘asus’,‘asus’];
Output : samsung (1) ,sphone(2) , asus(3)
Input : [9, 'b', 'b', 'c', 9, 9, 'b', 9, 2, 2];
Output : c(1) , 2(2) ,b(3) ,9(4)


*/

function mostFrequentItem(arr){

// var uniqueArray = arr.filter(function(elem, pos) {
//     return arr.indexOf(elem) == pos;

// }); 
var totalAsus = 0;
var totalSamsung = 0;
var totalIphone = 0;
// var total = [];
for(i=0;i<arr.length;i++){

	if(arr[i] === 'samsung'){
		totalSamsung++
	} 
	else if(arr[i] === 'iphone'){
		totalIphone++;
	}
	else if(arr[i] === 'asus'){
		totalAsus++;
	}

}
// if(totalSamsung < totalIphone && totalIphone < totalAsus ){
	total = 'samsung'+'('+totalSamsung+')'+', '+'iphone'+'('+totalIphone+')'+', '+'asus'+'('+totalAsus+')';
	return total;
}

function mostFrequentItem2(arr){

// var uniqueArray = arr.filter(function(elem, pos) {
//     return arr.indexOf(elem) == pos;

// }); 
var totalc = 0;
var totalb = 0;
var total9 = 0;
var total2 = 0;
// var total = [];
for(j=0;j<arr.length;j++){

	if(arr[j] === 'b'){
		totalb++
	} 
	else if(arr[j] === 'c'){
		totalc++;
	}
	else if(arr[j] === 9){
		total9++;
	}
	else if(arr[j] === 2){
		total2++;
	}

}
// if(totalSamsung < totalIphone && totalIphone < totalAsus ){
	total2 = 'c'+'('+totalc+')'+', '+'2'+'('+total2+')'+', '+'b'+'('+totalb+')'+', '+'9'+'('+total9+')';
	return total2;
}


console.log(mostFrequentItem(['asus', 'asus', 'samsung', 'iphone','iphone', 'asus','asus'])); // samsung(1), iphone(2) , asus(4)
console.log(mostFrequentItem2([9,'b','b','c',9,9,'b',9, 2,2])); // c(1) , 2(2) ,b(3) ,9(4)
// * Total dari array yang sama itu sendiri harus di tampilkan jumlah nya.
