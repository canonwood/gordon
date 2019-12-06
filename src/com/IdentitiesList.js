import React from 'react';

import useIdentities from '../io/useIndentities';
import IdentityItem from './IdentityItem';

function IdentitiesList() {
  const [users] = useIdentities();

  const items = users.map((username) => (
    <IdentityItem key={username} username={username} />
  ));

  return (
    <ul className="overflow-y-scroll bg-gray-100 h-full w-1/3">{items}</ul>
  );
}

export default IdentitiesList;
