import React, { useContext, useState } from 'react';
import classnames from 'classnames';

import { Context } from './Router';
import Button from './com/Button.js';

function Identity() {
  const { setRoute } = useContext(Context);
  const [working, setWorking] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitText = working ? 'Working on...' : 'Sign In';

  const submitClasses = classnames('mt-6 text-white', {
    'bg-blue-600': !working,
    'bg-blue-400': working,
  });

  function createOrLogin(e) {
    e.preventDefault();
    setWorking(true);
    setTimeout(() => setWorking(false), 4000);
  }

  return (
    <div className="mx-auto max-w-sm bg-white border px-6 py-10">
      <h1 className="text-2xl font-semibold text-center">Gordon</h1>

      <p className="text-center text-gray-600">
        Create or login into your account
      </p>

      <form className="mt-8" onSubmit={createOrLogin}>
        <div>
          <input
            type="text"
            placeholder="Your username"
            className="px-2 py-1 w-full border rounded focus:border-blue-600"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={working}
          />
        </div>

        <div className="mt-4">
          <input
            type="password"
            placeholder="Your password"
            className="px-2 py-1 w-full border rounded focus:border-blue-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={working}
          />
        </div>

        <Button className={submitClasses} disabled={working}>
          {submitText}
        </Button>
      </form>
    </div>
  );
}

export default Identity;
