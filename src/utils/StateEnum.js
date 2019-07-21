const createError = require('http-errors');

const STATES = {
  ac: '12',
  al: '27',
  am: '13',
  ap: '16',
  ba: '29',
  ce: '23',
  df: '53',
  es: '32',
  go: '52',
  ma: '21',
  mg: '31',
  ms: '50',
  mt: '51',
  pa: '15',
  pb: '25',
  pe: '26',
  pi: '22',
  pr: '41',
  rj: '33',
  rn: '24',
  ro: '11',
  rr: '14',
  rs: '43',
  sc: '42',
  se: '28',
  sp: '35',
  to: '17',
};

Object.freeze(STATES);

class StateEnum {
  static getStateCode(state) {
    if (STATES[state.toLowerCase()]) {
      return STATES[state.toLowerCase()];
    }

    return createError.NotFound('Invalid state or not found...');
  }
}

module.exports = StateEnum;
