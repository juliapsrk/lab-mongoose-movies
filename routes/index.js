const express = require('express');
const router = express.Router();

// Handle GET request for website root
router.get('/', (req, res, next) => {
  res.render('index');
  console.log('YYY');
});

module.exports = router;
