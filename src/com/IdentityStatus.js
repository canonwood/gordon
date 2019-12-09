import React from 'react';
import classnames from 'classnames';

function IdentityStatus({ online }) {
  const classes = classnames(
    'absolute rounded-full w-3 h-3 border border-gray-900',
    {
      'bg-gray-500': !online,
      'bg-secondary': online,
    },
  );

  return <div className={classes} style={{ bottom: -1, left: -1 }}></div>;
}

export default IdentityStatus;
