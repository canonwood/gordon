import React, { useContext, useState } from 'react';
import classnames from 'classnames';

import socket from '../io/context';
import useAppState from '../useAppState';

function MessageLauncher() {
  const io = useContext(socket);
  const [state] = useAppState();
  const { chat } = state;
  const [message, setMessage] = useState('');

  if (chat === null) {
    return null;
  }

  const hasMessage = message.length > 0;

  const launchMessage = (e) => {
    io.emit('message:push', {
      content: message,
      to: state.chat,
      from: state.username,
    });

    setMessage('');
  };

  const buttonClasses = classnames(
    'border-l px-4 font-bold focus:outline-none',
    {
      'text-gray-800': hasMessage,
      'text-gray-400': !hasMessage,
    },
  );

  return (
    <div className="px-3 py-3">
      <div className="flex overflow-hidden border rounded text-gray-800">
        <input
          className="w-full pl-2 py-1"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message"
          type="text"
          value={message}
        />

        <button onClick={launchMessage} className={buttonClasses}>
          Send
        </button>
      </div>
    </div>
  );
}

export default MessageLauncher;
