import React from 'react';

import IdentityItem from './IdentityItem';
import useIdentities from '../io/useIdentities';
import useStore from '../useStore';

function IdentitiesList() {
  const [state] = useStore();
  const [users] = useIdentities();

  const items = users.map((current) => (
    <IdentityItem
      key={current.username}
      {...current}
      active={state.chat === current.username}
      unread={(state.chats[current.username] || { unread: 0 }).unread}
    />
  ));

  return (
    <ul className="overflow-y-hidden w-1/3 bg-gray-900 text-gray-200">
      {items}
    </ul>
  );
}

export default IdentitiesList;
