import {
  sum,
  subtract,
  multiply,
  divide,
  isEven,
  factorial,
  asyncSum,
} from '../src/index.js';

describe('Basic math operations', () => {
  test('sum adds two numbers correctly', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, 1)).toBe(0);
    expect(sum(0, 0)).toBe(0);
    expect(sum(2.5, 2.5)).toBe(5);
  });

  test('subtract subtracts two numbers correctly', () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(10, 10)).toBe(0);
    expect(subtract(0, 5)).toBe(-5);
  });

  test('multiply multiplies two numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(-2, 3)).toBe(-6);
    expect(multiply(2.5, 2)).toBe(5);
  });

  test('divide divides two numbers correctly', () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(9, 3)).toBe(3);
    expect(divide(5, 2)).toBe(2.5);
  });

  test('divide throws error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
  });

  test('isEven correctly identifies even numbers', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(3)).toBe(false);
    expect(isEven(0)).toBe(true);
    expect(isEven(-2)).toBe(true);
    expect(isEven(-3)).toBe(false);
  });

  test('factorial calculates factorial correctly', () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(5)).toBe(120);
    expect(factorial(7)).toBe(5040);
  });

  test('factorial throws error for negative numbers', () => {
    expect(() => factorial(-1)).toThrow('Factorial is not defined for negative numbers');
  });
});

describe('Async operations', () => {
  test('asyncSum adds two numbers asynchronously', async () => {
    const result = await asyncSum(2, 3);
    expect(result).toBe(5);
  });

  test('asyncSum works with promises', () => {
    return asyncSum(10, 20).then((result) => {
      expect(result).toBe(30);
    });
  });
});

describe('Edge cases and additional tests', () => {
  test('all functions are defined', () => {
    expect(sum).toBeDefined();
    expect(subtract).toBeDefined();
    expect(multiply).toBeDefined();
    expect(divide).toBeDefined();
    expect(isEven).toBeDefined();
    expect(factorial).toBeDefined();
    expect(asyncSum).toBeDefined();
  });

  test('coverage for all branches', () => {
    
    expect(() => divide(1, 0)).toThrow();
    expect(() => factorial(-1)).toThrow();
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(2)).toBe(2);
  });
});