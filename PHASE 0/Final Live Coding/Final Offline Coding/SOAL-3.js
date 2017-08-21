/*
======================
Soal 3 : F1X Th3 W0rd5
======================

Name : ________

Dibawah ini tersedia sebuah function fixTheWord yang berfungsi untuk membetulkan string yang diterima yaitu berupa sebuah kalimat yang dapat dibaca.
Function fixTheWord akan melalui beberapa function dan mengembalikan sebuah string baru yang telah berubah atau telah dibetulkan.
Adapun function-function yang harus digunakan sebelum function fixTheWord adalah :
function removeSymbols, function capitalizeString , transformNumberToAlphabet
Function removeSymbols : menerima parameter berupa string dan mengembalikan string baru dengan menghapus semua simbol  dan menggantinya dengan ‘ ‘ (spasi).
Ex: “%&h3ll0+w0rld\!” => “h3ll0 w0rld”
Function transformNumberToAlphabet: menerima parameter berupa string dan mengembalikan
string baru dengan perubahan dimana untuk beberapa huruf, diubah menjadi bentuk angka
dengan pola berikut:
Angka 1 diganti menjadi Huruf : i
Angka 3 diganti menjadi Huruf : e
Angka 5 diganti menjad Huruf : s
Angka  0 diganti menjadi Huruf o
Angka 4 diganti menjadi Huruf a
Ex : H3ll0 W0rld => “Hello World”
Ex: “H3l1c0pter Fly 4w4y” => “Helicopter Fly Away”

Function capitalizeString: menerima parameter berupa string dan mengembalikan string baru
yang merupakan kata yang telah dikapital. Kata yang kapital: huruf depan setiap kata besar /
uppercase, dan huruf sisanya kecil / lowercase.
Ex: “hello world” => “H3ll0 W0rld”



*/

function removeSymbols(str) {
 var kata = str.replace(/\W/g, " "); //ambil kata selain Words dan diganti dengan spasi
	return kata;					 //ambil kata
}


function transformNumberToAlphabet(str) {
    var cari = /14504/gi //cari number 14504 global dan incasesensitif
	var res = str.replace(/3/gi, "e");	//ganti dengan huruf e dan seterusnya
	var res1 = res.replace(/4/gi, "a");
	var res2 = res1.replace(/1/gi, "i");
	var res3 = res2.replace(/5/gi, "s");
	var resFinal = res3.replace(/0/gi, "o");

	return resFinal;
}

function capitalizeString(str) {
      return str.replace(/\w\S*/g, function(str) { return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase(); }); //ambil word kecuali spasi secara global dan ambil character pertama di upper ditambah kata selanjutnya di ubah kecil
}



function stringManipulator(str) {
    var cleanedStr = removeSymbols(str);
    var transformedStr = transformNumberToAlphabet(cleanedStr);
    var stringManipulator = capitalizeString(transformedStr);
    return stringManipulator;
}

// console.log(removeSymbols("H3ll0-w0rld%th1s$I5-4n-3x4mple-s3nt3nc3+!"));
// console.log(transformNumberToAlphabet("H3ll0-w0rld%th1s$I5-4n-3x4mple-s3nt3nc3+!"));
// console.log(capitalizeString("H3ll0-w0rld%th1s$I5-4n-3x4mple-s3nt3nc3+!"));
console.log(stringManipulator("H3ll0-w0rld%th1s$I5-4n-3x4mple-s3nt3nc3+!"));
// Hello World This Is An Example Sentence

console.log(stringManipulator("1#533$d34d&p30pl3"));
//I See Dead People
