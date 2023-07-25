
const stringLength = require('./stringLength');

describe('stringLength', () => {
  test('returns the correct length of a string', () => {
    expect(stringLength('hello')).toBe(5);
  });

  test('throws an error for non-string input', () => {
    expect(() => stringLength(123)).toThrow('Input should be a string');
  });

  test('throws an error for strings shorter than 1 character', () => {
    expect(() => stringLength('')).toThrow('String length should be between 1 and 10 characters');
  });

  test('throws an error for strings longer than 10 characters', () => {
    expect(() => stringLength('abcdefghijk')).toThrow('String length should be between 1 and 10 characters');
  });
});