import React from 'react';
import classnames from 'classnames';

import useStore from '../useStore';

function IdentityItem(props) {
  const { username, active } = props;
  const [, dispatch] = useStore();

  const classes = classnames(
    'flex items-center px-3 py-2 border-b select-none',
    {
      'bg-white cursor-pointer hover:bg-gray-100': !active,
      'bg-gray-100': active,
    },
  );

  const action = active
    ? () => {}
    : () => dispatch({ type: 'chat:set', username });

  return (
    <li className={classes} onClick={action}>
      <span className="inline-block rounded-full w-10 h-10 bg-gray-300 border border-white"></span>
      <span className="ml-2">{username}</span>
      <span className="ml-auto inline-block rounded-full w-2 h-2 bg-green-400"></span>
    </li>
  );
}

IdentityItem.defaultProps = {
  active: false,
};

export default IdentityItem;
