// 3 different configurations
// includeStack, showDiff, truncateThreshold

const chai = require("chai");
const expect = chai.expect;
const should = chai.should();

chai.config.showDiff = false; // turn off reporter diff display
chai.config.truncateThreshold = 0; // disable truncating
chai.config.includeStack = true; // turn on stack trace

describe.skip("objects", () => {
  it("should equal", () => {
    let a = {
      a: 1,
      b: 2,
      c: {
        a: 1,
        b: 2,
        c: {
          a: 1,
          b: 2,
          x: 3,
        },
      },
    };

    let b = {
      a: 1,
      b: 2,
      c: {
        a: 1,
        b: 2,
        c: {
          a: 1,
          b: 2,
          x: 4,
        },
      },
    };
    a.should.deep.equal(b);
    // expect(a).to.be.deep.equals(b);
  });
});
