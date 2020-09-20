const assert = require("assert");
const { add, subtract, divide, multiply } = require("../math-clac");

describe("suite-level timeout", () => {
  //   this.timeout(40000);
  let a = 10;
  let b = 10;

  //   beforeEach(() => {
  //     let a = 10;
  //     let b = 10;
  //   });

  // 1. Addition
  it("Addition of two numbers", () => {
    // let a = 10;
    // let b = 10;

    const expected = 20;
    const actual = add(a, b);

    assert.equal(expected, actual);
  });

  // 2. Subtraction
  it("Subtraction of two numbers", () => {
    // let a = 10;
    // let b = 10;

    const expected = 0;
    const actual = subtract(a, b);

    assert.equal(expected, actual);
  });

  // 3. Multiplication
  it("Multiplication of two numbers", () => {
    // let a = 10;
    // let b = 10;

    const expected = 100;
    const actual = multiply(a, b);

    assert.equal(expected, actual);
  });

  // 4. Division
  it("Division of two numbers", () => {
    // let a = 10;
    // let b = 10;

    const expected = 1;
    const actual = divide(a, b);

    assert.equal(expected, actual);
  });
});
