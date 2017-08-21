function LongestWord(sen) { 

  sen = sen.split(/[^a-zA-Z]/);  
  return sen.sort(function(a,b){
  return b.length-a.length})
  .shift(); 
         
}
   
// keep this function call here 
LongestWord(readline());