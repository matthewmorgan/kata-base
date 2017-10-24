// change the require as needed to import your business class from the correct .js file
const Kata = require('./kata');

// customize the descriptions of the suites and individual tests as needed
describe('Kata business class can', () => {
  test('return an instance of the Kata class', () => {
    const kata = new Kata();
    expect(kata.constructor.name).toEqual('Kata');
  });

  xtest('skip a test marked with "xtest" instead of "test"', () => {
    expect(null).toEqual(null);
  });
});
