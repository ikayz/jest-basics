const functions = require('./functions');

// toBe
test('Adds 2 + 2 equal to 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

// Not toBe
test('Adds 2 + 2 equal to not 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// Should be null toBeNull
test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

// Check falsy values toBeFalsy
test('Should be a falsy value', () => {
  expect(functions.checkValue(0)).toBeFalsy();
});

// Check for object
test('Should be an object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Isaac',
    lastName: 'Miti'
  });
});
