const expect = require("chai").expect;
const { array } = require("../arrays-ops");

describe.skip("Working with arrays", () => {
  //
  it("check array type", () => {
    expect(array).to.be.an("array");
  });

  //
  it("check if array includes an element", () => {
    expect(array).that.includes(30);
  });
});
