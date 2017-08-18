function burhanyey(str){
	var kalimat = str.replace(/[^a-z ]/gi,'');
	var nomor = str.replace(/[^0-9]/g,'').split('');
	console.log(kalimat); 	
	console.log(nomor);
	console.log(nomor.length);

	var temp = '';
	var sisa = '';
		for(i=0;i<8;i++){
			temp+='*'
		}

		for(j=8;j<nomor.length;j++) {
			sisa+=nomor[j]
		}
	console.log(kalimat + ' ' + temp + sisa);
}
burhanyey('Nomor burhan adalah 080922221111');