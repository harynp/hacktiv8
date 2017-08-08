/*
    	Buatlah sebuah script.js yang berada relatif di sebelah index.html. 
    	Dengan memanfaatkan children, parentNode, nextElementSibling, previousElementSibling, dan innerHTML(), 
    	buat perubahan berikut di file script.js untuk memanipulasi halaman HTML kita dan mengubah nilai berikut dengan mengakses <div> yang sesuai:
        <div>Saya Adalah Keturunan Pertama</div> menjadi <div>Diakses Melalui Eldest Parent</div>
        <div>Saya adalah Generasi Termuda, yang paling Tua</div> menjadi <div>Diakses Melalui a Child</div>
        <div>Saya adalah Generasi Termuda, yang Paling Muda</div> menjadi <div>Diakses Melalui a Child</div>
        <div>Saya adalah Generasi yang Cukup Tua</div> menjadi <div>Diakses Melalui a Child</div>
*/


var body = document.body;
var bodyChilds = body.children;
console.log(bodyChilds);


//ANAK
var kakekDiv = document.getElementById('eldest-parent');
var anakPertama = kakekDiv.children;
var anakPertamaIsi = anakPertama[0];
anakPertamaIsi.innerHTML = 'Diakses Melalui Eldest Parent';
console.log(anakPertamaIsi);

//CUCU 
var CucuPertamaIsi = document.getElementById('a-child');
var PrevCucu = CucuPertamaIsi.previousElementSibling;
PrevCucu.innerHTML = 'Diakses Melalui a Child';
var NextCucu = CucuPertamaIsi.nextElementSibling;
NextCucu.innerHTML = 'Diakses Melalui a Child';


//BONTOT
var kakekDiv = document.getElementById('eldest-parent');
var anakBontot = kakekDiv.children;
var anakBontotIsi = anakBontot[2];
anakBontotIsi.innerHTML = 'Diakses Melalui a Child';
console.log(anakBontotIsi);