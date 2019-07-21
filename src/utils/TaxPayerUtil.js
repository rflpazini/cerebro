class TaxPayerUtil {
  static isInvalidData(data) {
    return !data.includes('class');
  }
}

module.exports = TaxPayerUtil;
