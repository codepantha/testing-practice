const stringLength = require('./stringLength');

test('returns the length of the string', () => {
  expect(stringLength('money')).toBe(5)
});

test('string must not be empty', () => {
  expect(() => stringLength('')).toThrow('No empty string');
})

test('string must not be longer than 10 characters', () => {
  expect(() => stringLength('chromosomes')).toThrow('String exceeds 10 characters');
})

