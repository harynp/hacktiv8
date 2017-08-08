function removeBannedWords(str){
var kataPisah = str.split(' ');
var pisah =[];
var banned1 = 'kucing';
var banned2 = 'bebek';

for(i=0;i<kataPisah.length;i++){
	for(j=0;j<kataPisah.length;j++){
		if(kataPisah[j]===banned1 || kataPisah[j]===banned2){
			var bannedPanjang = str[i].length;
			// kataPisah[j] =  '******';
	}
}
return kataPisah.join(' ');
}
}
console.log(removeBannedWords('geger! ternyata donald brump adalah kucing ! dia dan mentrinya bebek sekali.'));

// str = str.replace('abc', '');