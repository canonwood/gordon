import React from 'react';

function MessagesCounter({ count }) {
  if (count <= 0) {
    return null;
  }

  return (
    <div className="bg-red-600 flex h-5 items-center justify-center rounded-full w-5">
      <span className="font-semibold text-white text-xs">{count}</span>
    </div>
  );
}

export default MessagesCounter;
