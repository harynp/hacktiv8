function DashInsert(str) { 
var newStr = str.toString().split('');
for(i=1;i<newStr.length;i++){
	if(newStr[i]%2==1 && newStr[i-1]%2==1){
		newStr.splice(i,0,"-");
	} 
	}
	return newStr.join('');
}   
// keep this function call here 
console.log(DashInsert(992313));                            
