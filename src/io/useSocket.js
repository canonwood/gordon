import { useContext, useEffect } from 'react';

import io from '../io/context';

function useSocket() {
  const socket = useContext(io);

  useEffect(() => {
    socket.connect();

    return () => socket.disconnect();
  }, [socket]);
}

export default useSocket;
