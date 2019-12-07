import React from 'react';

import useStore from '../useStore';
import MessageItem from './MessageItem';

function MessagesCamp() {
  const [state] = useStore();
  const chat = state.chats[state.chat];

  if (chat) {
    const items = chat.camp.map((message) => (
      <MessageItem {...message} username={state.username} />
    ));

    return (
      <ul className="flex flex-col overflow-y-auto px-4 mt-auto">{items}</ul>
    );
  }

  return null;
}

export default MessagesCamp;
