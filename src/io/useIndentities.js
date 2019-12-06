import { useContext, useEffect, useState } from 'react';

import socket from './context';

function useIdentities() {
  const [identities, setIdentities] = useState([]);

  const io = useContext(socket);

  useEffect(() => {
    function mergeIdentities(data) {
      return function merge(identity) {
        const current = data[identity.username];

        if (current) {
          delete data[identity.username];
          return Object.assign({}, identity, current);
        }

        return identity;
      };
    }

    function mergeIdentitiesCallback(data) {
      setIdentities((current) => {
        const updates = identities.map(mergeIdentities(data));
        const values = Object.values(data);
        const merges = values.reduce((all, next) => [...all, next], updates);
        return merges;
      });
    }

    function connected() {
      io.emit('users:get');
    }

    io.on('users:list', mergeIdentitiesCallback);
    io.on('connect', connected);

    return () => {
      io.off('users:list', mergeIdentitiesCallback);
      io.off('connect', connected);
    };
  }, [io]);

  return [identities];
}

export default useIdentities;
