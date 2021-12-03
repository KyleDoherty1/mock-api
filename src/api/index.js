const express = require('express');

const instance = require('./instance');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🏻'
  });
});

router.use('/instance', instance);

module.exports = router;
