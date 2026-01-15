
export function sum(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

export function isEven(num) {
  return num % 2 === 0;
}

export function factorial(n) {
  if (n < 0) {
    throw new Error('Factorial is not defined for negative numbers');
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

export function asyncSum(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(a + b), 100);
  });
}

export default {
  sum,
  subtract,
  multiply,
  divide,
  isEven,
  factorial,
  asyncSum,
};