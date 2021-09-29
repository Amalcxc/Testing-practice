const { test } = require('@jest/globals');
const {stringLength,reverseString,calculator, capitalize} = require('./fun');

test('characters count', () => {
  expect(stringLength('hello')).toBe(5);
});

test('least 1 character long', () => {
  expect(stringLength('')).toBe('error');
});

test('longer than 10 characters', () => {
  expect(stringLength('12345678910')).toBe('error');
});

test('return it reversed', () => {
  expect(reverseString('hello')).toBe('olleh');
});

describe('calculator', () => {
  test('addition', () => {
    expect(calculator.add).toBeTruthy();
  });

  test('subtraction', () => {
    expect(calculator.subtract).toBeTruthy();
  });

  test('multiplication', () => {
    expect(calculator.multiply).toBeTruthy();
  });

  test('dividation', () => {
    expect(calculator.divide).toBeTruthy();
  });
});

test('first character capitalized', () => {
  expect(capitalize('hello')).toBe('Hello');
});

