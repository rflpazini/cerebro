const express = require('express');
const router = express.Router();

const searchTaxPayer = require('./SearchTaxPayer');

router.use('/search', searchTaxPayer);

router.get('/ping', (req, res) => {
  res.send('pong');
});

module.exports = router;
