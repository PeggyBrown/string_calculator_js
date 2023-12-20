const sum = require('./string_calc');

test('one number gives its value', () => {
  expect(sum("3")).toBe(3);
});

test('adds two positive numbers', () => {
  expect(sum("4,2")).toBe(6);
});