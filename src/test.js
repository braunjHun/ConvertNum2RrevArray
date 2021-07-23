const { Digitize } = require('./digitize');

describe('Test "convert number to reversed array of digits" functions', () => {
  it('Basic test with one number', () => {
    const digitize = new Digitize();
    expect(digitize.digitize(1)).toStrictEqual([1]);
  });
  it('Test with two numbers', () => {
    const digitize = new Digitize();
    expect(digitize.digitize(12)).toStrictEqual([2,1]);
  });  
});