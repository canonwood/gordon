import React, { useContext } from 'react';

import { Context } from './Router';
import Button from './com/Button';

function Gordon() {
  const { setRoute } = useContext(Context);

  return (
    <div className="mx-auto max-w-lg bg-white border px-6 py-4">
      <p>Gordon Messaging App</p>
      <Button className="bg-blue-600 text-white" onClick={() => setRoute('/')}>
        Sign Out
      </Button>
    </div>
  );
}

export default Gordon;
