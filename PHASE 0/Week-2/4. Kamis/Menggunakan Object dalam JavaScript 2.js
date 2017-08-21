ar Teman = function sapa(nama,kabar,pekerjaan) {
this.nama = nama;
this.kabar = kabar;
this.pekerjaan = pekerjaan;
this.sapa = function(){
	console.log('Halo '+nama+', apa kabar?');
}
this.balasSapa = function(){
	console.log('Halo '+nama+',kabarku '+kabar);
}
this.tanyaPekerjaan = function(){
	console.log('Apa pekerjaanmu saat ini?');
}
this.balasPekerjaan = function(){
	console.log('Pekerjaanku saat ini adalah '+pekerjaan);
}
this.berpisah = function(){
	console.log('Senang bertemu denganmu '+nama+' semoga kamu sukses sebagai '+pekerjaan);
}
}
var budi = new Teman('Budi', 'baik', 'developer');
var tono = new Teman('Tono', 'baik', 'chef');

tono.sapa(budi.nama);
budi.balasSapa(tono.nama);
tono.tanyaPekerjaan();
budi.balasPekerjaan();
tono.berpisah(budi);