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
var final = [];
var temp = [];
	for(i=0;i<arr.length;i++){
		if(temp.indexOf(arr[i]) === -1){
			temp.push(arr[i])
		}
	}
	var hasil =  temp.sort().reverse();
	
	for(j=0;j<hasil.length;j++){
	var result = [];
		for(k=0;k<arr.length;k++){
			if(hasil[j]===arr[k]){
				result.push(arr[k]);
			}
		}
		final.push(result.length);

	}
if(final.length<4){
	return hasil[0]+'('+final[0]+'), '+hasil[1]+'('+final[1]+'), '+hasil[2]+'('+final[2]+')';
}else if(final.length=4){
	return hasil[0]+'('+final[0]+'), '+hasil[3]+'('+final[3]+'), '+hasil[1]+'('+final[1]+'), '+hasil[2]+'('+final[2]+')';
}

return final;

}

console.log(mostFrequentItem(['asus', 'asus', 'samsung', 'iphone','iphone', 'asus','asus'])); // samsung(1), iphone(2) , asus(4)
console.log(mostFrequentItem([9,'b','b','c',9,9,'b',9, 2,2])); // c(1) , 2(2) ,b(3) ,9(4)
// * Total dari array yang sama itu sendiri harus di tampilkan jumlah nya.
