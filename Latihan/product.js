function ProductDigits(num) { 
var angka = [];

for(i=0;i<num;i++){
	for(j=0;j<i;j++){
		if(i*j===num){
			angka.push(Number(i.toString() +j.toString()));
		}
	}
}
angka.sort(function(a,b){
       return a-b;
    });  
    return angka.shift().toString().length;
}
   
// keep this function call here 
console.log(ProductDigits(90));                            
