import React, { Fragment } from 'react';

import Button from './com/Button';
import IdentitiesList from './com/IdentitiesList';
import MessageLauncher from './com/MessageLauncher';
import MessagesCamp from './com/MessagesCamp';
import useAppState from './useAppState';
import useSocket from './io/useSocket';

function Gordon() {
  const [state, mods] = useAppState();
  useSocket(state.username);

  return (
    <Fragment>
      <div className="py-2 mx-auto max-w-4xl bg-white border rounded-t -mb-1">
        <p className="text-center text-lg font-semibold text-gray-600">
          Gordon
        </p>
      </div>

      <div className="flex mx-auto max-w-4xl gordon-height bg-white border">
        <div className="flex flex-col w-2/3 border-r">
          <MessagesCamp />
          <MessageLauncher />
        </div>

        <IdentitiesList />
      </div>

      <div className="mx-auto max-w-4xl text-right">
        <Button onClick={mods.logout}>Sign Out</Button>
      </div>
    </Fragment>
  );
}

export default Gordon;
