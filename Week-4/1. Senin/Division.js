function Division(num1,num2) { 

var low = 0;
var high = 0;
var indexMax = 0;
  if(num1 < num2 ){
      low = num1; high = num2;
  } else {
      low = num2; high = num1;
  }
   
  for(i=1;i<=low;i++){
      if(low%i===0 && high%i===0){
          indexMax = i;
      }
  } 
   return (indexMax);      
}
   
// keep this function call here 
Division(readline());