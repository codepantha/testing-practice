const Calculator = require("./calculator");

const calculator = new Calculator();


describe('add', () => {
  test('return the sum of 2 numbers', () => {
    expect(calculator.add(2, 5)).toBe(7);
  })
  
  test('must return a number', () => {
    expect(typeof calculator.add(2, 2)).toBe('number')
  })
  
  test('input must be numbers', () => {
    expect(() => calculator.add('2', '2')).toThrow('input must be number not string');
  })
})

describe('subtract', () => {
  test('return the subtraction of 2 numbers', () => {
    expect(calculator.subtract(2, 5)).toBe(-3);
  })

  test('must return a number', () => {
    expect(typeof calculator.subtract(7, 2)).toBe('number');
  })

  test('input must be numbers', () => {
    expect(() => calculator.subtract('2', 5)).toThrow('input must be number not string');
  })
})

describe('divide', () => {
  test('return the division of 2 numbers', () => {
    expect(calculator.divide(10, 5)).toBe(2);
  });

  test('input must be numbers', () => {
    expect(() => calculator.divide('10', '5')).toThrow('input must be number not string');
  })

  test('dividing by zero is undefined', () => {
    expect(() => calculator.divide(10, 0)).toThrow('can\'t divide by 0');
  });

  test('dividing floating point numbers', () => {
    expect(calculator.divide(7.45, 3.82)).toBeCloseTo(1.95);
  })

  test('if the numerator is 0, return 0', () => {
    expect(calculator.divide(0, 10)).toBe(0);
  })
});

describe('multiply', () => {
  test('return the multiplication of 2 numbers', () => {
    expect(calculator.multiply(3, 2)).toBe(6);
  })

  test('multiply by 0 will be 0', () => {
    expect(calculator.multiply(4, 0)).toBe(0);
  });

  test('must return a number', () => {
    expect(typeof calculator.multiply(7, 2)).toBe('number');
  })

  test('input must be numbers', () => {
    expect(() => calculator.multiply('2', 5)).toThrow('input must be number not string');
  })
})
