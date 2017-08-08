function SimpleMode(arr) { 
var maxNum = 0;
var sameNum = 0;
for(i=0;i<=arr.length-1;i++){
	var x1 = arr[i];console.log('Nilai pembanding : '+x1)
	var count = 0;
    for(j=0;j<arr.length;j++){
    	console.log('yang dibanding: '+arr[j])
    	if(x1===arr[j]){
    		
    		count++;
    	}	
    }

if(count>maxNum){
	maxNum = count;
	console.log('Nilai Max = '+maxNum);
	sameNum = x1;
	} 
}
return sameNum;
}

console.log(SimpleMode([2,2,3,5,5,5]));
