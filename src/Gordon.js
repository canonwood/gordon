import React, { useContext, Fragment, useState } from 'react';

import { Context } from './Router';
import Button from './com/Button';

function Gordon() {
  const [message, setMessage] = useState('');
  const { setRoute } = useContext(Context);

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

        <div className="bg-gray-100 h-full w-1/3"></div>
      </div>

      <div className="mx-auto max-w-4xl text-right">
        <Button onClick={() => setRoute('/')}>Sign Out</Button>
      </div>
    </Fragment>
  );
}

export default Gordon;
