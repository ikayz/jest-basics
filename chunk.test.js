const chunkArray = require("./chunk");

test("Chunk function exists", () => {
  expect(chunkArray).toBeDefined();
});

test("Chunk array has 10 numbers", () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const len = 2;
  const chunkedArr = chunkArray(numbers, len);

  expect(chunkedArr).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10]
  ]);
});

test("Chunk array has 10 numbers", () => {
  const numbers = [1, 2, 3];
  const len = 1;
  const chunkedArr = chunkArray(numbers, len);

  expect(chunkedArr).toEqual([[1], [2], [3]]);
});
