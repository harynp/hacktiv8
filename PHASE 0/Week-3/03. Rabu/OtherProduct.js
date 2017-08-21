function OtherProducts(arr) { 

    var hasil = [];
    var kalisemua = arr.reduce(function(a,b){return a*b});
    for(i=0; i<arr.length; i++) {
        hasil.push(kalisemua/arr[i]);
    }
    return hasil.join("-");
}
   
// keep this function call here 
OtherProducts(readline());