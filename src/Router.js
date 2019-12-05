import React, { createContext, useState } from 'react';

function NotFound() {
  return (
    <div className="mx-auto max-w-xl">
      <p className="text-center">Not Found</p>
    </div>
  );
}

export const Context = createContext({});

function Router(props) {
  const [route, setRoute] = useState('/');
  const { routes = {} } = props;

  const Component = routes[route] || NotFound;

  const value = {
    route,
    setRoute,
  };

  return (
    <Context.Provider value={value}>
      <Component />
    </Context.Provider>
  );
}

export default Router;
