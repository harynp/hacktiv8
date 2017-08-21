function PrimeTime(num) { 
var tampung = 0;
for(i=1;i<=num;i++){
    if(num%i===0){
      tampung += i;
 }
}

if(tampung === num+1){
	return true;
} else {
	return false
}
}
   
// keep this function call here 
PrimeTime(readline());