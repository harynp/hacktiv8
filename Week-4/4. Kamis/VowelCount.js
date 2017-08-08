function VowelCount(str) { 

  var vocal = ['a','i','u','e','o'];
  var temp = '';


  for(i=0;i<str.length;i++){
  	for(j=0;j<vocal.length;j++){
  		if(str[i]===vocal[j]){
  			temp += str[i];

  		}
  	}
  }
  return temp.length; 
         
}
console.log(VowelCount('hello'));