const expect = require("chai").expect;
// const { add, subtract, divide, multiply } = require("../math-clac");
const { createObject } = require("../chai-assertion");

describe.skip("Chai Object Assertion", () => {
  //
  it("object is typeof object", () => {
    const a = createObject();
    expect(a).to.be.an("object");
  });

  //
  it("object deep equal", () => {
    const a = new createObject();
    const b = new createObject();

    expect(a).to.be.deep.equals(b);
  });
});

/*
describe.only("Mathematical Operations - Test Suite", () => {
  // 1. Addition
  it("Addition of two numbers", () => {
    var a = 10;
    var b = 10;

    const expected = 20;
    const actual = add(a, b);

    expect(expected).to.be.equal(actual);
  });

  // 2. Subtraction
  it("Subtraction of two numbers", () => {
    var a = 10;
    var b = 10;

    const expected = 0;
    const actual = subtract(a, b);

    expect(expected).to.be.equal(actual);
  });

  // 3. Multiplication
  it("Multiplication of two numbers", () => {
    var a = 10;
    var b = 10;

    const expected = 100;
    const actual = multiply(a, b);

    expect(expected).to.be.equal(actual);
  });

  // 4. Division
  it("Division of two numbers", () => {
    var a = 10;
    var b = 10;

    const expected = 1;
    const actual = divide(a, b);

    expect(expected).to.be.equal(actual);
  });
});
*/
