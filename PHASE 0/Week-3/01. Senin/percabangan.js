function factorial(num1) {
  if(num1 == 1) {
    return 1;
  }
  else {
    return num * factorial(num1 - 1);
  }
}

console.log(factorial(5)); // 5*4*3*2*1 = 120


function factorial2(num1, num2) {
  if(num1 >= 1) {
   return num1 * factorial2((num1 - num2),num2);
   }
  else {
    return 1;
  }
}
console.log(factorial2(12,5)); // 12*7*2 = 168