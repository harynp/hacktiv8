function TimeConvert(num) { 
  var hours = Math.floor(num/60);
  var minutes = num % 60;
  var result;
  return hours + ':' + minutes;
         
}

// keep this function call here 
TimeConvert(readline());