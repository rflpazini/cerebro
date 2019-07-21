const TaxPayerUtil = require('../../src/utils/TaxPayerUtil');

describe('Tax payer util', () => {
  test('should validate if data is valid (contain a class word)', () => {
    const mockedPhrase = 'This phrase contains <class> word';
    expect(TaxPayerUtil.isInvalidData(mockedPhrase)).toBe(false);
  });

  test('should validate if data has returned a content with the word class', () => {
    const mockedPhrase = 'Not valid path';
    expect(TaxPayerUtil.isInvalidData(mockedPhrase)).toBe(true);
  });
});
