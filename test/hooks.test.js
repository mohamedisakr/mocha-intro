describe.skip("Mocha Hooks", () => {
  before("Execute Before All Tests", () => {
    console.log("Execute Before All Tests");
  });

  beforeEach("Execute Before Each Test", () => {
    console.log("Execute Before Each Test");
  });

  after("Execute After All Tests", () => {
    console.log("Execute After All Tests");
  });

  afterEach("Execute After Each Test", () => {
    console.log("Execute Before Each Test");
  });

  it("Mocha Hooks Test", () => {
    console.log("Mocha - This is a Test for Mocha Hooks");
  });
});
