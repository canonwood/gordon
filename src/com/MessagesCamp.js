import React, { useContext, useEffect, useState } from 'react';

import useStore from '../useStore';
import socket from '../io/context';
import MessageItem from './MessageItem';

function MessagesCamp() {
  const [state, dispatch] = useStore();
  const io = useContext(socket);
  const chat = state.chats[state.chat];

  useEffect(() => {
    function onMessage(message) {
      dispatch({ type: 'chat:camp:push', message, chat: state.chat });
    }

    io.on('message:new', onMessage);

    return () => {
      io.off('message:new', onMessage);
    };
  });

  if (chat) {
    const items = chat.camp.map((message) => (
      <MessageItem {...message} username={state.username} />
    ));

    return <ul className="px-4 flex-1">{items}</ul>;
  }

  return null;
}

export default MessagesCamp;
