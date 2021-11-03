const capitalizeString = require('./capitalizeString');

test("'google' returns 'Gooogle'", () => {
  expect(capitalizeString('google')).toBe('Google');
});

describe('input must be a string', () => {
  test('0 is not a string', () =>{
    expect(() => capitalizeString(0)).toThrow('input must be a string');
  });
  
  test('an object is not a string', () => {
    expect(() => capitalizeString({})).toThrow('input must be a string');
  });
})

test('empty string returns an empty string', () => {
  expect(capitalizeString('')).toBe('');
});

