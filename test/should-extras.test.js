const should = require("chai").should();

const { writeToFile } = require("../should-extras");

describe.only("should extras", () => {
  //
  it("should will not work", () => {
    // a = writeToFile(new Error("should will not work"));
    const theError = new Error("should will not work");
    const a = writeToFile(theError);
    a.should.be.an("object");
  });
});
