const axios = require('axios');
const qs = require('qs');

const config = require('../../config');

const TaxPayerUtil = require('../utils/TaxPayerUtil');
const createError = require('http-errors');

class TaxPayer {
  static async getTaxPayer(req, res, next) {
    const requestBody = TaxPayer.prepareRequestbody(req.query);

    const requestConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    const response = await axios.post(
      config.api.external.ccc_service,
      requestBody,
      requestConfig
    );

    const err = TaxPayerUtil.verifyData(response.data);
    if (err) {
      return next(createError(400, 'Invalid state registry'));
    }

    res.status(response.status).end();
  }

  static prepareRequestbody(request) {
    const taxPayerNumber = request.cnpj;
    const taxPayerStateRegistryNumber = request.ie;
    const taxPayerUf = request.uf ? request.uf : '35';
    const environment = request.env ? request.env : '1';

    const requestBody = {
      codUf: taxPayerUf,
      codInscrMf: taxPayerNumber,
      codIe: taxPayerStateRegistryNumber,
      ambiente: environment,
      tipoInscrMf: '1',
    };

    return qs.stringify(requestBody);
  }
}

module.exports = TaxPayer;
