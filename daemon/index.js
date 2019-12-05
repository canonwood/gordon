const express = require('express');
const http = require('http');

const router = require('./router');
const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json({ type: '*/*' }));
app.use(router);

const server = http.createServer(app);

server.listen(PORT, function() {
  console.log(`Gordon Daemon listening on port ${PORT}`);
});
