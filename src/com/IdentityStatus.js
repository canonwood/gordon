import React from 'react';

function IdentityStatus({ online }) {
  if (online) {
    return (
      <span className="block text-xs font-semibold text-green-400">ONLINE</span>
    );
  }

  return <span className="block text-xs font-semibold text-gray-400">OFFLINE</span>;
}

export default IdentityStatus;
