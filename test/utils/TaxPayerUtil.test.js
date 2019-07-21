const TaxPayerUtil = require('../../src/utils/TaxPayerUtil');

describe('Tax payer util', () => {
  test('should validate if data is valid (contain a class word)', () => {
    //given
    const mockedPhrase = 'This phrase contains <class> word';

    //then
    expect(TaxPayerUtil.isInvalidData(mockedPhrase)).toBe(false);
  });

  test('should validate if data has returned a content with the word class', () => {
    //given
    const mockedPhrase = 'Not valid path';

    //then
    expect(TaxPayerUtil.isInvalidData(mockedPhrase)).toBe(true);
  });
});
