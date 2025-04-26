const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let result = 0;

  if(arr) {
    for(let i = 0; i < arr.length; i++) {
      result += arr[i];
    }
  }
  return result;
};

const multiply = function(arr) {
  let result = arr[0];

  if(arr) {
    for(let i = 1; i < arr.length; i++) {
      result *= arr[i];
    }
  }
  return result;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	let result = 1;

  if(num) {
    for(let i = 1; i <= num; i++) {
      result *= i;
    }
  }
  return result;
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
