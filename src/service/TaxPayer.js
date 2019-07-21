const createError = require('http-errors');
const axios = require('axios');
const qs = require('qs');

const config = require('../../config');

const TaxPayerUtil = require('../utils/TaxPayerUtil');
const StateEnum = require('../utils/StateEnum');

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

    const err = TaxPayerUtil.isInvalidData(response.data);
    if (err) {
      return next(createError(400, 'Invalid state registry'));
    }

    res.status(response.status).end();
  }

  static prepareRequestbody(request) {
    const taxPayerNumber = request.cnpj;
    const taxPayerStateRegistryNumber = request.ie;
    const taxPayerUf = request.uf ? request.uf : 'SP';
    const environment = request.env ? request.env : '1';

    const requestBody = {
      codInscrMf: taxPayerNumber,
      codIe: taxPayerStateRegistryNumber,
      codUf: StateEnum.getStateCode(taxPayerUf),
      ambiente: environment,
      tipoInscrMf: '1',
    };

    return qs.stringify(requestBody);
  }
}

module.exports = TaxPayer;
