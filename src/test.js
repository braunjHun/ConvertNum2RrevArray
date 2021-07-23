const { Digitize } = require('./digitize');

describe('Test "convert number to reversed array of digits" functions', () => {
  it('Single number', () => {
    const digitize = new Digitize();
    expect(digitize.digitize(1)).toStrictEqual([1]);
  });
  it('Two numbers', () => {
    const digitize = new Digitize();
    expect(digitize.digitize(12)).toStrictEqual([2,1]);
  });  
  it('Three numbers', () => {
    const digitize = new Digitize();
    expect(digitize.digitize(123)).toStrictEqual([3,2,1]);
  });
});