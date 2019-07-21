const TaxPayer = require('../../src/service/TaxPayer');
const qs = require('qs');

describe('TaxPayer service', () => {
  test('should prepare body request and return a string', () => {
    // given
    const mockedRequestBody = {
      cnpj: '1312323',
      ie: '1232321',
      uf: '23',
      env: '2',
    };

    const response = {
      codInscrMf: '1312323',
      codIe: '1232321',
      codUf: '23',
      ambiente: '2',
      tipoInscrMf: '1',
    };

    const expected = qs.stringify(response);

    // when
    const actual = TaxPayer.prepareRequestbody(mockedRequestBody);

    //then
    expect(actual).toEqual(expected);
  });

  test('should prepare body request with default state and environment', () => {
    // given
    const mockedRequestBody = {
      cnpj: '1312323',
      ie: '1232321',
    };

    const response = {
      codInscrMf: '1312323',
      codIe: '1232321',
      codUf: '35',
      ambiente: '1',
      tipoInscrMf: '1',
    };

    const expected = qs.stringify(response);

    // when
    const actual = TaxPayer.prepareRequestbody(mockedRequestBody);

    //then
    expect(actual).toEqual(expected);
  });
});
