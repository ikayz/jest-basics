const functions = require("./functions");

beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

const initDatabase = () => console.log("Initialize dtabase...");
const closeDatabase = () => console.log("Closed database...");

const nameCheck = () => console.log("Checking username");

describe("Checking names", () => {
  beforeEach(() => nameCheck());

  test("User name is Isaac", () => {
    const user = "Isaac";

    expect(user).toBe("Isaac");
  });
});

// toBe
test("Adds 2 + 2 equal to 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

// Not toBe
test("Adds 2 + 2 equal to not 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// Should be null toBeNull
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

// Check falsy values toBeFalsy
test("Should be a falsy value", () => {
  expect(functions.checkValue(0)).toBeFalsy();
});

// Check for object toEqual
test("Should be an object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Isaac",
    lastName: "Miti"
  });
});

// Check weight to be than toBeLessThan
test("Should be less than 1200", () => {
  const weight1 = 600;
  const weight2 = 500;
  expect(weight1 + weight2).toBeLessThan(1200);
});

// Regex test
test("There is no e in Isaac", () => {
  expect("Isaac").not.toMatch(/e/);
});

// Arrays
test("Admin should be in the usernames", () => {
  names = ["Isaac", "Ikayz", "Admin"];
  expect(names).toContain("Admin");
});

// Working with Promises
// test('User fetched name should be Ervin Howell', () => {
//   expect.assertions(1);
//   return functions.fetchUser().then(data => {
//     expect(data.name).toEqual('Ervin Howell');
//   });
// });

// Working with Async
test("User fetched name should be Ervin Howell", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Ervin Howell");
});
