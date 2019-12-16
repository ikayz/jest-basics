const functions = require('./functions');

// toBe
test('Adds 2 + 2 equal to 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

// Not toBe
test('Adds 2 + 2 equal to not 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});
