const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
};

const power = function(num, pow) {
	return num ** pow;
};

const factorial = function(num) {
  const factors = Array.from(Array(num + 1).keys());
  factors.splice(0, 1);
  return factors.reduce((accumulator, factor) => factor * accumulator, 1);
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
