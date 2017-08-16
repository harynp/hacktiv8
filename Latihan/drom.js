function drom(str){
var newStr = str.split(' ');
var strSatu = newStr[0];
var strDua = newStr[1];

balikStrSatu = strSatu.split('').reverse().join('');
balikStrDua = strDua.split('').reverse().join('');

	if(strSatu===balikStrSatu && strDua===balikStrDua){
		return 'Keduanya merupakan kata polindrome';
	} else if(strSatu===balikStrSatu && strDua!==balikStrDua){
		return 'Kata 1 merupakan kata polindrome';
	} else if(strSatu!==balikStrSatu && strDua===balikStrDua){
		return 'Kata 2 merupakan kata polindrome';
	} else {
		return 'Keduanya BUKAN kata polindrome';
	}

}
console.log(drom('abc aba')); //kata 2 merupakan polindrom