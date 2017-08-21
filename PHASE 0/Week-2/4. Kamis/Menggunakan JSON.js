var human = {
	nama : ['Tono','Tono','Tono'],
	hari : ['Senin','Rabu','Jumat'],
	kehadiran : ['Masuk','Masuk','Absen'],
	alasan : [' ',' ','Dinas Luar']
};

var hariMasuk = human.hari.length;
var totalMasuk = 0;
var totalAbsen = 0;

for(i=0;i<=human.hari.length-1;i++){
	console.log('Nama : '+human.nama[i]);
	console.log('Hari : '+human.hari[i]);
	console.log('Kehadiran : '+human.kehadiran[i]);
if(human.kehadiran[i]=='Absen'){
	console.log('Alasan :'+human.alasan[i]);
	totalAbsen++;
} else{
	totalMasuk++;
}
}
console.log('Total hari kerja minggu ini : '+ hariMasuk);
console.log('Total Masuk : '+ totalMasuk);
console.log('Total Tidak Masuk : '+ totalAbsen);

// console.log('============================'); 
// console.log('Nama : '+human1.nama);
// console.log('Hari : '+human1.hari); 
// console.log('Kehadiran :'+human1.kehadiran); 
// console.log('Alasan : '+human1.alasan); 
// console.log('============================'); 
// console.log('Nama : '+human2.nama);
// console.log('Hari : '+human2.hari); 
// console.log('Kehadiran : '+human2.kehadiran); 
// console.log('Alasan : '+human2.alasan); 
// console.log('============================'); 
// console.log('Nama : '+human3.nama);
// console.log('Hari : '+human3.hari); 
// console.log('Kehadiran :'+human3.kehadiran); 
// console.log('Alasan : '+human3.alasan); 
// console.log('============================'); 

// Total hari kerja minggu ini: 3 hari
// Total Masuk: 2 hari
// Total Tidak Masuk: 1 hari



// var Human1 = {
//     nama : ['Tono','Tono','Tono'],
//     hari : ['Senin','Rabu','Jumat'],
//     kehadiran : ['Masuk','Masuk','Absen'],
//     alasan : [' ',' ','Dinas Luar']
           
// };
// var TotalHariKerja = Human1.hari.length;
// var TotalMasuk = 0;
// var TotalTidakMasuk = 0;


// for(var i =0;i<=Human1.nama.length-1;i++){
//   console.log('Nama = '+Human1.nama[i]);
//   console.log('Hari = '+Human1.hari[i]);
//   console.log('Kehadiran = '+Human1.kehadiran[i]);
//   if(Human1.kehadiran[i] == 'Absen'){
//     console.log('Alasan = '+Human1.alasan[i]);
//     TotalTidakMasuk++;
//   }else {
//     TotalMasuk++;
//   }
//   }

// console.log('Total hari kerja minggu ini : '+ TotalHariKerja);
// console.log('Total Masuk : '+ TotalMasuk);
// console.log('Total Tidak Masuk : '+ TotalTidakMasuk);
