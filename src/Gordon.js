import React, { useContext, Fragment } from 'react';

import { Context } from './Router';
import Button from './com/Button';

function Gordon() {
  const { setRoute } = useContext(Context);

  return (
    <Fragment>
      <div className="py-2 mx-auto max-w-4xl bg-white border rounded-t -mb-1">
        <p className="text-center text-lg font-semibold text-gray-600">
          Gordon
        </p>
      </div>

      <div className="flex mx-auto max-w-4xl gordon-height bg-white border">
        <div className="w-2/3 border-r"></div>
        <div className="bg-gray-200 h-full w-1/3"></div>
      </div>

      <div className="mx-auto max-w-4xl text-right">
        <Button onClick={() => setRoute('/')}>Sign Out</Button>
      </div>
    </Fragment>
  );
}

export default Gordon;
