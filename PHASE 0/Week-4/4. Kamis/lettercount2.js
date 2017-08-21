function LetterCountI(str) { 
var res = str.split(' ');
  var max=0;
  var cnt =0;
  var word='';
  for(var i=0;i<res.length;i++){
    for(var j=0;j<res[i].length;j++){
      for(var k=1;k<res[i].length;k++){
        if(res[i][j] == res[i][j+k]){
          cnt+=1;
        }
      }
    }
  
    if(cnt>max){
      max = cnt;
      cnt=0;
      word = res[i];
    } 
    } 
  if(max==0){
    word = '-1';
  }
  // code goes here  
  return word; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCountI(readline());