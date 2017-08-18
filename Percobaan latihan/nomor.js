function nomorHP(str){
// var splitNomorHp = str.split(' ');

var newNumber = str.replace(/[^a-zA-Z -]/g,"X");
console.log(newNumber);
}
nomorHP('Nomor saya adalah 0821-1283-1234');
