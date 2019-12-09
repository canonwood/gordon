import React from 'react';
import classnames from 'classnames';

function IdentityStatus({ online }) {
  const classes = classnames(
    'absolute rounded-full w-3 h-3 border-2 border-gray-800',
    {
      'bg-gray-700': !online,
      'bg-secondary': online,
    },
  );

  return <div className={classes} style={{ bottom: -1, right: -1 }}></div>;
}

export default IdentityStatus;
