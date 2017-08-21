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

	var result = [];
	var unik = [];
	var jadi = [];

	for(i=0;i<arr.length;i++){

		if(unik.indexOf(arr[i]) === -1){
			unik.push(arr[i]);
		}
	}
	var balik = unik.sort();

	var jumlah = [];
	for(j=0;j<balik.length;j++){
		var count = 0;
		for(k=0;k<arr.length;k++){
			if(balik[j]===arr[k]){
				count++;
			}
		}
		jumlah.push(count);
	}



		// if(balik.length < 4){
		// result.push(balik[2]+'('+jumlah[2]+') '+balik[1]+'('+jumlah[1]+') '+balik[0]+'('+jumlah[0]+')');
		// } else if(balik.length === 4){
		// result.push(balik[3]+'('+jumlah[3]+') '+balik[0]+'('+jumlah[0]+') '+balik[2]+'('+jumlah[2]+') '+balik[1]+'('+jumlah[1]+')');
		// }
	for (l=0; l < jumlah.length;l++){
		jadi.push('('+jumlah[l]+')'+balik[l]);
	}
	jadi.sort();
	
	for (m = 0; m<jadi.length;m++) {
		result.push(jadi[m].slice(3)+jadi[m].slice(0,3));
	}
	return result
	
}
// 		result.push(balik[l]+ '('+jumlah[l]+')');
// 	} 	
	// var sementara = result.reverse();

console.log(mostFrequentItem(['asus', 'asus', 'samsung', 'iphone','iphone', 'asus','asus'])); // samsung(1), iphone(2) , asus(4)
console.log(mostFrequentItem([9,'b','b','c',9,9,'b',9, 2,2])); // c(1) , 2(2) ,b(3) ,9(4)
// * Total dari array yang sama itu sendiri harus di tampilkan jumlah nya.
