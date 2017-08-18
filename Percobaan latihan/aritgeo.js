function aritgeo(num){
for(i=0;i<num.length;i++){

	if(num[i+1]-num[i]===num[i] && num[num.length-1]- num[num.length-2]===num[i]){
	return 'Arit';
	} 
	else if(num[i+1]/num[i]==num[num.length-1]/num[num.length-2]){ 
	return 'Geo';
	}
	else {
		return -1;
	}
}
}
console.log(aritgeo([1,2,3,5,7,7]));
console.log(aritgeo([2,4,6,8,10]));
console.log(aritgeo([2,6,18,54]));

