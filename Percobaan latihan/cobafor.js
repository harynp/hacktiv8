


for(i=0;i<10;i++){
	var reset = '';
	for(m=0;j<i;j++){
		reset += '*';
	}
	console.log(reset);
}


for(i=0;i<=10;i++){
	var temp = '';
	for(j=10;j>i;j--){
		temp += '*';
	}
	for(k=0;k<=i;k++){
		temp += '*';
	}
	for(m=0;m<=i;m++){
		temp += '*';
	}
	console.log(temp);
}
