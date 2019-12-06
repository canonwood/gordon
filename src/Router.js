import React, { useState } from 'react';

import { Context } from './useAppState';

function NotFound() {
  return (
    <div className="mx-auto max-w-xl">
      <p className="text-center">Not Found</p>
    </div>
  );
}

function Router(props) {
  const [chat, setChat] = useState(null);
  const [route, setRoute] = useState('/');
  const { routes = {} } = props;

  const Component = routes[route] || NotFound;

  const value = {
    state: {
      chat,
      route,
    },
    mods: {
      setChat,
      setRoute,
    },
  };

  return (
    <Context.Provider value={value}>
      <Component />
    </Context.Provider>
  );
}

export default Router;
