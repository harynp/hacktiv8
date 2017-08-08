function palindrome(str){
	
var kebalikan = '';
for(var i = str.length-1;i>=0;i--){
	kebalikan += str[i];
}
// var rev = str.split('').reverse().join('');

if(kebalikan !== str) {
	return false;
} else {
	return true;
}

}
console.log(palindrome('makan'));
console.log(palindrome('kodok'));
console.log(palindrome('main'));