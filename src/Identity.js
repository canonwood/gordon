import React, { Component, useContext } from 'react';

import { Context } from './Router';
import Button from './com/Button.js';

function Identity() {
  const { setRoute } = useContext(Context);

  return (
    <div className="mx-auto max-w-lg bg-white border px-6 py-4">
      <p>Identity App</p>
      <Button
        className="bg-blue-600 text-white"
        onClick={() => setRoute('app')}
      >
        Sign In
      </Button>
    </div>
  );
}

export default Identity;
