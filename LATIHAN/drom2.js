function drom2(str){
var newStr = str.split(' '); // ['aba', 'abc']
// var strSatu = newStr[0];
// // console.log(strSatu);
// var strDua = newStr[1];
var temp = [];
var count = 0;
	
	for(i=0;i<=newStr.length-1;i++){
		var kebalikan = '';
  			for(var j = newStr[i].length-1; j >= 0; j--) {
    			kebalikan += newStr[i][j];
  		} 
  		temp.push(kebalikan);
	}
	console.log(temp);

// return [kebalikan,kebalikan];
// balikStrDua = strDua.split('').reverse().join('');

	// if(newStr[0]===temp[0] && newStr[1]===temp[1]){
	// 	return 'Keduanya merupakan kata polindrome';
	// } else if(newStr[0]===temp[0] && newStr[1]!==temp[1]){
	// 	return 'Kata 1 merupakan kata polindrome';
	// } else if(newStr[0]!==temp[0] && newStr[1]===temp[1]){
	// 	return 'Kata 2 merupakan kata polindrome';
	// } else {
	// 	return 'Keduanya BUKAN kata polindrome';
	// }

	for(k=0;k<newStr.length;k++){
		if(newStr[k] === temp[k]){
			count++;
		} 
	}

	return 'Jumlah kata palindrom = ' +count;
}
console.log(drom2('abc aba vvv zzz hhh'));
// console.log(drom2('aba aba'));
// console.log(drom2('aba abc'));
// console.log(drom2('zzz aba'));
// console.log(drom2('abc vvv'));
 //kata 2 merupakan polindrom