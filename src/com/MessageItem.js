import React from 'react';
import classnames from 'classnames';

function MessageItem(props) {
  const { content, to, from, username } = props;

  const spanClasses = classnames(
    'px-3 py-1 inline-block max-w-sm',
    'break-words rounded-t-lg',
    {
      'bg-primary text-white rounded-br-lg': to === username,
      'bg-white border text-gray-800 rounded-bl-lg': from === username,
    },
  );

  const liClasses = classnames('mt-3', {
    'text-right': from === username,
    'text-left': to === username,
  });

  return (
    <li className={liClasses}>
      <span className={spanClasses}>{content}</span>
    </li>
  );
}

export default MessageItem;
