const axios = require('axios');
const qs = require('qs');

const config = require('../../config');

class TaxPayer {
  static async getTaxPayer(req, res) {
    const requestBody = await this.prepareRequestBody(req.query);

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

  async prepareRequestBody(request) {
    const taxPayerNumber = request.cnpj;
    const taxPayerStateRegistryNumber = request.ie;
    const taxPayerUf = request.uf ? request.uf : '35';
    const environment = request.env ? request.env : '1';

    return {
      codUf: taxPayerUf,
      codInscrMf: taxPayerNumber,
      codIe: taxPayerStateRegistryNumber,
      ambiente: environment,
      tipoInscrMf: '1',
    };
  }
}

module.exports = TaxPayer;
