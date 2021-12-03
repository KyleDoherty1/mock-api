/* eslint-disable no-console */
const express = require('express');

const router = express.Router();

router.put('/', (req, res) => {
  console.log('Body of Request: ');
  console.log(req.body);
  console.log('This instanceId and stage resolves to: ');
  console.log({
    type: 'customer',
    id: 5291
  });
  res.json({
    type: 'customer',
    id: 1111
  });
});

module.exports = router;
