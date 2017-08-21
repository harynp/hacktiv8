function SimpleMode(arr) { 
var maxNum = 0;
var sameNum = 0;
var tampung = [];
for(i=0;i<=arr.length-1;i++){
	var count = 0;
    for(j=0;j<i;j++){
    	if(arr[i]===arr[j]){
    		count++;
    	}	
    }

if(count>maxNum){
	maxNum = count;
	sameNum = arr[i];
	} 
}
return sameNum;
}

SimpleMode(readline());