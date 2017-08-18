function ArithGeo(arr) { 

var len = arr.length;
var aritmatika = arr[1]-arr[0];
var geometrik = arr[1]/arr[0];

    for (i=0; i<len; i++) {
        if (arr[i+1]-arr[i] !== aritmatika) {
            break;
        } else if (i === (len-2)) {
            return "Arithmetic"
        }
    }
    
    for (i=0; i<len; i++) {
        if (arr[i+1]/arr[i] !== geometrik) {
            break;
        } else if (i === (len-2)) {
            return "Geometric"
        }
    }
    
    return -1;
    
    
}
   
// keep this function call here 
ArithGeo(readline());