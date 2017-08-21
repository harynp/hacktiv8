function burhanyo(str){
	var newStr = str.split(""); 
	var temp4digit = '';
	var temp8digit = '';
	var gabung = [];
	var gabung2 = [];
		for(i=0;i<=3;i++){
			temp4digit+=newStr[i];
			gabung.push(newStr[i]);
		}
			
		for(j=4;j<=newStr.length-1;j++){
			temp8digit+=newStr[j]
			gabung2.push(newStr[i]);	
		}
		return gabung,gabung2;


}
		console.log(burhanyo('080911111111'));


