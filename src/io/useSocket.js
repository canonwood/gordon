import { useContext, useEffect } from 'react';

import io from '../io/context';

function useSocket(username) {
  const socket = useContext(io);

  useEffect(() => {
    if (username) {
      socket.io.opts.query = { username };
      socket.connect();
      return () => socket.disconnect();
    }

    return () => {};
  }, [username, socket]);
}

export default useSocket;
