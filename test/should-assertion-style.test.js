const should = require("chai").should();
const { createObject } = require("../chai-assertion");

describe.only("Working with arrays", () => {
  //
  it("object is typeof object", () => {
    const a = new createObject();
    a.should.be.an("object");
  });

  //
  it("object deep equal", () => {
    const a = new createObject();
    const b = new createObject();
    a.should.to.be.deep.equals(b);
  });
});
