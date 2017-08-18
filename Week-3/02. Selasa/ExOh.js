function kata(str){
str.split('');
var i = str.length;
var Ex =0;
var Oh =0;
for (i = 0; i < str.length; i++){
    if (str[i] === 'x'){
        Ex++;
    }else{
        Oh++;
    }
}
if (Ex === Oh){
    return 'true';
} else{
  return 'false';
}
}
kata(readline());