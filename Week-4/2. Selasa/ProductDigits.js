function ProductDigits(num) { 
    var answers = [];
    for(i=0;i<=num;i++){
        for(j=0;j<=num;j++){
            if(i * j === num){
                answers.push(Number(i.toString() +j.toString()));
            }
        }
    }
    console.log(answers)
    answers.sort(function(a,b){
       return a-b;
    });  
    return answers.shift().toString().length;
}
   
// // keep this function call here 
// console.log(ProductDigits(20)); 
   
// keep this function call here 
ProductDigits(readline());