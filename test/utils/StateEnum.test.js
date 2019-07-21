const createError = require('http-errors');

const StateEnum = require('../../src/utils/StateEnum');

describe('State enum', () => {
  test('should get SP code', () => {
    //given
    const mockedState = 'SP';

    // when
    const actual = StateEnum.getStateCode(mockedState);
    //then
    expect(actual).toBe('35');
  });

  test('should get RJ code', () => {
    //given
    const mockedState = 'RJ';

    // when
    const actual = StateEnum.getStateCode(mockedState);
    //then
    expect(actual).toBe('33');
  });

  test('should get AL code', () => {
    //given
    const mockedState = 'AL';

    // when
    const actual = StateEnum.getStateCode(mockedState);

    //then
    expect(actual).toBe('27');
  });

  test('should return error when not find a state', () => {
    //given
    const mockedState = 'SEE';

    // when
    const actual = StateEnum.getStateCode(mockedState);

    //then
    expect(actual).toThrowErrorMatchingSnapshot;
  });
});
