function LetterCountI(str) { 
  var arr = str.toLowerCase().split(" ");
  var n = arr.length;
  var counter = 1;
  var maxcount = 0;
  var newarr = [];
  
  for (var i = 0; i < n; i++) {
      wordarr = arr[i].split("");
      wordarr.sort();
    
      for (var j = 0; j < wordarr.length; j++) {
        if (wordarr[j] == wordarr[j+1]) {
          counter++;
        }
        else {
          if (counter > maxcount) {
            maxcount = counter;
            counter = 1;
          }
        }
      }
      newarr.push([arr[i], maxcount])
        maxcount = 0;
    }

  newarr.sort(function(a, b) {return b[1] - a[1]});
                              
  if (newarr[0][1] == 1) {
    return -1;
  }
  else {
    return newarr[0][0]; 
  }     
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCountI(readline());