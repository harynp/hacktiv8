/* 

Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. 

For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

Use the Parameter Testing feature in the box below to test your code with different arguments. 

*/

function dashInsert(str){
var newStr = String(str);
// console.log(newStr);
// var newArr = newStr.split('');
numtoString = newStr.split("");
//console.log(numtoString);
//var temp = '';
	
for(i=1; i< numtoString.length;i++){
	if(numtoString[i]%2!==0 && numtoString[i-1]%2!=0 && numtoString[i-1] !== '-'){
	  //temp += numtoString[i] +'-';
	  numtoString.splice(i,0, '-');
	} //else if(newStr[i]%2==0 && newStr[i+1]%2==0){ 
	// 	temp+=newStr[i];
	// } else {
	// 	temp+=newStr[i];
	// }
}

// if(newStr[newStr.length] === '-'){
// 	temp+=newStr[i]
// }
//return temp;
console.log(numtoString.join(""));


}
dashInsert(33454793); 
