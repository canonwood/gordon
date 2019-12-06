import React, { useContext, useEffect, useState } from 'react';

import useAppState from '../useAppState';
import socket from '../io/context';
import MessageItem from './MessageItem';

function MessagesCamp() {
  const [messages, setMessages] = useState([]);
  const [state] = useAppState();
  const io = useContext(socket);

  useEffect(() => {
    function onMessage(message) {
      setMessages((all) => [...all, message]);
    }

    io.on('message:new', onMessage);

    return () => {
      io.off('message:new', onMessage);
    };
  });

  if (state.chat) {
    const items = messages.map((message) => (
      <MessageItem {...message} username={state.username} />
    ));

    return <ul className="px-4 flex-1">{items}</ul>;
  }

  return null;
}

export default MessagesCamp;
