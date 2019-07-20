const express = require('express');

const router = express.Router();
const TaxPayer = require('../service/TaxPayer');

const { getTaxPayer } = TaxPayer;

router.get('/', getTaxPayer);

module.exports = router;
