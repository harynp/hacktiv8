/*
HACKTIV8 Live code week 4

Nama:

=======================
Soal Array 1 - Pair Sum
=======================

[INSTRUKSI]
Diberikan 2 input: array dan targetSum
Output ada berapa pasangan nilai dalam array yang memiliki jumlah sama dengan
targetSum, sepasang nilai tidak boleh memiliki indeks yang sama

[CONTOH]
1)	[1 ,2, 3, 4, 5], targetSum = 8		-->		1
*/

function pairSum(arr, targetSum){
	
	// var newArr = arr.split(' ');
	// var tampung = '';
	// var count = 0;
	var temp = [];
	for(i=0;i<arr.length;i++){
		var count = 0;
		for(j=0;j<arr.length;j++){
			if(arr[i]+arr[j]===targetSum && i!==j){
				temp.push(arr[i])
				// console.log(arr[j]);
				count++;
			} 
		}
	}
	// console.log(temp);
	return temp.length/2;
	// count2=1
	// if(targetSum === 6){
	// 	count2 = count2-1;;
	// }
	// var hasil = count*count2;
	// return hasil;
}

console.log(pairSum([1, 2, 3, 4, 5], 8));	// 1
console.log(pairSum([3, 2, 1, 5, 2], 4));	// 2
console.log(pairSum([1, 1, 1], 2));			// 3
console.log(pairSum([1, 2, 3], 6));			// 0
