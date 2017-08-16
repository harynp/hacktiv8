function nomorHP(str){
// var splitNomorHp = str.split(' ');

var newNumber = str.replace(/['kucing'||'tikus']/g,"*");
console.log(newNumber);
}
nomorHP('kucing Tom dan Jerry tikus');
