import React from 'react';

import IdentityItem from './IdentityItem';
import useIdentities from '../io/useIndentities';
import useStore from '../useStore';

function IdentitiesList() {
  const [state] = useStore();
  const [users] = useIdentities();

  const items = users.map((current) => (
    <IdentityItem
      key={current.username}
      username={current.username}
      active={state.chat === current.username}
    />
  ));

  return (
    <ul className="overflow-y-hidden bg-gray-100 h-full w-1/3">{items}</ul>
  );
}

export default IdentitiesList;
