const reverseString = require('./reverseString');

test('reverse the string', () => {
  expect(reverseString("google")).toEqual("elgoog");
})