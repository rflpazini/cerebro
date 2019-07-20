const axios = require('axios');
const qs = require('qs');

const config = require('../../config');

class TaxPayer {
  static async getTaxPayer(req, res) {
    const taxPayerNumber = req.query.cnpj;
    const taxPayerStateRegistryNumber = req.query.ie;
    const taxPayerUf = req.query.uf ? req.query.uf : '35';
    const environment = req.query.env ? req.query.env : '1';

    const requestBody = {
      codUf: taxPayerUf,
      codInscrMf: taxPayerNumber,
      codIe: taxPayerStateRegistryNumber,
      ambiente: environment,
      tipoInscrMf: '1',
    };

    const requestConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    const response = await axios.post(
      config.api.external.ccc_service,
      qs.stringify(requestBody),
      requestConfig
    );

    return res.status(response.status).end();
  }
}

module.exports = TaxPayer;
