import { useContext, useEffect } from 'react';

import useStore from '../useStore';
import socket from './context';

function useMessages() {
  const [, dispatch] = useStore();
  const io = useContext(socket);

  useEffect(() => {
    function onMessage(message) {
      dispatch({ type: 'chat:camp:push', message, chat: message.from });
    }

    io.on('message:new', onMessage);

    return () => {
      io.off('message:new', onMessage);
    };
  });
}

export default useMessages;
