import React from 'react';

function MessagesCounter({ count }) {
  if (count <= 0) {
    return null;
  }

  return (
    <span className="px-1 py-px rounded-lg font-semibold text-xs leading-none text-white bg-green-400">
      {count}
    </span>
  );
}

export default MessagesCounter;
