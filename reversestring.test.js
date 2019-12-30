const reverseString = require('./reversestring');

test('Reverse string has not been defined', () => {
  expect(reverseString).toBeDefined();
});

test('String reverses', () => {
  expect(reverseString('Hello')).toEqual('olleH');
});

