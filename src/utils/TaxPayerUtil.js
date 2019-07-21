class TaxPayerUtil {
  static verifyData(data) {
    return !data.includes('class');
  }
}

module.exports = TaxPayerUtil;
