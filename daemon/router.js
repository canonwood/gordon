const express = require('express');
const router = express.Router();

const session = require('./session');

router.get('/', function(req, res) {
  res.send('Gordon Messaging App');
});

router.post('/identity', function(req, res) {
  const identity = req.body;

  if (!session.isIdentity(identity)) {
    return res.sendStatus(403);
  }

  if (session.exists(identity.username)) {
    return res.sendStatus(200);
  }

  if (session.create(identity)) {
    return res.sendStatus(200);
  }

  return res.sendStatus(403);
});

module.exports = router;
