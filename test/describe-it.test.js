const assert = require("assert");
const { add, subtract, divide, multiply } = require("../math-clac");

describe.skip("Mathematical Operations - Test Suite", function () {
  // 1. Addition
  it("Addition of two numbers", function () {
    var a = 10;
    var b = 10;

    const expected = 20;
    const actual = add(a, b);

    assert.equal(expected, actual);
  });

  // 2. Subtraction
  it("Subtraction of two numbers", function () {
    var a = 10;
    var b = 10;

    const expected = 0;
    const actual = subtract(a, b);

    assert.equal(expected, actual);
  });

  // 3. Multiplication
  it("Multiplication of two numbers", function () {
    var a = 10;
    var b = 10;

    const expected = 100;
    const actual = multiply(a, b);

    assert.equal(expected, actual);
  });

  // 4. Division
  it("Division of two numbers", function () {
    var a = 10;
    var b = 10;

    const expected = 1;
    const actual = divide(a, b);

    assert.equal(expected, actual);
  });
});
