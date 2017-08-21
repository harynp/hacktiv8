function LargestPair(num) { 
    var str = ''+num;
    var len = str.length;
    var arr = [];
    for (i=0; i < len; i++) {
        if (i === (len-1)) {
            break;
        } else {
            arr.push(str[i]+str[i+1]);
        }
    }
    arr.sort(function(a, b){return b-a})
    return arr[0];
    
}
   
// keep this function call here 
LargestPair(readline());