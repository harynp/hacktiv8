function genapGanjil(num){

var tampung = [];
for(i=0;i<num.length;i++){
	if(num[i]%2===0){
		tampung.push('Genap');
		
		} else {

		tampung.push('Ganjil');
		}
	}

	return tampung;
}

// if(tampung%2==0){
// 	return 'Genap';
// } else {
// 	return 'Ganjil';
// }
// return tampung;
// }

console.log(genapGanjil([3,2,3,4,5,2]));
console.log(genapGanjil([2,4,1,2,5,2]));