var nama = 'Hary';
var peran = 'Tabib';
var tahunLahir = 1992;
var umur = 2017 - tahunLahir;
var playerHealth = tahunLahir * Math.random();
var monsterHealth = tahunLahir * Math.random();
var kodeMonster = Math.floor(Math.pow(100, Math.random()));

if(nama=='Hary' && peran==''){
  console.log("Nama tidak boleh kosong");
  console.log("Pilih peranmu untuk memulai game");
} else if(nama !== '' && peran=='Ksatria'){
  console.log('Selamat datang di Dunia Proxytia, '+nama); 
  console.log('Halo Ksatria ' +nama+' , kamu dapat menyerang dengan senjatamu!');  
} else if(nama !== '' && peran=='Tabib'){
  console.log('Selamat datang di Dunia Proxytia, '+nama); 
   console.log('Halo Tabib ' +nama+' , kamu akan membantu temanmu yang terluka.');   
} else if(nama !== '' && peran=='Penyihir'){
  console.log('Selamat datang di Dunia Proxytia, '+nama); 
  console.log('Halo Penyihir ' +nama+' , ciptakan keajaiban yang membantu') 
} 
else {
  console.log("Peranmu Kacung");
}


for(var i=1;i<=umur;i++){
if(i%umur==0){
	console.log(peran + ' ' + nama + ' menyerang monster!');
	monsterHealth = monsterHealth - umur;
}
else if(i%kodeMonster==0){
	console.log('monster menyerang ' + peran + ' ' + nama + '!');
	playerHealth = playerHealth - kodeMonster;
}
else if(i%umur==0 && i%kodeMonster==0){
	console.log('Health keduanya bertambah');
	playerHealth = playerHealth  + kodeMonster;
	monsterHealth  = monsterHealth + umur;
}
}

if(playerHealth > monsterHealth){
console.log('Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!');
}
else {
console.log('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...');
}



