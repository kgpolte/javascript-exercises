const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	let total = 0;
  for (number of numbers) {
    total = total + number;
  }
  return total;
};

const multiply = function(numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator * currentValue);
};

const power = function(num, pow) {
	return num ** pow;
};

const factorial = function(num) {
	let total = 1;
  for (let i = 1; i <= num; i++) {
    total = total * i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
