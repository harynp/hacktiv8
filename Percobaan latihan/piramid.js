// function piramid(num){

// for(i=0;i<=num;i++){
// var temp = '';
// for(j=num;j>=i;j--){
// 	temp += '*';
// }
// for(k=0;k<=i;k++){
// 	temp += '*';
// }
// // for(l=0;l<=i;i++){
// // 	temp += '+';
// }
// return temp;
// }
// console.log(piramid(10));

for(i=0;i<=10;i++){
	var temp = '';
	for(j=10;j>i;j--){
		temp += ' ';
	}
	for(k=0;k<=i;k++){
		temp += '*';
	}
	for(l=1;l<=i;l++){
		temp += '*';
	}
	console.log(temp);
}

for(i=0;i<=10;i++){
	var temp = '';
	for(j=0;j<=i;j++){
		temp += ' ';
	}
	for(k=10;k>=i;k--){
		temp += '*';
	}
	for(l=10;l>=i;l--){
		temp += '*';
	}
	console.log(temp);
}