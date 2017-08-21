function SimpleSymbols(str) { 

 var r=/[a-z][^+]|[^+][a-z]|^[a-z]|[a-z]$/i;
    if(str.match(r)){
        return false
    }
    else{
        return true
    }
         
}
console.log(SimpleSymbols("f++d+"));
console.log(SimpleSymbols("+d+=3=+s+"));
console.log(SimpleSymbols("+z+=2=+S"));