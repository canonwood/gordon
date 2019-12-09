import React, { Fragment } from 'react';

import Button from './com/Button';
import IdentitiesList from './com/IdentitiesList';
import MessageLauncher from './com/MessageLauncher';
import MessagesCamp from './com/MessagesCamp';
import useMessages from './io/useMessages';
import useSocket from './io/useSocket';
import useStore from './useStore';

function Gordon() {
  const [state, dispatch] = useStore();
  useSocket(state.username);
  useMessages();

  return (
    <Fragment>
      <div className="flex mx-auto max-w-4xl gordon-height bg-white border">
        <IdentitiesList />

        <div className="flex flex-col w-2/3 border-l">
          <MessagesCamp />
          <MessageLauncher />
        </div>
      </div>

      <div className="mx-auto max-w-4xl text-right">
        <Button onClick={() => dispatch({ type: 'logout' })}>Sign Out</Button>
      </div>
    </Fragment>
  );
}

export default Gordon;
