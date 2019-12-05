const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.send('Gordon Messaging App');
});

module.exports = router;
