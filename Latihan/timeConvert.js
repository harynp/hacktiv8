function timeConvert(minutes){
var jam = Math.floor(minutes/60);	
var menit = minutes % 60;

if(jam < 10){
	jam = '0'+jam.toString();
}

if(menit < 10){
	menit = '0'+ menit.toString();
} 
var result = jam + ' : ' + menit;
return result;
}
console.log(timeConvert(120)); //02:00
console.log(timeConvert(59)); //00:59
console.log(timeConvert(61)); //00:01
console.log(timeConvert(600)); //00:01