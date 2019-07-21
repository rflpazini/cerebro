const TaxPayerUtil = require('../../src/utils/TaxPayerUtil');

describe('Tax payer util', () => {
  test('should validate if data has returned a content with the word class', () => {
    const mockedPhrase = 'This phrase contains class word';
    expect(TaxPayerUtil.verifyData(mockedPhrase)).toBe(false);
  });
});
