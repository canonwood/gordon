import React from 'react';

function IdentityItem(props) {
  const { username } = props;

  return (
    <li className="flex items-center px-3 py-2 border-b bg-white select-none cursor-pointer hover:bg-gray-100">
      <span className="inline-block rounded-full w-10 h-10 bg-gray-200"></span>
      <span className="ml-2">{username}</span>
      <span className="ml-auto inline-block rounded-full w-2 h-2 bg-green-400"></span>
    </li>
  );
}

export default IdentityItem;
