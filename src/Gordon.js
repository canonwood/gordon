import React, { useContext, Fragment, useState, useEffect } from 'react';
import io from './io/context.js';

import { Context } from './Router';
import Button from './com/Button';
import IdentitiesList from './com/IdentitiesList';

function Gordon() {
  const [message, setMessage] = useState('');
  const { setRoute } = useContext(Context);
  const socket =  useContext(io)

  useEffect(() => {
    socket.connect();
    return () => socket.disconnect();
  }, [socket]);

  return (
    <Fragment>
      <div className="py-2 mx-auto max-w-4xl bg-white border rounded-t -mb-1">
        <p className="text-center text-lg font-semibold text-gray-600">
          Gordon
        </p>
      </div>

      <div className="flex mx-auto max-w-4xl gordon-height bg-white border">
        <div className="flex flex-col w-2/3 border-r">
          <div className="flex-1"></div>

          <div className="bg-white border-t px-2 py-2">
            <textarea
              className="w-full border px-2 py-1"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write a message"
            />
          </div>
        </div>

        <IdentitiesList />
      </div>

      <div className="mx-auto max-w-4xl text-right">
        <Button onClick={() => setRoute('/')}>Sign Out</Button>
      </div>
    </Fragment>
  );
}

export default Gordon;
