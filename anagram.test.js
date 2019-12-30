const isAnagram = require("./anagram");

test("isAnagram funtion exists", () => {
  expect(isAnagram).toBeDefined();
});

test("isAnagram function exists", () => {
  expect(typeof isAnagram).toEqual("function");
});

test('"Cinema" is an anagram of "Ice Man"', () => {
  expect(isAnagram("cinema", "iceman")).toBeTruthy();
});

test('"Dormitory is an anagram of "dirty room##"', () => {
  expect(isAnagram("Dormitory", "Dirty room##")).toBeTruthy();
});

test("Hello is not anagram of Hallo", () => {
  expect(isAnagram("Hello", "Hallo")).toBeFalsy();
});
