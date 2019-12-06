const sessions = {};

function exists(username) {
  const session = sessions[username];
  return typeof session === 'object';
}

function getIdentity(username) {
  return sessions[username];
}

function isIdentity(identity) {
  if (typeof identity !== 'object') {
    return false;
  }

  return identity.username && identity.password;
}

function create(identity) {
  if (isIdentity(identity)) {
    sessions[identity.username] = Object.assign({}, identity);
    return identity;
  }

  return null;
}

function getIdentities() {
  return sessions;
}

function getSocketId(username) {
  const identity = getIdentity(username) || {};
  return identity.socketId;
}

function setSocketId(username, socketId) {
  if (exists(username)) {
    const identity = getIdentit(username);
    identity.socketId = socketId;
  }
}

module.exports = {
  create: create,
  exists: exists,
  getIdentities: getIdentities,
  getIdentity: getIdentity,
  getSocketId: getSocketId,
  isIdentity: isIdentity,
  sessions: sessions,
  setSocketId: setSocketId,
};
