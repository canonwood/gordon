const express = require('express');
const router = express.Router();

const defaultCredential = { username: '', password: '' };
const sessions = {};

router.get('/', function(req, res) {
  res.send('Gordon Messaging App');
});

router.post('/identity', function(req, res) {
  const credential = Object.assign(defaultCredential, req.body);
  const { username, password } = credential;

  if (username === '' || password === '') {
    return res.sendStatus(403);
  }

  const session = sessions[username];

  if (typeof session === 'undefined') {
    sessions[username] = password;
    return res.sendStatus(200);
  } else if (session === password) {
    return res.sendStatus(200);
  }

  return res.sendStatus(403);
});

module.exports = router;
