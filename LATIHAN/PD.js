function ProductDigits(num) { 
  var values = []
  for(i=num-1;i>=0;i--){
      if(num % i == 0){ 
      // console.log('ini num = '+num);
      // console.log('ini i= '+i);
      var divide = num / i; //20/19 ....
      values.push(divide.toString()+i.toString())
      // console.log(values);
      }
  }
  
  values.sort(function(a,b){ return a.length - b.length});
  return values[0].length;
         
}
 
console.log(ProductDigits(10)); 