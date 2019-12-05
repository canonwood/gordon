import { useContext, useEffect, useState } from 'react';

import socket from './context';

function useIdentities() {
  const [identities, setIdentities] = useState([]);

  const io = useContext(socket);

  useEffect(() => {
    function mergeIndentities(data) {
      setIdentities((current) => {
        current.forEach((identity) => (data[identity] = true));
        return Object.keys(data);
      });
    }

    function connected() {
      io.emit('users:get');
    }

    io.on('users:list', mergeIndentities);
    io.on('connect', connected);

    return () => {
      io.off('users:list', mergeIndentities);
      io.off('connect', connected);
    };
  }, [io]);

  return [identities];
}

export default useIdentities;
