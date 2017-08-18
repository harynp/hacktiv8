function factorial(num1) {
    a=1;
	for (i = num1; i > 0; i--) {
        a = a * i;
	}
  return a;
}

console.log(factorial(5)); //120


function factorial2(num1, num2) {
	a = 1;
	for (i = num1; i > 0; i-=num2) {
        a = a * i;
	}
	return a;
}

console.log(factorial2(12,5)); //168
