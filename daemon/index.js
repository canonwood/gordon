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

io.use(function(socket, next) {
  const username = socket.handshake.query.username;

  if (session.exists(username)) {
    session.setSocketId(username, socket.id);
    socket.identity = session.getIdentity(username);
    return next();
  }

  return next(new Error('Session error.'));
});

io.on('connection', function(socket) {
  console.log('a user connected');

  session.setOnline(socket.identity);
  socket.broadcast.emit('user:change', socket.identity);

  socket.on('disconnect', function() {
    console.log('disconnected user');

    session.setOnline(socket.identity, false);
    socket.broadcast.emit('user:change', socket.identity);
  });

  socket.on('users:get', function() {
    socket.emit('users:list', session.getIdentities());
  });

  socket.on('message:push', function(message) {
    const identity = session.getIdentity(message.to);

    if (identity) {
      io.to(identity.socketId).emit('message:new', message);
    }
  });
});

server.listen(PORT, function() {
  console.log(`Gordon Daemon listening on port ${PORT}`);
});
