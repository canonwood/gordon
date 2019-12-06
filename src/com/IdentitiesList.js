import React from 'react';

import IdentityItem from './IdentityItem';
import useAppState from '../useAppState';
import useIdentities from '../io/useIndentities';

function IdentitiesList() {
  const [state] = useAppState();
  const [users] = useIdentities();

  const items = users.map((current) => (
    <IdentityItem
      key={current.username}
      username={current.username}
      active={state.chat === current.username}
    />
  ));

  return (
    <ul className="overflow-y-scroll bg-gray-100 h-full w-1/3">{items}</ul>
  );
}

export default IdentitiesList;
