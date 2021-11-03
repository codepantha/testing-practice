class Calculator {
  constructor () {}

  #checkNumbers (num1, num2) {
    if (((typeof num1 !== 'number') || (typeof num2 !== 'number')))
      throw new Error('input must be number not string')
  }

  add = (num1, num2) => {
    this.#checkNumbers(num1, num2);
    return num1 + num2;
  }

  subtract = (num1, num2) => {
    this.#checkNumbers(num1, num2);
    return num1 - num2;
  }

  divide = (num1, num2) => {
    this.#checkNumbers(num1, num2);
    if (num2 === 0) throw new Error("can't divide by 0")
    return num1 / num2;
  }

  multiply = (num1, num2) => {
    this.#checkNumbers(num1, num2);
    return num1 * num2;
  }
}

module.exports = Calculator;