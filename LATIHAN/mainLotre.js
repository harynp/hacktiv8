function mainLotre(str){
if(str==='A0001'){
	return 50000;
} else if(str==='A0002'){
	return 1000000;
} else if(str==='A0003'){	
	return 'Anda Kurang Beruntung';
} else {
	return "Kode Tidak Valid !";
}
}

console.log(mainLotre("A0001")); //50000
console.log(mainLotre("A0003")); //"Anda Kurang Beruntung"
console.log(mainLotre("A0002")); //1000000
console.log(mainLotre("X0001")); //kode tidak valid
