import React from 'react';

import IdentityItem from './IdentityItem';
import useIdentities from '../io/useIndentities';
import useStore from '../useStore';

function IdentitiesList() {
  const [state] = useStore();
  useIdentities();

  const items = state.users.map((current) => (
    <IdentityItem
      key={state.username}
      username={state.username}
      active={state.chat === state.username}
    />
  ));

  return (
    <ul className="overflow-y-scroll bg-gray-100 h-full w-1/3">{items}</ul>
  );
}

export default IdentitiesList;
