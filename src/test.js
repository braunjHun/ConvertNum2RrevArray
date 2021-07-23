const { Digitize } = require('./digitize');

describe('Test "convert number to reversed array of digits" functions', () => {
  it('Basic test ', () => {
    const digitize = new Digitize();
    expect(digitize.digitize(1)).toStrictEqual([1]);
  });
});