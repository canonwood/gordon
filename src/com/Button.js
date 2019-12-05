import React from 'react';

function Button(props) {
  const { className, children, ...rest } = props;

  const classes = ['px-2 py-1 rounded font-bold', className].join(' ');

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

export default Button;
