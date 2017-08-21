var nama = '';
var peran = '';
  
  switch(nama){
  case '':
  console.log("Nama tidak boleh kosong");
  break;
  case 'hary':
  console.log('Selamat datang di Dunia Proxytia, '+nama); 
  }

  switch(peran) {
  case 'Tabib': 
  console.log('Halo Tabib ' +nama+' , kamu akan membantu temanmu yang terluka.');   
  break;
  case 'Penyihir': 
  console.log('Halo Penyihir ' +nama+' , ciptakan keajaiban yang membantu kemenanganmu!');   
  break;
  case 'Ksatria': 
  console.log('Halo Ksatria ' +nama+' , kamu dapat menyerang dengan senjatamu!');   
  break;
  case '':
  console.log("Pilih peranmu untuk memulai game");
}


atau


var nama = '';
var peran = '';

if(nama=='' && peran==''){
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
} else {
  console.log("Pilih peranmu untuk memulai game");
}