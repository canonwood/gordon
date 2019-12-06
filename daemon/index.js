const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const session = require('./session');
const router = require('./router');
const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json({ type: '*/*' }));
app.use(router);

const server = http.createServer(app);
const io = socketio(server);

io.on('connection', function(socket) {
  console.log('a user connected');

  socket.on('disconnect', function() {
    console.log('disconnected user');
  });

  socket.on('users:get', function() {
    socket.emit('users:list', session.getIdentities());
  });

  socket.on('message:push', function(message) {
    console.log('message: ' + message);
  });
});

server.listen(PORT, function() {
  console.log(`Gordon Daemon listening on port ${PORT}`);
});
