
//PAKE MAP
var transformArrToLowerCase = arr => {
  let lowerCase = arr.map( isiArray => {
  		return isiArray.toLowerCase(); 
	});
		return(lowerCase);
}
console.log(transformArrToLowerCase(['BUDI', 'MArNi', 'mukIDi'])); // ['budi', 'marni', 'mukidi']


//PAKE FILTER
var filterArrUnder10 = arr => {
 
 let ArrTop = arr.filter( isiArray => {
  		return isiArray > 10; 
	});
		return(ArrTop);
}
console.log(filterArrUnder10([1, 5, 12, 15, 20])); // [12, 15, 20]


//PAKE REDUCE
var reduceFindMaximum = arr => {
  let ArrMax = arr.reduce( isiArray => {
  		return Math.max(...arr)
	});
		return(ArrMax);
}
console.log(reduceFindMaximum([5, 1, 7, 6, 9])); // 9