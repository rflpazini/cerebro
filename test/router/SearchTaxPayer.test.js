const request = require('supertest');
const app = require('../../app');

describe('Search tax payer routes', () => {
  afterAll(done => {
    app.close(done);
  });

  test('should return 200 on search endpoint', done => {
    const mockedCnpj = '03007331000141';
    const mockedIe = '120079527111';

    request(app)
      .get(`/search?cnpj=${mockedCnpj}&ie=${mockedIe}`)
      .end((err, res) => {
        expect(res.status).toEqual(200);
        done();
      });
  });

  test("should return 400 when same data wasn't providade", done => {
    const mockedCnpj = '03007331000141';
    const mockedIe = '120079527111';
    const mockedWrongState = '33';

    request(app)
      .get(`/search?cnpj=${mockedCnpj}&ie=${mockedIe}&uf=${mockedWrongState}`)
      .end((err, res) => {
        expect(res.status).toEqual(400);
        expect(res.text).toContain('Invalid state registry');
        done();
      });
  });
});
