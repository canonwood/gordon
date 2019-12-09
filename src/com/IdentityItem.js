import React from 'react';
import classnames from 'classnames';

import useStore from '../useStore';
import MessagesCounter from './MessagesCounter';
import IdentityStatus from './IdentityStatus';

function IdentityItem(props) {
  const { username, active, online, unread } = props;
  const [, dispatch] = useStore();

  const classes = classnames(
    'flex items-center px-3 py-2 border-b border-gray-800 select-none h-16',
    {
      'cursor-pointer hover:bg-gray-700': !active,
      'bg-gray-800': active,
    },
  );

  const action = active
    ? () => {}
    : () => {
        dispatch({ type: 'chat:set', username });
        dispatch({ type: 'chat:unread:reset', chat: username });
      };

  return (
    <li className={classes} onClick={action}>
      <div className="relative">
        <div className="rounded-full w-10 h-10 bg-gray-500"></div>
        <IdentityStatus online={online} />
      </div>

      <span className="ml-4 mr-auto">{username}</span>

      <MessagesCounter count={unread} />
    </li>
  );
}

IdentityItem.defaultProps = {
  active: false,
};

export default IdentityItem;
