function SwapCase(str) { 

 var newStr=[];
 for(i=0;i<str.length;i++){
     if(str[i] === str[i].toUpperCase()){
         newStr.push(str[i].toLowerCase());
     }else if(str[i] === str[i].toLowerCase()){
         newStr.push(str[i].toUpperCase());
         // console.log(str[i]);
 }
}
   return newStr.join(''); 
}
// keep this function call here 
console.log(SwapCase('ANjenG bAbi'));  